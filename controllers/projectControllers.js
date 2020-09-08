const Project = require("../models/projectModel");
const createError = require("http-errors");

const getProjects = async (req, res, next) => {
  const projects = await Project.find({});

  return res.json(projects);
};

const addProject = async (req, res, next) => {
  try {
    const { projectName, description, team } = req.body;
    const project = new Project({ projectName, description, team });
    const savedProject = await project.save();
    return res.status(201).json(savedProject);
  } catch (error) {
    return next(createError.InternalServerError(error));
  }
};

const updateProject = async (res, req, next) => {
  const { project } = req;

  if (req.body._id) {
    delete req.body._id;
  }

  Object.entries(req.body).forEach((item) => {
    const key = item[0];
    const value = item[1];
    project[key] = value;
  });

  req.project.save();
};

const findProject = (req, res, next) => {
  Project.findById(req.params.projectId, (err, project) => {
    if (err) {
      return res.send(err);
    }
    if (project) {
      req.project = project;
      return next(project);
    }
    return res.sendStatus(404);
  });
};

//delete projects
const deleteProject = (req, res) => {
  req.project.remove((err) => {
    if (err) {
      return res.send(err);
    }
    return res.sendStatus(204);
  });
};

module.exports = { getProjects, addProject, findProject, deleteProject };
