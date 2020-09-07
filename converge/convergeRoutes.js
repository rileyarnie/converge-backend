const express = require(`express`);
const controller = require('./convergeController');
const router = express.Router();

router.route('/projects')
  .get(controller.getProjects);

  router.route('/projects/add')
  .post(controller.addProject);

  router.use('projects/:projectId', controller.findProject)

  router.route('/projects/:projectId')
  .delete(controller.deleteProject);

  module.exports = router;