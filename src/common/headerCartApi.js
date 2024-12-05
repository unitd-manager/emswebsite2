import api from "../constants/api";

// Utility function to get parsed user data from localStorage
const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : {};
};

// Function to fetch cart data
export const getCart = async () => {
  try {
    const user = getUserFromLocalStorage();
    const userContactId = user.contact_id || null;

    if (!userContactId) {
      console.error("Contact ID is missing.");
      return null;
    }

    const response = await api.post("/contact/getCartProductsByContactId", { contact_id: userContactId });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching cart data:", error);
    return null;
  }
};
