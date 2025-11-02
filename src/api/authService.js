const BASE_URL = import.meta.env.VITE_API_URL;

// Register User
export const registerUser = async (userData) => {
  try {
    console.log("📤 Sending user data to backend:", userData);
    console.log("🌐 API URL:", `${BASE_URL}/signup`);
    const responce = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!responce.ok) {
      const error = await responce.json();
      throw new Error(error.message || "Failed to register user");
    }
    const result = await responce.json();
    console.log("✅ Backend response:", result);
    return result;
  } catch (error) {
    throw error;
  }
};

// Login User
export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to login user");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

// Logout User
export const logoutUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  try {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      credentials: "include", // 👈 important if cookies/session used
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Logout failed");
    }

    return data;
  } catch (error) {
    throw error;
  }
};
