import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AddContactModal = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, number, image });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* 🔲 Background Overlay (with dashboard-like gradient + blur) */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-950 to-black bg-opacity-80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* 🧩 Modal Box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gradient-to-br from-gray-800 via-purple-900 to-black text-white p-6 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700 backdrop-blur-lg"
          >
            {/* ❌ Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
              onClick={onClose}
            >
              ✕
            </button>

            {/* Modal Header */}
            <h2 className="text-2xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Add New Contact
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-gray-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Number</label>
                <input
                  type="tel"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-gray-400"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-300"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-md hover:opacity-90 transition"
              >
                Save Contact
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddContactModal;
