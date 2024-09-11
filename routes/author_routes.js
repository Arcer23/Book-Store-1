const express = require("express");
const router = express.Router();
const authorController = require("../controllers/author_controller");

router.post("/createAuthor", authorController.createAuthor);
router.delete("/deleteAuthor", authorController.deleteAuthor);
router.put("/updateAuthor", authorController.updateAuthor);
router.get("/getallAuthors", authorController.getAllauthors);
router.get("/getAuthor/:id", authorController.getAuthorById);
