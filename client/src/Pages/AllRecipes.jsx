import React, { useEffect, useState } from "react";
import Title from "../Components/Title";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import StackedCard from "../Components/StackedCard";
import useLoadPublicData from "../Hooks/useLoadPublicData";

function AllRecipes() {
  const axiosPublic = useAxiosPublic();
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: countries } = useLoadPublicData("/countries");
  const { data: categories } = useLoadPublicData("/categories");

  useEffect(() => {
    fetchData();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, category, country, searchQuery]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchData = async () => {
    const queryParams = new URLSearchParams({
      page: page,
      category: category,
      country: country,
      search: searchQuery,
    }).toString();
    const res = await axiosPublic(`/recipes?${queryParams}`);
    const newData = res?.data;
    setRecipes((prevData) => [...prevData, ...newData]);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setRecipes([]);
    setPage(1);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setRecipes([]);
    setPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setRecipes([]);
    setPage(1);
  };

  return (
    <div className="mt-28 max-w-screen-xl mx-4 xl:mx-auto">
      <Title
        title="All The Recipes"
        subTitle="A Bounty of Tastes Awaits Your Palate"
        desc="All The Recipes offers diverse culinary creations worldwide, from comforting classics to modern delights, with detailed instructions for every dish, perfect for all cooking enthusiasts."
      />
      <div className="flex flex-col lg:flex-row justify-center items-center space-x-4 mt-10 gap-4">
        <div className="flex justify-center items-center gap-4">
          <label className="text-lg" htmlFor="category">Category:</label>
          <select
            className="w-full h-11 outline-none px-5 bg-white border border-[#D0D0D0] rounded text-black placeholder:text-black"
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            {categories?.map((category, idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center items-center gap-4">
          <label className="text-lg" htmlFor="country">Country:</label>
          <select
            className="w-full h-11 outline-none px-5 bg-white border border-[#D0D0D0] rounded text-black placeholder:text-black"
            id="country"
            value={country}
            onChange={handleCountryChange}
          >
            <option value="">All</option>
            {countries?.map((country, idx) => (
              <option key={idx} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center items-center gap-4">
          <label className="text-lg" htmlFor="search">Search:</label>
          <input
            className="w-full h-11 outline-none px-5 bg-white border border-[#D0D0D0] rounded text-black placeholder:text-black"
            type="text"
            id="search"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by recipe title"
          />
        </div>
      </div>

      <ul className="my-10 space-y-10">
        {recipes?.map((recipe) => (
          <StackedCard key={recipe?._id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
}

export default AllRecipes;
