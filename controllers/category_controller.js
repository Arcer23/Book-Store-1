const Category = require("../models/category-model");
exports.createCategory = async (req, res) => {
  try {
    const book_category = new categoryModel(req.body);
    await book_category.save();
    res.status(201).json(book_category);
  } catch (error) {
    res.status(400).json({ error: "Internal Sever Error" });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category_id = req.params.id;
    const deleted = await Category.deleteOne({ _id: category_id });
    res.status(200).json({ message: "Category Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.getallCategories = async (req, res) => {
  try {
    const category = req.body;
    const getCategory = await Category.find(category);
    if (!category) res.status(404).json({ message: "No Category" });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category_id = req.params.id;
    const updated_info = req.body;
    const result = await Category.updateOne({ _id: category_id }, updated_info);
    res.status(200).json({ message: "Category Updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getcategorybyId = async (req, res) => {
  try {
    const category_id = req.params.id;
    const findingbyid = await Category.findById({ _id: category_id });
    res.status(200).json(findingbyid);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// Add other CRUD operations: getAllCategories, getCategoryById, updateCategory, deleteCategory
