import api from "../constants/api";


export const getUser = () => {
   
    const userData = localStorage.getItem('user')
    ? localStorage.getItem('user')
    : null
    const userInfo=userData?JSON.parse(userData):null
    return userInfo
  };

  export const getToken = () => {
    const userToken = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : null
   
    
    return userToken
  };

  export const getLogin = async (signinData) => {
    try {
      const response = await api.post("/api/login", signinData);
  
      // Check for the response status
      if (response.status === 400) {
        alert("Invalid Username or Password");
        return null;
      }
  
      // Save user and token data to localStorage
      localStorage.setItem("user", JSON.stringify(response.data.data));
      localStorage.setItem("token", response.data.token);
  
      // Redirect to home after a slight delay
  
      console.log("Login Data:", response.data.data);
      return response.data.data; // Return user data
    } catch (error) {
      console.error("Error during login:", error);
      return null; // Return null if an error occurs
    }
  };

  export const getSessionId = () => {
    const session = localStorage.getItem('sessionId')
    ? localStorage.getItem('sessionId')
    : null
   
    
    return session
  };