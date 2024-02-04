import React from "react";
import Login from "./components/Login";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
