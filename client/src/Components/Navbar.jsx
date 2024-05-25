import React, { useContext } from "react";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { AuthContext } from "../Provider/AuthProvider";


function Navbar() {
  const {logInWithGoogle} = useContext(AuthContext)
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">Recipes</NavLink>
      </li>
    </>
  );

  const handleGoogle = async () => {
    try {
      logInWithGoogle().then((res) => {
        console.log(res)
        const user = {
          email: res?.user?.email,
          name: res?.user?.displayName,
          photoURL: res?.user?.photoURL,
          coins: 50,
        };
        // axiosPublic
        //   .put("/users", user)
        //   .then((res) => {
        //     if (
        //       res?.data?.upsertedCount ||
        //       res?.data?.modifiedCount ||
        //       res?.data?.exists
        //     ) {
        //       toast.success("Log In Successful.");
        //       navigate(
        //         location?.state?.from?.pathname
        //           ? location?.state?.from?.pathname
        //           : "/"
        //       );
        //     }
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      });
    } catch (error) {
      console.log(error);
    }
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
                className="btn btn-square btn-ghost"
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
            <div className="flex-1 px-2 mx-2">
              <Link to="/">Cooking</Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {navLinks}
              </ul>
            </div>
            {/* <div className="ml-4 mr-4">
              {user ? (
                <UserDropdown></UserDropdown>
              ) : (
                // <Link
                //   to="/login"
                //   className="btn btn-sm btn-outline text-white px-6 hover:bg-primary hover:border-primary duration-300"
                // >
                //   Join Us
                // </Link>
                <div onClick={handleNavigate}>
                  <Button
                    text="Login"
                    style="btn btn-sm border-primary hover:border-white bg-transparent text-white"
                  ></Button>
                </div>
              )}
            </div> */}
            <div className="pl-4 border-l">
              <div onClick={handleGoogle}>
              <Button
                text="Google Login"
                style="btn border-tertiary hover:border-transparent bg-transparent text-white"
              />
              </div>
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
