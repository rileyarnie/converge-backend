const mongoose = require('mongoose');

const { Schema } = mongoose;
const hackathonModel = new Schema(
  {
    hackathonName: { type: String },
    description: { type: String },
    teams: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
    }]
  }
)

module.exports = mongoose.model('Hackathon', hackathonModel);