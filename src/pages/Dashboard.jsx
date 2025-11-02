import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserPlus, Edit3, Users, X } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      className={`relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-black flex flex-col items-center justify-center px-6 text-white transition-all duration-300 ${
        modalOpen ? "overflow-hidden" : ""
      }`}
    >
      {/* Background blur overlay (only when modal open) */}
      {modalOpen && (
        <div className="absolute inset-0 backdrop-blur-lg bg-black/50 z-25"></div>
      )}

      {/* Dashboard Content */}
      <div
        className={`relative z-20 transition-all duration-300 ${
          modalOpen ? "pointer-events-none select-none" : ""
        }`}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 drop-shadow-lg">
            Smart Contact Dashboard
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Welcome back! Manage your contacts seamlessly — create, update, and
            organize them in one place.
          </p>
        </motion.div>

        {/* Action Cards */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl w-full">
          {/* Add Contact */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer bg-gray-800/40 border border-gray-700 hover:border-purple-500 rounded-2xl p-8 shadow-xl transition"
            onClick={() => setModalOpen(true)}
          >
            <div className="flex flex-col items-center text-center">
              <UserPlus className="w-10 h-10 text-purple-400 mb-3" />
              <h2 className="text-2xl font-semibold mb-2">Add Contact</h2>
              <p className="text-gray-400">Create a new contact instantly.</p>
            </div>
          </motion.div>

          {/* Edit Contact */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            onClick={() => navigate("/edit-contact")}
            className="group cursor-pointer bg-gray-800/40 backdrop-blur-lg border border-gray-700 hover:border-pink-500 rounded-2xl p-8 shadow-xl hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-pink-600/20 p-4 rounded-full mb-4 group-hover:bg-pink-600/30 transition">
                <Edit3 className="w-10 h-10 text-pink-400" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Edit Contact</h2>
              <p className="text-gray-400">
                Update existing contacts with new details or preferences.
              </p>
            </div>
          </motion.div>

          {/* All Contacts */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            onClick={() => navigate("/all-contacts")}
            className="group cursor-pointer bg-gray-800/40 backdrop-blur-lg border border-gray-700 hover:border-blue-500 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600/20 p-4 rounded-full mb-4 group-hover:bg-blue-600/30 transition">
                <Users className="w-10 h-10 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">All Contacts</h2>
              <p className="text-gray-400">
                View, search, and organize all your saved contacts easily.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add Contact Modal */}
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 z-30 flex items-center justify-center"
        >
          <div className="relative bg-gray-900/95 border border-purple-700 rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4">
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center text-purple-300">
              Add New Contact
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Number</label>
                <input
                  type="tel"
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition"
              >
                Save Contact
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Dashboard;
