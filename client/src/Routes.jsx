import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import AllRecipes from "./Pages/AllRecipes";
import AddRecipe from "./Pages/AddRecipe";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "./Pages/ErrorPage";
import RecipeDetails from "./Pages/RecipeDetails";
import CoinsPage from "./Pages/CoinsPage";
import Payment from "./Pages/Payment";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/recipes",
        element: <AllRecipes />,
      },

      {
        path: "/addRecipe",
        element: (
          <PrivateRoutes>
            <AddRecipe />
          </PrivateRoutes>
        ),
      },

      {
        path: "/recipeDetails/:id",
        element: (
          <PrivateRoutes>
            <RecipeDetails />
          </PrivateRoutes>
        ),
      },

      {
        path: "/coins",
        element: (
          <PrivateRoutes>
            <CoinsPage />
          </PrivateRoutes>
        ),
      },

      {
        path: "/payment",
        element: (
          <PrivateRoutes>
            <Payment />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default Routes;
