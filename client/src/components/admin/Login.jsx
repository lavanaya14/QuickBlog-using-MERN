// import React, { useState } from "react";
// import { useAppContext } from "../../context/AppContext";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const { axios, setToken } = useAppContext();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("/api/admin/login", {
//         email,
//         password,
//       });

//       if (data.success) {
//         // ✅ Save token
//         setToken(data.token);
//         localStorage.setItem("token", data.token);
//         axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

//         toast.success("Login successful!");
//         navigate("/admin"); // ✅ redirect to dashboard
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="w-full max-w-sm p-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold">
//             <span className="text-primary">Admin</span> Login
//           </h1>
//           <p className="font-light">Enter credentials to access admin panel</p>
//         </div>

//         <form onSubmit={handleSubmit} className="text-gray-600">
//           <div className="mb-6">
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               name="email"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               type="email"
//               required
//               placeholder="your email id"
//               className="w-full border-b-2 border-gray-300 p-2 outline-none"
//             />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="password">Password</label>
//             <input
//               id="password"
//               name="password"
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//               type="password"
//               required
//               placeholder="your password"
//               className="w-full border-b-2 border-gray-300 p-2 outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-primary text-white rounded hover:bg-primary/90 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;






import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { axios, setToken } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    try {
      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });
      // console.log("Response from backend:", data);

      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        toast.success("Login successful!");
        navigate("/admin"); // redirect to dashboard
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error( error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-sm p-6 border border-gray-300 shadow-md rounded-lg bg-white">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            <span className="text-primary">Admin</span> Login
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Enter credentials to access admin panel
          </p>
        </div>
        <form onSubmit={handleSubmit} className="text-gray-600">
  <div className="mb-6">
    <label htmlFor="email">Email</label>
    <input
      id="email"
      name="email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      type="email"
      required
      placeholder="Your email id"
      className="w-full border-b-2 border-gray-300 p-2 outline-none"
    />
  </div>

  <div className="mb-6">
    <label htmlFor="password">Password</label>
    <input
      id="password"
      name="password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      type="password"
      required
      placeholder="Your password"
      className="w-full border-b-2 border-gray-300 p-2 outline-none"
    />
  </div>

  <button
    type="submit"
    className="w-full py-3 bg-primary text-white rounded hover:bg-primary/90 transition"
  >
    Login
  </button>
</form>

      </div>
    </div>
  );
};

export default Login;
