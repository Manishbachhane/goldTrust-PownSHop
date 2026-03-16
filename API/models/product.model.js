import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

  title:{
    type:String,
    required:[true,'product name is required'],
    lowercase:true,
    trim:true
  },

  catnm:{
    type:String,
    required:[true,'category name is required']
  },

  subcatnm:{
    type:String,
    required:[true,'subcategory name is required']
  },

  description:{
    type:String,
    required:[true,'description is required']
  },

  price:{
    type:Number,
    required:[true,'price is required']
  },

  filename:{
    type:String,
    required:[true,'product file is required']
  },

  userId:{
    type:Number,
    required:true
  },

  status:{
    type:Number,
    default:0
  },

  info:String,
});

const Product = mongoose.model("Product",productSchema);

export default Product;