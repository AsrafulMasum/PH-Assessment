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
    origin: ["http://localhost:5173"],
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

app.get("/users/:email", async (req, res) => {
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
      console.log(user)
      if (existingUser) {
          return res.json({ exists: true}); 
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

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
