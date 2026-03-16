import '../models/connection.js';
import ProductSchemaModel from '../models/product.model.js';

export const save = async (req, res) => {
  const products = await ProductSchemaModel.find();
  const l = products.length;
  const _id = l == 0 ? 1 : products[l - 1]._id + 1;
  const productDetails = { ...req.body, "_id": _id, "info": Date() };
  try {
    await ProductSchemaModel.create(productDetails);
    res.status(201).json({ "status": true });
  }
  catch (err) {
    res.status(500).json({ "status": false, "error": err.message });
  }
};
