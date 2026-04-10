import url from "url";
import path from "path";
import rs from "randomstring";
import ProductSchemaModel from "../models/product.model.js";

export const save = async (req, res) => {
  const products = await ProductSchemaModel.find();
  const l = products.length;
  const _id = l == 0 ? 1 : products[l - 1]._id + 1;

  const pdffile = req.files.filename;
  const pdfnm = rs.generate(10) + "_" + Date.now() + "_" + pdffile.name;

  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const uploadfilepath = path.join(__dirname,'../../UI/public/assets/uploads/products',pdfnm);

  const productDetails = {
    _id: _id,
    title:req.body.title,
    catnm:req.body.catnm,
    subcatnm:req.body.subcatnm,
    description:req.body.description,
    price:req.body.price,
    filename:pdfnm,
    userId:req.body.userId,
    status:0,
    info:Date()
  };

  try {
    await ProductSchemaModel.create(productDetails);
    pdffile.mv(uploadfilepath);
    res.status(201).json({status:true,msg:"Product Added"});
  }
  catch(err){
      console.log(err);
      res.status(500).json({status:false});
  }
};

export const fetch=async(req,res)=>{
  var condition_obj=req.query; 
  var ProductList=await ProductSchemaModel.find(condition_obj);
  if(ProductList.length!=0)
    res.status(200).json({"status":true,"info":ProductList});
  else
    res.status(404).json({"status":false});    
};

// UPDATE STATUS
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    await ProductSchemaModel.findByIdAndUpdate(req.params.id, { status });

    res.json({ success: true, message: "Status updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
};

export const addAdminReview = async (req, res) => {
  try {
    const { adminReview } = req.body;

    await ProductSchemaModel.findByIdAndUpdate(
      req.params.id,
      { adminReview }
    );

    res.status(200).json({
      status: true,
      msg: "Admin review added successfully"
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: false,
      msg: "Error adding review"
    });
  }
};


export const deleteProduct = async (req,res)=>{
  await Product.findByIdAndDelete(req.params.id);
  res.json({status:true});
};

export const fetchPending = async (req, res) => {
  try { 
    const pendingProducts = await ProductSchemaModel.find({ status: 0 });
    console.log(pendingProducts);
    res.status(200).json({ status: true, info: pendingProducts });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false });
  }
};


export const fetchApproved = async (req, res) => {

  try { 
    const approvedProducts = await ProductSchemaModel.find({ status: 1 });
    console.log(approvedProducts,"no  approverd products");
    res.status(200).json({ status: true, info: approvedProducts });
  } catch (err) {
    console.log(err,"error fetching approved products");
    res.status(500).json({ status: false });
  }
};