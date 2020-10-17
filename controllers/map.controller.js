const Places = require("../models/Places.model");
const User = require("../models/User.model");
const createError = require("http-errors");

module.exports.listPlaces = (req, res, next) => {
  Places.find()
    // .populate("reviews")
    // .populate("user")
    .then((products) => {
      res.json(products);
    })
    .catch((e) => next(e));
};



//preguntar el lunes

// module.exports.conquer = (req, res, next) => {
//   Places.findById(req.params.id)
//     .then((p) => {
//       if (p.owner = req.currentUser.team) {
//         throw createError(403, "You can't conquer your own team place");
//       } else {
//         return p.update(req.body).then((editedPlaces) => {
//           res.json(editedPlaces);
//         });
//       }
//     })
//     .catch((e) => next(e));
// };


module.exports.profile = (req, res, next) => {
  User.findById(req.params.id)
    
    .populate("places")
   
    .then((u) => {
      res.json(u);
    });
};



