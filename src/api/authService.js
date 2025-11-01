const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Register User
export const registerUser = async (userData) => {
  try {
    const responce = await fetch(`${BASE_URL}/auth/register`, {
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
    return await responce.json();
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
