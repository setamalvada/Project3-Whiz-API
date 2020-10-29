const Places = require("../models/Places.model");
const User = require("../models/User.model");
const createError = require("http-errors");

module.exports.listPlaces = (req, res, next) => {
  Places.find()
    // .populate("reviews")
    .populate("conquered_by")
    .then((places) => {
      res.json(places);
    })
    .catch((e) => next(e));
};








module.exports.conquer = (req, res, next) => {
  Places.findById(req.params.id)
    .then((p) => {
  
      if (p.owner === req.currentUser.team) {
        throw createError(403, "You can't conquer your own team place");
      } else {
        res.json(p.id);
        User.findByIdAndUpdate(req.currentUser.id,{ $inc: { counter: 1 }})
          .then((u)=>{
            console.log(u)  
                    
          })
        return p.update({
          owner: req.currentUser.team,
          conquered_by: req.currentUser.id,
        }
          
        ).then((editedPlaces) => {
          console.log(editedPlaces)
          res.json(editedPlaces);
        });
      }
    })
    .catch((e) => next(e));
};


module.exports.profile = (req, res, next) => {
  User.findById(req.params.id)
    
    .populate("places")
   
    .then((u) => {
      res.json(u);
    });
};



