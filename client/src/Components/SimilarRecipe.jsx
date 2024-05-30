import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import StackedCard from "./StackedCard";

function SimilarRecipe({ recipeItem, refetch }) {
  const axiosPublic = useAxiosPublic();
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = new URLSearchParams({
        page: page,
        category: recipeItem?.category,
        country: recipeItem?.country,
      }).toString();
      const res = await axiosPublic(`/recipes?${queryParams}`);
      const newData = res?.data;
      setRecipes((prevData) => [...prevData, ...newData]);
    };
    fetchData();
    refetch()
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, axiosPublic, recipeItem, refetch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="mt-28 max-w-screen-xl mx-4 xl:mx-auto">
      <ul className="my-10 space-y-10">
        {recipes?.map((recipe, idx) => (
          <StackedCard key={idx} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
}

export default SimilarRecipe;

SimilarRecipe.propTypes = {
  recipeItem: PropTypes.object,
  refetch: PropTypes.func,
};
