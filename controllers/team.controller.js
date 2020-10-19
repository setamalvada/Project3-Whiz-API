const Places = require("../models/Places.model");
const User = require("../models/User.model");
const createError = require("http-errors");

module.exports.displayTeam = (req, res, next) => {
  User.find()
    .populate("places")
    
    .then((user) => {
      res.json(user);
    })
    .catch((e) => next(e));
};

module.exports.displayTeamYellow = (req, res, next) => {
  User.find({team: "yellow"})
    .populate("places")
    
    .then((user) => {
      res.json(user);
    })
    .catch((e) => next(e));
};

module.exports.displayTeamPurple = (req, res, next) => {
  User.find({team: "purple"})
    .populate("places")
    
    .then((user) => {
      res.json(user);
    })
    .catch((e) => next(e));
};


