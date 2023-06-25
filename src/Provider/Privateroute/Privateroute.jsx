import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontex } from "../Authprovider";

// eslint-disable-next-line react/prop-types
const Privateroute = ({ children }) => {
  const location = useLocation();
  // console.log(location);
  const { user, loading } = useContext(Authcontex);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-10 h-10 border-b-8 border-r-4 rounded-full animate-spin dark:border-amber-700"></div>
        <p className="font-bold text-xl text-amber-700 ms-2">Loading....</p>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default Privateroute;
