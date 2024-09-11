const express = require("express");
const router = express.Router();
const memberController = require("../controllers/member_controller");

router.post("/createmember", memberController.createMember);
router.delete("/deletemember", memberController.deleteMember);
router.put("/updatemember", memberController.updateMember);

router.get("/getallmembers", memberController);
router.get("/getmember/:id", categoryController.getcategorybyId);
