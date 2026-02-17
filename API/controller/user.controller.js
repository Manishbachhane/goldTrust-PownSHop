import "../models/connection.js";
// import jwt from "jsonwebtoken"; 
// import rs from "randomstring";

//to link users model
import UserSchemaModel from "../models/user.model.js";

export const save=async(req,res)=>{
 const users=await UserSchemaModel.find();
 const l=users.length;
 const _id=l==0?1:users[l-1]._id+1;   
 const userDetails={...req.body,"_id":_id,"role":"user","status":0,"info":Date()}; 
 console.log(userDetails);
 try{
  await UserSchemaModel.create(userDetails);
  res.status(201).json({"status":true});  
 }
 catch {
  res.status(500).json({"status":false});   
 }
};

// export const login=async(req,res)=>{
//  const userDetails={...req.body,"status":1};    
//  const users=await UserSchemaModel.find(userDetails);
//  if(users.length>0)
//  {
//   const payload=users[0].email;
//   const key=rs.generate(20);
//   const token=jwt.sign(payload,key);
//   res.status(200).json({"status":true,"token":token,"info":users[0]});      
//  }
//  else
//   res.status(404).json({"status":false});       
// };

// export const fetch=async(req,res)=>{
//   var condition_obj=req.query.condition_obj;
//   if(condition_obj!=undefined)
//    condition_obj=JSON.parse(condition_obj); 
//   else
//    condition_obj={};  
  
//   var userList=await UserSchemaModel.find(condition_obj);
//   if(userList.length!=0)
//     res.status(200).json({"status":true,"info":userList});
//   else
//     res.status(404).json({"status":false});    
// };


// export var deleteUser=async(req,res)=>{
//   try{
//     let userDetails = await UserSchemaModel.findOne(JSON.parse(req.body.condition_obj));
//     if(userDetails){
//       let user=await UserSchemaModel.deleteOne(JSON.parse(req.body.condition_obj));   
//       if(user)
//         res.status(200).json({"status":true});
//       else
//         res.status(500).json({"status": false});
//     }
//     else
//       res.status(404).json({"status":"Requested resource not available"});
//   }catch(error){
//     res.status(500).json({"status":false});        
//   };
// };

// export var update=async(req,res)=>{
//   try{
//     let userDetails = await UserSchemaModel.findOne(JSON.parse(req.body.condition_obj));
//     if(userDetails){
//       let user=await UserSchemaModel.updateMany(JSON.parse(req.body.condition_obj),{$set:JSON.parse(req.body.content_obj)});   
//       if(user)
//         res.status(200).json({"status":true});
//       else
//         res.status(500).json({"status": false});
//     }
//     else
//       res.status(404).json({"status":"Requested resource not available"});
//   }catch(error){
//     res.status(500).json({"status":false});        
//   };
// };