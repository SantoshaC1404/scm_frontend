import React, { useState } from "react";
import { loginUser } from "../api/authService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ use context
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await loginUser(formData);
      if (response?.token) {
        login(response.token); // ✅ update context
        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        toast.error("Invalid response from server");
      }
    } catch (error) {
      toast.error(error.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center pt-20 px-4 pb-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">Login Here</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Join us and get started with your account today!
        </p>
      </div>

      <div className="w-full max-w-md bg-[#0d081f]/90 p-6 rounded-lg shadow-lg border border-gray-700 backdrop-blur-md">
        <h3 className="text-xl font-semibold text-white text-center mb-4">
          Login
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-white/90"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white placeholder-white/70"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2 text-white/90"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white placeholder-white/70"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition cursor-pointer mt-5"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-purple-400 hover:text-purple-300 font-semibold"
          >
            Register
          </a>
        </p>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
