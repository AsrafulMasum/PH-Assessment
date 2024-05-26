import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

function StackedCard({ recipe }) {
  return (
    <li>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-0 pb-8 md:pb-0 bg-neutral md:pl-20 rounded-lg">
        <div className="flex-1">
          <h2 className="text-3xl text-white">{recipe?.recipeName}</h2>
          <div className="leading-normal lg:leading-10">
            <p>Purchased_by: {recipe?.purchased_by?.length}</p>
            <p>Creator_Email: {recipe?.creatorEmail}</p>
            <p>Country: {recipe?.country}</p>
          </div>
          <Button
            text="View The Recipe"
            style="border-none px-6 hover:border-2"
          />
        </div>
        <figure className="flex-1">
          <img className="rounded-r-lg"
            src={recipe?.recipeImage}
            alt="Image description"
          />
        </figure>
      </div>
    </li>
  );
}

export default StackedCard;

StackedCard.propTypes = {
  recipe: PropTypes.object,
};
