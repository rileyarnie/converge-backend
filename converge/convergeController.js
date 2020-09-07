const Project = require('./projectModel');

const getProjects = async (req, res, next) => {
  const projects = await Project.find({});
  
  return res.json(projects)

};

const addProject = async (req, res) => {
    const project = new Project(req.body);
    await project.save();
    return res.json(project);
}

const updateProject = async (res, req ,next) => {
  const {project} = req

  if (req.body._id) {
    delete req.body._id
  }

  Object.entries(req.body).forEach((item) => {
    const key = item[0]
    const value = item[1]
    project[key] = value
  })

  req.project.save()
}

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
  })
};

//delete projects
const deleteProject = (req, res) => {
  req.project.remove((err) => {
    if (err) {
      return res.send(err);
    }
    return res.sendStatus(204);
  })
}


module.exports = {getProjects, addProject, findProject, deleteProject}