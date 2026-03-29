import express from 'express';

import * as ProductController from '../controller/product.controller.js';
const router=express.Router();

router.post("/save",ProductController.save);

router.get("/fetch",ProductController.fetch);


// ✅ NEW ROUTE (approve/reject ke liye)
router.patch("/update-status/:id", ProductController.updateStatus);

export default router;