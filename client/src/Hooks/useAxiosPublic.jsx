import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://phassessment.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
