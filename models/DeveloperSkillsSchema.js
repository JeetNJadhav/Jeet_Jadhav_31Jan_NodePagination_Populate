const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for Employee schema
let DeveloperSkill = new Schema({
  // _id: String,
  primary_skills: String,
  secondary_skills: String,
});

const devSkill = mongoose.model("DeveloperSkill", DeveloperSkill);
module.exports = { devSkill };

// id, Title, Author, Publisher, Date of Publish, Price, ISBN Number
