// ProtectedRoute.js
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import axios from "axios";

import BACKEND_URL from "../assets/BACKEND_URL";
import { useAuth } from "../context/AuthContext";
import Home from "./Home";
// import Loader1 from "../components/loaders/Loader1";

function ProtectedRoute({ children }) {
  const { authenticated, setAuthenticated, userInfo, setUserInfo } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}user/authenticate`, {
          withCredentials: true,
        });
        const { authenticated, user } = response.data;
        setAuthenticated(authenticated);
        console.log(authenticated);
        setUserInfo(user);
        console.log(user);
        // setLoading(false);
      } catch (error) {
        // console.error("Error checking authentication:", error);
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, [setAuthenticated, setUserInfo]);
  //   console.log(authenticated);
  //   console.log(userInfo);
  if (loading) {
    return <div>Loading...</div>;
  }
  // Pass the userInfo as a prop to the children component
  return authenticated ? (
    React.cloneElement(children, { userInfo })
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoute;
