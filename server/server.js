import express from "express"
 import 'dotenv/config'
 import cors from 'cors'
 import connectDB from "./configs/db.js";
 import adminRouter from "./routes/adminRoutes.js";
 import blogRouter from "./routes/blogRoutes.js"; 
import dotenv from "dotenv";
 import ImageKit from "imagekit"; 


const app = express();


dotenv.config(); 

// // const imagekit = new ImageKit({
//  // publicKey: process.env.IMAGEKIT_PUBLIC_KEY, 
// // privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // 
// urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT, // 
// });


 await connectDB()


//  //Middlewares
// 
app.use(cors())
app.use(express.json()) 

app.get('/', (req, res)=> res.send("API is Working"))
app.use('/api/admin',adminRouter) 
app.use('/api/blog',blogRouter) 

const PORT = process.env.PORT || 3000; 
app.listen(PORT, ()=>{ 
    console.log('Server is running on port' + PORT) })
     export default app;