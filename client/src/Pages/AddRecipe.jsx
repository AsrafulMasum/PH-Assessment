import React, { useState } from "react";
import Title from "../Components/Title";
import { useForm } from "react-hook-form";
import Button from "../Components/Button";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const imgHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

function AddRecipe() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // form handler
  const onSubmit = async (data) => {
    setLoading(true);

    // image hosting
    const imageFile = { image: data?.recipeImage[0] };
    const imgRes = await axiosPublic.post(imgHostingApi, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const recipeImage = imgRes.data.data.display_url;

    // seperating ingredients and instructions
    let ingredientsArr = data?.ingredients?.split(",");
    let instructionsArr = data?.instructions?.split(",");

    const recipeData = {
      recipeName: data?.recipeName,
      recipeImage,
      country: data?.country,
      category: data?.category,
      video: data?.video,
      ingredients: ingredientsArr,
      instructions: instructionsArr,
      creatorEmail: user?.email,
      watchCount: 0,
      purchased_by: [],
    };

    // insert data to DB
    const res = await axiosSecure.post("/recipes", recipeData);
    if (res?.data?.insertedId) {
      toast.success("Recipe added to the Database.");
      setLoading(false);
      reset();
    }
  };

  return (
    <div className="my-28">
      <Title
        title="Add A Recipe"
        subTitle="Collecting all necessary information about the recipe"
        desc="Add a recipe to share creativity, spread joy, preserve culture, inspire others, build community, receive feedback, and document your culinary journey."
      />

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto my-20">
        <input
          {...register("recipeName", { required: true })}
          className="w-full h-11 outline-none px-5 bg-white border border-[#D0D0D0] rounded text-black placeholder:text-black"
          type="text"
          placeholder="Recipe Name"
          required
        />

        <label
          htmlFor="dropzone-file"
          className="flex items-center px-3 py-3 mx-auto mt-4 text-center bg-white border border-dashed border-[#D0D0D0] rounded cursor-pointer text-black placeholder:text-black"
        >
          <input
            {...register("recipeImage", { required: true })}
            id="dropzone-file"
            type="file"
            required
          />
        </label>

        <input
          {...register("country", { required: true })}
          className="w-full h-11 outline-none px-5 mt-4 bg-white border border-[#D0D0D0] rounded text-black placeholder:text-black"
          type="text"
          placeholder="Country"
          required
        />

        <input
          {...register("video", { required: true })}
          className="w-full h-11 outline-none px-5 mt-4 bg-white border border-[#D0D0D0] rounded text-black placeholder:text-black"
          type="text"
          placeholder="Embedded Youtube Video Code"
          required
        />

        <select
          {...register("category", { required: true })}
          className="w-full h-11 outline-none px-5 mt-4 bg-white border border-[#D0D0D0] rounded text-black placeholder:text-black"
        >
          <option value="">Select a category</option>
          <option value="Pasta">Pasta</option>
          <option value="Curry">Curry</option>
          <option value="Main Course">Main Course</option>
          <option value="Stir-Fry">Stir-Fry</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Salad">Salad</option>
          <option value="Dessert">Dessert</option>
          <option value="Appetizer">Appetizer</option>
          <option value="Beverage">Beverage</option>
          <option value="Soup">Soup</option>
          <option value="Sandwich">Sandwich</option>
          <option value="Side Dish">Side Dish</option>
          <option value="Grill">Grill</option>
          <option value="Casserole">Casserole</option>
          <option value="Bread">Bread</option>
          <option value="Cake">Cake</option>
          <option value="Pie">Pie</option>
          <option value="Cookie">Cookie</option>
          <option value="Ice Cream">Ice Cream</option>
          <option value="Smoothie">Smoothie</option>
          <option value="Cocktail">Cocktail</option>
        </select>

        <textarea
          {...register("ingredients", { required: true })}
          className="w-full h-11 outline-none px-5 mt-4 bg-white border border-[#D0D0D0] rounded pt-[9px] text-black placeholder:text-black"
          placeholder="Seperate Ingredients with Comma(',') "
          required
        />

        <textarea
          {...register("instructions", { required: true })}
          className="w-full h-11 outline-none px-5 mt-2 bg-white border border-[#D0D0D0] rounded pt-[9px] text-black placeholder:text-black"
          placeholder="Seperate Instructions with Comma(',') "
          required
        />
        <div className="flex justify-center items-center mt-4">
          <Button text="Add Recipe" style="btn-wide" loading={loading} />
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;
