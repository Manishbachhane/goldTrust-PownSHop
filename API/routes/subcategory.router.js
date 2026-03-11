import express from 'express';

//to link controller
import * as SubCategoryController from '../controller/subcategory.controller.js';

const router=express.Router();

router.post("/save",SubCategoryController.save);


export default router;