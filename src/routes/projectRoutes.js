const express = require("express");
const Project = require("../models/Project");
const auth = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");
const router = express.Router();

router.post("/", auth, roleCheck(["owner", "admin"]), async (req, res) => {
    const { name, description } = req.body;
    const project = await Project.create({
        name, description,
        tenant: req.user.tenant._id,
        createdBy: req.user._id
    });
    res.json(project);
});

router.get("/", auth, async (req, res) => {
    const projects = await Project.find({tenant: req.user.tenant._id});
    res.json(projects);
})

module.exports = router;
