const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const verifyToken = require("../middleware/authMiddleware");
const checkAdmin = require("../middleware/adminMiddleware");



// 👇 Listeleme: Herkes görebilir
router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getProjectById);

// 👇 Sadece admin erişebilir
router.post("/", verifyToken, checkAdmin, projectController.createProject);
router.put("/:id", verifyToken, checkAdmin, projectController.updateProject);
router.delete("/:id", verifyToken, checkAdmin, projectController.deleteProject);


module.exports = router;
