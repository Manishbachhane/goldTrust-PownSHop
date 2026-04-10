import express from 'express';

import * as ProductController from '../controller/product.controller.js';
const router=express.Router();

router.post("/save",ProductController.save);

router.get("/fetch",ProductController.fetch);
router.get("/pendingitems",ProductController.fetchPending);
router.get("/approveditems",ProductController.fetchApproved);
router.get("/rejecteditems",ProductController.fetchRejected);

router.patch("/update-status/:id", ProductController.updateStatus);
router.put("/status/:id",ProductController.updateStatus);
router.put("/review/:id",ProductController.addAdminReview);
router.delete("/delete/:id",ProductController.deleteProduct);


export default router;