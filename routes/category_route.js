const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category_controller");

router.post("/createCategory", categoryController.createCategory);
router.delete("/deleteCategory", categoryController.deleteCategory);
router.put("/updateCategory", categoryController.updateCategory);
router.get("/getallCategogry", categoryController.getallCategories);
router.get("/getCategory/:id", categoryController.getcategorybyId);
