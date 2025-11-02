import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const EditContactModal = ({ isOpen, onClose, contact, onSave }) => {
  const [name, setName] = useState(contact?.name || "");
  const [number, setNumber] = useState(contact?.number || "");
  const [image, setImage] = useState(contact?.image || null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...contact, name, number, image });
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 z-30 flex items-center justify-center"
    >
      {/* Modal container (same blur and color as Add Contact) */}
      <div className="relative bg-gray-900/95 border border-pink-700 rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 backdrop-blur-md">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-pink-300">
          Edit Contact
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Number</label>
            <input
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default EditContactModal;
