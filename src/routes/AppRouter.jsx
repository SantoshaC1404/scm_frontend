import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Layout from "../layouts/Layout";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Redirect default "/" to "/home" */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
