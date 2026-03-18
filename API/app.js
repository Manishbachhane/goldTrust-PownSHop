import 'dotenv/config';
import express from 'express';
// import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import UserRouter from './routes/user.router.js';
import CategoryRouter from './routes/category.router.js';
import SubCategoryRouter from './routes/subcategory.router.js';
import ProductRouter from './routes/product.router.js';
import ForgetPassword from './controller/fp.controller.js';
import aiChatRoute from "./routes/aiChat.js";

const app=express();

//to handle cross origin request
app.use(cors());

//configuration to fetch req body content : body parser middleware
//used to fetch req data from methods like : POST , PUT , PATCH , DELETE
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//configuration to fetch file content : file upload middleware
app.use(fileUpload());

//route level middleware
app.use("/user",UserRouter);
app.use("/category",CategoryRouter);
app.use("/subcategory",SubCategoryRouter);
app.use("/product",ProductRouter);

app.use("/api/ai", aiChatRoute);

//route for forgetpassword
app.post("/forgetpassword",ForgetPassword);

app.listen(3001);
console.log("Server invoked at link http://localhost:3001");
