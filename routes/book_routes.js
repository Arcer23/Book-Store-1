const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book_controller");

router.post("/createBook", bookController.createBook);
router.delete("/deleteBook", bookController.deleteBook);
router.put("/updateBook", bookController.updateBook);
router.get("/getallBooks", bookController.getallBooks);
router.get("/getBook/:id", bookController.getbookById);
router.post("/rentbook", bookController.rentingBook);
router.post("/returnbook", bookController.returningBook);
