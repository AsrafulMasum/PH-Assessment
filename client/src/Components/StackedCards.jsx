import { useEffect } from "react";
import Button from "./Button";
import Title from "./Title";
import useLoadPublicData from "../Hooks/useLoadPublicData";
import StackedCard from "./StackedCard";
import { useNavigate } from "react-router-dom";

function StackedCards() {
  const { data, refetch } = useLoadPublicData("/recipes");
  const recipes = data?.slice(0, 5);
  const navigate = useNavigate();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scale-animation");
        } else {
          entry.target.classList.remove("scale-animation");
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll(".card__content");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [recipes]);

  const handleViewAllRecipe = () => {
    navigate("/recipes");
  };

  return (
    <div className="my-20 max-w-screen-xl mx-4 md:mx-8 xl:mx-auto">
      <Title
        title="Featured Recipes"
        subTitle="Delicious Dishes to Delight Your Taste Buds"
        desc="Discover global dishes with our featured recipes. From Italian Carbonara to Indian Curry, enjoy authentic flavors and easy instructions. Start your culinary adventure today!"
      />

      <div className="mt-10">
        <ul id="cards" className="space-y-4">
          {recipes?.map((recipe, idx) => (
            <StackedCard
              key={idx}
              recipe={recipe}
              idx={idx}
              fetchData={refetch}
            />
          ))}
        </ul>
        <div
          onClick={handleViewAllRecipe}
          className="flex justify-center items-center mt-8"
        >
          <Button
            text="View All Recipes"
            style="btn-wide bg-primary text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default StackedCards;
