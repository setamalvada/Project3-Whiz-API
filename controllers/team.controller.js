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



