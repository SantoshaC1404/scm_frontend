import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext"; // ✅ import

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth(); // ✅ use context

  const handleLogout = async () => {
    logout();
    toast.success("Logout successful!");
    navigate("/home");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#050414]/60 backdrop-blur-xl border-b border-white/10 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="font-bold text-lg text-white">SCM</div>

        <ul className="hidden md:flex space-x-8 text-gray-200 font-medium">
          <li>
            <a href="/home">Home</a>
          </li>
          {!isLoggedIn && (
            <>
              <li>
                <a href="/register">Register</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li>
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 rounded-md hover:opacity-90 transition"
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        <div className="hidden md:flex space-x-4 text-white">
          <a
            href="https://github.com/SantoshaC1404"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/santosha-c-"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
