import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Loading from "./Components/Loading";
import useAuth from "./Hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();

  const { handleGoogle, user, loading } = useAuth();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }else{
    handleGoogle()
    console.log(location)
  }
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
