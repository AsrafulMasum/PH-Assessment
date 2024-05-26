import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const logInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

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

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      setUser(currentUser);
      setLoading(false);
      const loggedInUser = { email: userEmail };
      if (currentUser) {
        axiosPublic
          .post("/jwt", loggedInUser, {
            withCredentials: true,
          })
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      } else {
        axiosPublic
          .post("/logout", loggedInUser, {
            withCredentials: true,
          })
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      }
    });
    return () => unSubscribe();
  }, [user, axiosPublic]);

  const authData = {
    user,
    loading,
    setLoading,
    logInWithGoogle,
    updateUser,
    handleGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
