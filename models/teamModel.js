
const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamModel = new Schema(
  {
    teamName: { type: String },
    members: { type: String },
    projects: [{
      type: mongoose.Schema.Types.ObjectId,
      ref:'Projects'
    }]
  }
)
module.exports = mongoose.model('Team', teamModel);

