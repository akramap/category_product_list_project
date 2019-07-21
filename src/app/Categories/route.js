import express from "express";
import controller from "./controller";

const router = express.Router();

// list all categories with associated products. (accessed at GET /api/category)
router.route("/").get(controller.listCategories);

export default router;
