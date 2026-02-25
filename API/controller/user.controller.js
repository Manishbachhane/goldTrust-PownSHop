import "../models/connection.js";
import jwt from "jsonwebtoken";
import rs from "randomstring";

//to link users model
import UserSchemaModel from "../models/user.model.js";

export const save = async (req, res) => {
  const users = await UserSchemaModel.find();
  const l = users.length;
  const _id = l == 0 ? 1 : users[l - 1]._id + 1;
  const userDetails = { ...req.body, "_id": _id, "role": "user", "status": 0, "info": Date() };
  console.log(userDetails);
  try {
    await UserSchemaModel.create(userDetails);
    res.status(201).json({ "status": true });
  }
  catch (err) {
    res.status(500).json({ "status": false, "error": err.message });
  }
};

export const login = async (req, res) => {
  console.log('hello');
  const userDetails = { ...req.body, "status": 1 };
  const users = await UserSchemaModel.find(userDetails);
  console.log(users);
  if (users.length > 0) {
    const payload = users[0].email;
    const key = rs.generate(20);
    const token = jwt.sign(payload, key);
    res.status(200).json({ "status": true, "token": token, "info": users[0] });
  }
  else
    res.status(404).json({ "status": false });
};

export const fetch = async (req, res) => {

  var condition_obj = req.query;
  console.log(condition_obj);

  var userList = await UserSchemaModel.find(condition_obj);
  if (userList.length != 0)
    res.status(200).json({ "status": true, "info": userList });
  else
    res.status(404).json({ "status": false });
};


export var deleteUser=async(req,res)=>{
  try{
    let userDetails = await UserSchemaModel.findOne(req.body);
    if(userDetails){
      let user=await UserSchemaModel.deleteOne(req.body);   
      if(user)
        res.status(200).json({"status":true});
      else
        res.status(500).json({"status": false});
    }
    else
      res.status(404).json({"status":"Requested resource not available"});
  }catch(error){
    res.status(500).json({"status":false});        
  };
};


export var update=async(req,res)=>{
  try{
    let userDetails = await UserSchemaModel.findOne(req.body.condition_obj);
    if(userDetails){
      let user=await UserSchemaModel.updateMany(req.body.condition_obj,{$set:req.body.content_obj});   
      if(user)
        res.status(200).json({"status":true});
      else
        res.status(500).json({"status": false});
    }
    else
      res.status(404).json({"status":"Requested resource not available"});
  }catch(error){
    res.status(500).json({"status":false});        
  };
};