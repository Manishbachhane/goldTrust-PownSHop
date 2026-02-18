import "../models/connection.js";

//to link category model
import CategorySchemaModel from "../models/category.model.js";

export const save = async (req, res) => {
  const category = await CategorySchemaModel.find();
  const l = category.length;
  const _id = l == 0 ? 1 : category[l - 1]._id + 1;
  const cDetails = { ...req.body, "_id": _id };
  try {
    await CategorySchemaModel.create(cDetails);
    res.status(201).json({ "status": true });
  }
  catch {
    res.status(500).json({ "status": false });
  }
};
