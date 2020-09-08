const express = require(`express`);
const projectsController = require("../controllers/projectControllers");
const projectControllers = require("../controllers/projectControllers");
const router = express.Router();

router.get("/", projectControllers.getProjects);

router.post("/add", projectControllers.addProject);

router.get("/:projectId", projectControllers.findProject);

router.delete("/:projectId", projectControllers.deleteProject);

module.exports = router;
