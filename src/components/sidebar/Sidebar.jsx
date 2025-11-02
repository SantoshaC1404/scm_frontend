import React from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus, Edit3, Users, LogOut } from "lucide-react"; // nice minimal icons
import { logoutUser } from "../../api/authService";
import { toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem("token");
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error(error.message || "Logout failed!");
    }
  };

  const menuItems = [
    {
      id: "add",
      label: "Add Contact",
      icon: <UserPlus size={18} />,
      path: "/dashboard/add",
    },
    {
      id: "edit",
      label: "Edit Contact",
      icon: <Edit3 size={18} />,
      path: "/dashboard/edit",
    },
    {
      id: "all",
      label: "All Contacts",
      icon: <Users size={18} />,
      path: "/dashboard/all",
    },
  ];

  return (
    <div className="w-64 bg-[#0d081f]/90 h-screen border-r border-gray-700 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-8 text-purple-400">
          Smart Contacts
        </h2>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => navigate(item.path)}
              className="flex items-center space-x-3 p-3 rounded-md hover:bg-purple-600/30 cursor-pointer transition"
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-500 py-2 rounded-md hover:opacity-90 transition"
      >
        <LogOut size={18} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
