require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://phassesment.web.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a7zgpzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// jwt middleware
const verifyCookie = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send({ message: "Unauthorized Access" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized Access" });
    }
    req.user = decoded;
    next();
  });
};

// mongodb connection
const dbConnect = async () => {
  try {
    client.connect();
    console.log("DB Connected Successfully✅");
  } catch (error) {
    console.log(error.name, error.message);
  }
};
dbConnect();

const database = client.db("RecipeRealmDB");
const usersCollections = database.collection("usersDB");
const recipeCollections = database.collection("recipeDB");

// jwt api method
app.post("/jwt", (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  res
    .cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .send({ success: true });
});

app.post("/logout", (req, res) => {
  const user = req.body;
  res.clearCookie("token", { maxAge: 0 }).send({ success: true });
});

app.get("/", (req, res) => {
  res.send("server is running data will be appear soon...");
});

// users api method
app.get("/users", async (req, res) => {
  const cursor = usersCollections.find();
  const result = await cursor.toArray();
  res.send(result);
});

app.get("/users/:email", verifyCookie, async (req, res) => {
  const userEmail = req.params.email;
  const query = { email: userEmail };
  const result = await usersCollections.findOne(query);
  res.send(result);
});

app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    console.log(user);
    if (user) {
      const existingUser = await usersCollections.findOne({
        email: user.email,
      });
      console.log("Existing user:", existingUser);
      console.log(user);
      if (existingUser) {
        return res.json({ exists: true });
      } else {
        const result = await usersCollections.insertOne(user);
        res.status(201).json(result);
      }
    }
  } catch (error) {
    // Catch and log any error that occurs during the process
    console.error("Error inserting user: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/recipes", async (req, res) => {
  const { page, category, country, search } = req.query;
  const pageNumber = parseInt(page) || 1;
  const limit = 10;
  const filter = {};
  if (category) {
    filter.category = category;
  }
  if (country) {
    filter.country = country;
  }
  if (search) {
    filter.recipeName = { $regex: search, $options: "i" };
  }
  try {
    const options = {
      projection: {
        recipeName: 1,
        country: 1,
        creatorEmail: 1,
        purchased_by: 1,
        recipeImage: 1,
        category: 1,
        _id: 0,
      },
    };
    const cursor = recipeCollections.find(filter, options).skip((pageNumber - 1) * limit).limit(limit);
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/recipes/:id", verifyCookie, async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await recipeCollections.findOne(query);
  res.status(201).json(result);
});

app.post("/recipes", verifyCookie, async (req, res) => {
  const recipeData = req.body;
  const result = await recipeCollections.insertOne(recipeData);
  res.status(201).json(result);
});

app.get("/countries", async (req, res) => {
  try {
    const uniqueCountries = await recipeCollections.aggregate([
      { $group: { _id: "$country" } },
      { $project: { _id: 0, country: "$_id" } }
    ]).toArray();
    const countryNames = uniqueCountries.map(country => country.country);
    res.json(countryNames);
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/categories", async (req, res) => {
  try {
    const uniqueCategories = await recipeCollections.aggregate([
      { $group: { _id: "$category" } },
      { $project: { _id: 0, category: "$_id" } }
    ]).toArray();
    const categoryNames = uniqueCategories.map(category => category.category);
    res.json(categoryNames);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Server Error" });
  }
});


app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
