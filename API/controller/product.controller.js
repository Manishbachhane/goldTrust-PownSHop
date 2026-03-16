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