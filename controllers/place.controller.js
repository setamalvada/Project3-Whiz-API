const Places = require("../models/Places.model");
// const User = require("../models/User.model");
const createError = require("http-errors");



module.exports.createPlace = (req, res, next) => {
    const place = new Places({
       CODBARRIO: req.body.CODBARRIO,
       NOMBRE: req.body.NOMBRE,
       location:{
           type: "Point",
           coordinates: [
               req.body.location.coordinates[0],
               req.body.location.coordinates[1],

           ]}
    })
    res.json(place);
    
  
   place.save()
       .then((place) => {
         console.log(place)
       })
       .catch(error => next(error)  
       )
  }