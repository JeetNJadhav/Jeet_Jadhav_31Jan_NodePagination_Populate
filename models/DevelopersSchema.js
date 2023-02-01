const mongoose = require("mongoose");

// const DeveloperSkillsSchema = require("./DeveloperSkillsSchema");
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Developer = new Schema({
  // _id: String,
  state: String,
  city: String,
  name: String,
  skills: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DeveloperSkill",
  },
});

module.exports = mongoose.model("Developer", Developer);
// const devModel = mongoose.model("Developer", Developer);
// module.exports = { devModel };

// id, Title, Author, Publisher, Date of Publish, Price, ISBN Number
