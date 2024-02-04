import React from "react";
import ReactDOM from "react-dom/client";

// own react components
import App from "./App";

// react components from react libraries
import { ToastContainer } from "react-toastify";

// css files
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";

// creating root in react dom from html document
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering App component in root
root.render(
  <>
    <AuthProvider>
      <ToastContainer autoClose={2000} />
      <App />
    </AuthProvider>
  </>
);
