import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import useLoadSecureData from "../Hooks/useLoadSecureData";

function Navbar() {
  const { logInWithGoogle, user, logOut } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: dbUser } = useLoadSecureData(`users/${user?.email}`);
  console.log(dbUser);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/recipe">Recipes</NavLink>
      </li>
      {dbUser && (
        <li>
          <NavLink to="/addRecipe">Add Recipes</NavLink>
        </li>
      )}
      {dbUser && (
        <li>
          <NavLink to="/payment">{dbUser?.coins} Coins</NavLink>
        </li>
      )}
    </>
  );

  // google signin
  const handleGoogle = async () => {
    try {
      logInWithGoogle().then((res) => {
        const user = {
          email: res?.user?.email,
          displayName: res?.user?.displayName,
          photoURL: res?.user?.photoURL,
          coins: 50,
        };
        axiosPublic
          .post("/users", user)
          .then((res) => {
            console.log(res?.data);
            if (res?.data?.insertedId || res?.data?.exists) {
              toast.success("Log In Successful.");
              // navigate(
              //   location?.state?.from?.pathname
              //     ? location?.state?.from?.pathname
              //     : "/"
              // );
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    logOut().then();
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full bg-black bg-opacity-50 fixed z-10 backdrop-blur-md">
          <div className="navbar max-w-screen-xl mx-auto">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost pt-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 text-primary font-semibold text-lg">
              <Link to="/">RecipeRealm</Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {navLinks}
              </ul>
            </div>
            <div className="ml-4 mr-4">
              {dbUser ? (
                <div className="flex justify-center items-center gap-4">
                  <div>
                    <img
                      className="w-10 rounded-full"
                      src={dbUser?.photoURL}
                      alt="User Image"
                    />
                  </div>
                  <div onClick={handleLogout}>
                    <Button
                      text="Logout"
                      style="btn px-6 border-tertiary hover:border-transparent bg-primary text-white"
                    />
                  </div>
                </div>
              ) : (
                <div className="ml-10">
                  <div onClick={handleGoogle}>
                    <Button
                      text="Login with Google"
                      style="btn border-tertiary hover:border-transparent bg-primary text-white"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Page content here */}
        {/* <div>{children}</div> */}
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-gray-700">
          {/* Sidebar content here */}
          {navLinks}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
