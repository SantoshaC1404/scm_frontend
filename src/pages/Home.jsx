import React from "react";
import { motion } from "framer-motion";
import { FaUserShield, FaPhoneAlt, FaCloudUploadAlt } from "react-icons/fa";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 pt-24 bg-[#050414] text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            Smart Contact Manager
          </span>
        </h1>
        <p className="text-gray-300 text-lg mt-4">
          Manage your contacts effortlessly with a secure and intelligent
          platform powered by{" "}
          <span className="text-purple-400 font-semibold">Spring Boot</span> &
          <span className="text-pink-400 font-semibold"> React</span>.
        </p>

        <div className="mt-8">
          <a
            href="/register"
            className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-md text-white font-semibold hover:opacity-90 transition"
          >
            Get Started
          </a>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl w-full"
      >
        {/* Feature 1 */}
        <div className="bg-[#0e0b1f]/80 border border-white/10 p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <FaUserShield size={40} className="mx-auto text-purple-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Secure Contacts</h3>
          <p className="text-gray-400">
            All your contact data is stored securely with encrypted access and
            JWT-based authentication.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-[#0e0b1f]/80 border border-white/10 p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <FaPhoneAlt size={40} className="mx-auto text-pink-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Easy Contact Management</h3>
          <p className="text-gray-400">
            Add, edit, or delete contacts with a simple, intuitive dashboard UI
            that keeps everything organized.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-[#0e0b1f]/80 border border-white/10 p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <FaCloudUploadAlt
            size={40}
            className="mx-auto text-purple-400 mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Cloud Ready</h3>
          <p className="text-gray-400">
            Access your contacts anywhere, anytime. SCM is built for scalability
            and seamless cloud deployment.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
