import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { registerUser } from "../api/authService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    about: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending payload:", formData);

    try {
      const response = await registerUser(formData);
      console.log("Backend Response:", response);
      toast.success("Account created successfully! 🎉", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });

      setFormData({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        about: "",
      });
    } catch (error) {
      console.error("Error while registering:", error);
      toast.error(error.message || "Registration failed!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  return (
    <section className="mt-12 flex flex-col items-center justify-center bg-gradient-to-br px-4">
      <ToastContainer />

      <div className="backdrop-blur-lg border border-gray-700 p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white">Create Account</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-3"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            Join us today — it’s quick and easy!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Two-column layout for inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col space-y-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
              />

              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* About field full width */}
          <textarea
            name="about"
            placeholder="Tell us something about you..."
            value={formData.about}
            onChange={handleChange}
            rows="3"
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          {/* Register button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition cursor-pointer"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="text-gray-400 px-3 text-sm">or continue with</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Social logins */}
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => toast.info("Google Sign-In coming soon 🚀")}
            className="flex-1 flex items-center justify-center gap-2 bg-[#131025] border border-gray-600 py-3 rounded-md text-white hover:border-purple-500 transition cursor-pointer"
          >
            <FcGoogle size={24} />
            Sign in with Google
          </button>

          <button
            onClick={() => toast.info("Github Sign-In coming soon 🚀")}
            className="flex-1 flex items-center justify-center gap-2 bg-[#131025] border border-gray-600 py-3 rounded-md text-white hover:border-purple-500 transition cursor-pointer"
          >
            <FaGithub size={24} />
            Sign in with Github
          </button>
        </div>

        {/* Login redirect */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-purple-400 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </section>
  );
};

export default Register;
