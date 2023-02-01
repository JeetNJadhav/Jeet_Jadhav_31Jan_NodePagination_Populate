const mongoose = require("mongoose");
const { devSkill } = require("../models/DeveloperSkillsSchema");
const { devModel } = require("../models/DevelopersSchema");
// const { devModel } = require("../models/DeveloperSkillsSchema");
// const { devSkill } = require("../models/DevelopersSchema");
// const devModel = require("../models/DevelopersSchema");
// const devSkillModel = require("../models/DeveloperSkillsSchema");
const {
  fetchAllDevelopers,
  addDev,
  addDevSkill,
} = require("../services/DeveloperServices");

const fetchDevelopers = async (req, res) => {
  const devs = await fetchAllDevelopers();

  return res.status(200).json({
    message: devs,
  });
};

const addDeveloper = async (req, res) => {
  let dev = new devModel({
    // _id: new mongoose.Types.ObjectId(),
    state: req.body.state,
    city: req.body.city,
    name: req.body.name,
    skills: req.body.skills,
  });

  const resp = await addDev(dev);
  console.log("resp", resp);
  return res.status(200).json({ message: resp });
};

const addDeveloperSkills = async (req, res) => {
  let devSkills = new devSkill({
    // _id: new mongoose.Types.ObjectId(),
    primary_skills: req.body.primary_skills,
    secondary_skills: req.body.secondary_skills,
  });

  const resp = await addDevSkill(devSkills);
  console.log("resp", resp);
  return res.status(200).json({ message: resp });
};

module.exports = { fetchDevelopers, addDeveloper, addDeveloperSkills };
