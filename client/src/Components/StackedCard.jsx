
import Button from "./Button";
import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useLoadSecureData from "../Hooks/useLoadSecureData";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

function StackedCard({ recipe }) {
  const { user, handleGoogle } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { data: dbUser, refetch } = useLoadSecureData(`users/${user?.email}`);

  const handleUpdateCoins = async () => {
    const coins = dbUser?.coins - 10;
    const updatedUser = { coins };
    const res = await axiosSecure.put(
      `/updateCoins/${dbUser?.email}`,
      updatedUser
    );
    refetch();
  };

  const handleUpdateCreatorCoins = async () => {
    const creatorEmail = recipe?.creatorEmail;
    const creator = await axiosSecure(`users/${creatorEmail}`)
    const creatorCoins = creator?.coins + 1;
    const updatedCreator = { coins: creatorCoins };
    const creatorRes = await axiosSecure.put(
      `/updateCoins/${creatorEmail}`,
      updatedCreator
    );
    console.log(creatorRes?.data)
  };

  const handleUpdateRecipe = async () => {
    const purchasedByEmail = dbUser?.email;
    const response = axiosSecure.put(`/updateRecipe/${recipe?._id}`, {
      purchasedByEmail,
    });
    console.log(response?.data);
  };

  const handleRecipeDetails = () => {
    if (!dbUser) {
      toast.error("You need to login first.");
      handleGoogle();
      return;
    }

    if (dbUser?.email === recipe?.creatorEmail) {
      navigate(`/recipeDetails/${recipe?._id}`);
      return;
    }

    if (recipe?.purchased_by.includes(dbUser?.email)) {
      navigate(`/recipeDetails/${recipe?._id}`);
      return;
    }

    if (dbUser?.coins < 10) {
      toast.warning("You need to buy coins.");
      navigate("/coins");
      return;
    }

    if (dbUser?.coins >= 10) {
      Swal.fire({
        title: "Are you sure to purchase this recipe?",
        text: "You will be cost 10 coins",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, purchase it!",
      }).then((result) => {
        if (result.isConfirmed) {
          handleUpdateCoins();
          handleUpdateRecipe();
          handleUpdateCreatorCoins();
          toast.success("You have purchased this recipe");
          navigate(`/recipeDetails/${recipe?._id}`);
          return;
        }
      });
    }
  };

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
          <div onClick={handleRecipeDetails}>
            <Button
              text="View The Recipe"
              style="border-none px-6 hover:border-2"
            />
          </div>
        </div>
        <figure className="flex-1">
          <img
            className="rounded-r-lg"
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
