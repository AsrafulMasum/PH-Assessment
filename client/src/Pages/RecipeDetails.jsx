import { useParams } from "react-router-dom";
import useLoadSecureData from "../Hooks/useLoadSecureData";
import SimilarRecipe from "../Components/SimilarRecipe";

function RecipeDetails() {
  const { id } = useParams();
  const { data: recipe, refetch } = useLoadSecureData(`/recipes/${id}`);

  return (
    <div className="max-w-screen-xl mx-4 xl:mx-auto mt-28">
      <div className="flex flex-col md:flex-row justify-center gap-20">
        <img
          className="md:w-1/2 rounded-lg object-cover"
          src={recipe?.recipeImage}
          alt=""
        />
        <div className="md:w-1/2 space-y-2">
          <h2 className="text-3xl text-primary">{recipe?.recipeName}</h2>
          <p className="text-white">Created_by: {recipe?.creatorEmail}</p>
          <p className="text-white">Country: {recipe?.country}</p>
          <p className="text-white">Category: {recipe?.category}</p>
          <p className="text-white">Watch_Count: {recipe?.watchCount}</p>
          <p className="text-white">
            Purchased_by:{" "}
            {recipe?.purchased_by?.map((buyerEmail, idx) => (
              <span key={idx} className="mr-4">
                {buyerEmail}
              </span>
            ))}
          </p>
          <h4 className="text-xl text-primary">Ingredients</h4>
          {recipe?.ingredients?.map((ingredient, idx) => (
            <p className="" key={idx}>
              {idx + 1}. {ingredient}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-20 my-20">
        <div className="lg:w-1/2 space-y-2">
          <h4 className="text-xl text-primary">Instructions</h4>
          {recipe?.instructions?.map((instruction, idx) => (
            <p className="" key={idx}>
              {idx + 1}. {instruction}
            </p>
          ))}
        </div>
        <div className="w-full lg:w-1/2">
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
            }}
          >
            <iframe
              src={recipe?.video}
              title="YouTube video player"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
              }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <SimilarRecipe recipeItem={recipe} refetch={refetch} />
    </div>
  );
}

export default RecipeDetails;
