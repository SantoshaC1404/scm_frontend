import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const AddContactModal = ({ setModalOpen }) => {
  return (
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
  );
};

export default AddContactModal;
