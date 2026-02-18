import express from 'express';

//to link controller
import * as CategoryController from '../controller/category.controller.js';

const router=express.Router();

router.post("/save",CategoryController.save);

export default router;