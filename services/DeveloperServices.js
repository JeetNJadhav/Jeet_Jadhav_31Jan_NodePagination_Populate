const devModel = require("../models/DevelopersSchema");
// const { devModel } = require("../models/DeveloperSkillsSchema");
// const { devModel } = require("../models/DevelopersSchema");
const { generateToken } = require("../tokenManagement/TokenManagement");

const fetchAllDevelopers = async () => {
  let data = await devModel
    .find()
    .populate("skills")
    .skip(0)
    .limit(1)
    .then((result) => {
      console.log("result--->", result);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });

  let token = generateToken(data);

  // returning data along with generated token
  return { token, data };
};

const addDev = async (dev) => {
  const data = await dev
    .save()
    .then((result) => {
      console.log("result", result);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};
const addDevSkill = async (dev) => {
  const data = await dev
    .save()
    .then((result) => {
      console.log("result", result);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

module.exports = { fetchAllDevelopers, addDev, addDevSkill };
