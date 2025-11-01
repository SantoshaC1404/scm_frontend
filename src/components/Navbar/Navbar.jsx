import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "register", label: "Register" },
    { id: "login", label: "Login" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#050414]/60 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-lg">
          <span className="font-bold text-2xl">SCM</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-200 font-medium">
          {menuItems.map((item) => (
            <li key={item.id} className="hover:text-[#8245ec] cursor-pointer">
              <a href={`${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop Socials */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/SantoshaC1404"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#8245ec]"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/santosha-c-"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#8245ec]"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
