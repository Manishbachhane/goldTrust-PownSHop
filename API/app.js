import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import UserRouter from './routes/user.router.js';
import ForgetPassword from './controller/fp.controller.js';

const app=express();

//to handle cross origin request
app.use(cors());

//configuration to fetch req body content : body parser middleware
//used to fetch req data from methods like : POST , PUT , PATCH , DELETE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//route level middleware
app.use("/user",UserRouter);



//route for forgetpassword
app.post("/forgetpassword",ForgetPassword);

app.listen(3001);
console.log("Server invoked at link http://localhost:3001");
