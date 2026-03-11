import "../models/connection.js";
import url from 'url';
import path from 'path';
import rs from 'randomstring';

//to link category model
import CategorySchemaModel from "../models/category.model.js";

export const save=async(req,res)=>{
 const category=await CategorySchemaModel.find();
 const l=category.length;
 const _id=l==0?1:category[l-1]._id+1;

 const caticon=req.files.caticon;
 const caticonnm=rs.generate(10)+"_"+Date.now()+"_"+caticon.name;   

 const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
 const uploadfilepath = path.join(__dirname,'../../UI/public/assets/uploads/caticons',caticonnm);

 const cDetails={...req.body,"caticonnm":caticonnm,"_id":_id}; 
 try{
  await CategorySchemaModel.create(cDetails);
  
  caticon.mv(uploadfilepath);
  res.status(201).json({"status":true});  
 }
 catch {
  res.status(500).json({"status":false});   
 }
};


export const fetch=async(req,res)=>{
  var condition_obj=req.query; 
  var cList=await CategorySchemaModel.find(condition_obj);
  if(cList.length!=0)
    res.status(200).json({"status":true,"info":cList});
  else
    res.status(404).json({"status":false});    
};

