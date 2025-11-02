import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Dashboard token:", token); // 👀 Debug log

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="text-center text-white p-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p className="text-lg">You are successfully logged in!</p>
    </div>
  );
};

export default Dashboard;
