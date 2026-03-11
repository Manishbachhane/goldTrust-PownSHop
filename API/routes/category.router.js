import express from 'express';

//to link controller
import * as CategoryController from '../controller/category.controller.js';

const router=express.Router();

router.post("/save",CategoryController.save);

router.get("/fetch",CategoryController.fetch);

export default router; 