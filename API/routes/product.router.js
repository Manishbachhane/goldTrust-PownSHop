import express from 'express';

import * as ProductController from '../controller/product.controller.js';
const router=express.Router();

router.post("/save",ProductController.save);

export default router;