import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL; // e.g. http://localhost:5000

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState("");

   const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
  });

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/blog/all");
      data.success ? setBlogs(data.blogs) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };


useEffect(() => {
  fetchBlogs();
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    setToken(storedToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
  }
}, []);



  const value = {
    axios,
    navigate,
    token,
    api,
    setToken,
    blogs,
    setBlogs,
    input,
    setInput,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);





// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const navigate = useNavigate();
//   const [token, setToken] = useState(null);
//   const [blogs, setBlogs] = useState([]);
//   const [input, setInput] = useState("");

//   // ---- SINGLE AXIOS INSTANCE ----
//   const api = axios.create({
//     // baseURL: import.meta.env.VITE_BASE_URL, 
//      baseURL: "http://localhost:5000", 
//   });

  
//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setToken(storedToken);

//       api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
//     }
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       const { data } = await api.get("/api/blog/all");
//       data.success ? setBlogs(data.blogs) : toast.error(data.message);
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const value = {
//     api,
//     navigate,
//     token,
//     setToken,
//     blogs,
//     setBlogs,
//     input,
//     setInput,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// export const useAppContext = () => useContext(AppContext);
