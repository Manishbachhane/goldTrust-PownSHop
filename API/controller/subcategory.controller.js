import url from 'url';
import path from 'path';
import rs from 'randomstring';

//to link subcategory model
import SubCategorySchemaModel from "../models/subcategory.model.js";

export const save=async(req,res)=>{
 const scategory=await SubCategorySchemaModel.find();
 const l=scategory.length;
 const _id=l==0?1:scategory[l-1]._id+1;

 const caticon=req.files.caticon;
 const caticonnm=rs.generate(10)+"_"+Date.now()+"_"+caticon.name;   

 const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
 const uploadfilepath = path.join(__dirname,'../../UI/public/assets/uploads/subcaticons',caticonnm);

 const scDetails={...req.body,"subcaticonnm":caticonnm,"_id":_id}; 
 try{
  await SubCategorySchemaModel.create(scDetails);
  caticon.mv(uploadfilepath);
  res.status(201).json({"status":true});  
 }
 catch {
  res.status(500).json({"status":false});   
 }
};
