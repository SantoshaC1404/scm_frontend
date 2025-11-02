import React from "react";
import { X, Edit3, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AllContactsModal = ({ isOpen, onClose }) => {
  // Dummy contact data
  const contacts = [
    { id: 1, name: "John Doe", number: "9876543210", image: "" },
    { id: 2, name: "Jane Smith", number: "9123456789", image: "" },
    { id: 3, name: "Mark Wilson", number: "9988776655", image: "" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ✅ Background Blur (same as Add/Edit) */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* ✅ Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed z-50 inset-0 flex items-center justify-center px-4"
          >
            <div className="relative bg-gray-900/90 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl max-w-4xl w-full p-8">
              {/* ❌ Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              >
                <X size={24} />
              </button>

              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                All Contacts
              </h2>

              {/* ✅ Table */}
              <div className="overflow-x-auto max-h-[60vh] overflow-y-auto">
                <table className="w-full border-collapse border border-gray-700 text-left">
                  <thead>
                    <tr className="bg-gray-800/70 text-gray-300">
                      <th className="px-6 py-3 border border-gray-700">
                        Image
                      </th>
                      <th className="px-6 py-3 border border-gray-700">Name</th>
                      <th className="px-6 py-3 border border-gray-700">
                        Number
                      </th>
                      <th className="px-6 py-3 border border-gray-700 text-center">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact, index) => (
                      <tr
                        key={contact.id}
                        className={`${
                          index % 2 === 0 ? "bg-gray-800/40" : "bg-gray-800/20"
                        } hover:bg-gray-800/60 transition`}
                      >
                        <td className="px-6 py-3 border border-gray-700">
                          {contact.image ? (
                            <img
                              src={contact.image}
                              alt={contact.name}
                              className="w-10 h-10 rounded-full object-cover border border-gray-600"
                            />
                          ) : (
                            <div className="w-10 h-10 flex items-center justify-center bg-gray-700 text-gray-300 rounded-full border border-gray-600">
                              {contact.name.charAt(0)}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-3 border border-gray-700 font-medium text-white">
                          {contact.name}
                        </td>
                        <td className="px-6 py-3 border border-gray-700 text-gray-300">
                          {contact.number}
                        </td>
                        <td className="px-6 py-3 border border-gray-700 text-center">
                          <div className="flex justify-center space-x-4">
                            <button className="text-blue-400 hover:text-blue-500 transition">
                              <Edit3 size={20} />
                            </button>
                            <button className="text-red-400 hover:text-red-500 transition">
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AllContactsModal;
