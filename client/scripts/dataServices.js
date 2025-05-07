const baseURL = "http://localhost:5000/member";
 // Write down the base URL of the created API.

 const getAllUser = async () => {
    try {
      const response = await fetch(baseURL);
      if (!response.ok) throw new Error("Failed to fetch users");
      return await response.json();
    } catch (error) {
      console.error("Error in getAllUser:", error);
      return [];
    }
  };
  
  const createUser = async (userData) => {
    try {
      const response = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) throw new Error("Failed to create user");
      return await response.json();
    } catch (error) {
      console.error("Error in createUser:", error);
      return null;
    }
  };
  
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${baseURL}/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) throw new Error("Failed to delete user");
      return await response.json();
    } catch (error) {
      console.error("Error in deleteUser:", error);
      return null;
    }
  };
  
export { getAllUser, deleteUser, createUser };
