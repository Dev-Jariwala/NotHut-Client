import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const { userInfo, setUserInfo, setAuthenticated, setCartItems } = useAuth();
  const [loading, setLoading] = useState(true);
  const handleLogout = async () => {
    try {
      setLoading(true);
      await axios.get("http://localhost:8080/api/user/logout", {
        withCredentials: true,
      });
      setAuthenticated(false);
      setUserInfo(null);
      toast.success("Logout Successfully!");
      setLoading(false);
      setCartItems([]);
    } catch (error) {
      // console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {userInfo.username}{" "}
      <button
        className="btn btn-primary"
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Home;
