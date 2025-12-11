// import jwt from "jsonwebtoken";

// const auth = (req, res, next)=>{
//     const token = req.headers.authorization;

//     try {
//         jwt.verify(token, process.env.JWT_SECRET)
//         next();
//     } catch (error) {
//         res.json({success: false, message: "Invalid token"})
//     }
// }

// export default auth;




// import jwt from "jsonwebtoken";

// export const auth = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.json({ success: false, message: "Invalid token" });
//   }

//   const token = authHeader.split(" ")[1];
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.json({ success: false, message: "Invalid token" });
//   }
// };
// export default auth;




import jwt from "jsonwebtoken";

console.log("JWT Secret Loaded:", process.env.JWT_SECRET);

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.json({ success: false, message: "Invalid token" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.json({ success: false, message: "Invalid token" });
  }
};

export default auth;
