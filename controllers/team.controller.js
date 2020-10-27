const Places = require("../models/Places.model");
const User = require("../models/User.model");
const createError = require("http-errors");

module.exports.displayTeam = (req, res, next) => {
  User.find().limit(10).sort([['counter', 'desc']])
    .populate("places")
    
    .then((user) => {
      res.json(user);
    })
    .catch((e) => next(e));
};

module.exports.displayTeamYellow = (req, res, next) => {
  User.find({team: "yellow"}).limit(10).sort([['counter', 'desc']])
    .populate("places")
    
    .then((user) => {
      res.json(user);
    })
    .catch((e) => next(e));
};

module.exports.displayTeamPurple = (req, res, next) => {
  User.find({team: "purple"}).limit(10).sort([['counter', 'desc']])
    .populate("places")
    
    .then((user) => {
      res.json(user);
    })
    .catch((e) => next(e));
};


