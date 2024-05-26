import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import AllRecipes from "./Pages/AllRecipes";
import AddRecipe from "./Pages/AddRecipe";
import PrivateRoutes from "./PrivateRoutes";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
    ],
  },
]);

export default Routes;
