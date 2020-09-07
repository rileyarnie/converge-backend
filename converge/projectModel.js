const mongoose = require('mongoose');
const Team = require('./teamModel');

const { Schema } = mongoose;

const projectModel = new Schema(
  {
    projectName: { type: String },
    description: { type: String },
    team: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: Team
    }
  }
);
module.exports = mongoose.model('Project', projectModel);