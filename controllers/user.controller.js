const createError = require("http-errors");
const User = require("../models/User.model");

const mongoose = require('mongoose');
const mailer = require('../config/mailer.config');



// module.exports.new = (_, res) => {
//   res.render('signup/new', { user: new User() })
// }

module.exports.create = (req, res, next) => {
  const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      avatar: req.file ? req.file.url : undefined,
      team: req.body.team
  })
  res.json(user);

  console.log(user)
  

 user.save()
     .then((user) => {
         mailer.sendValidateEmail(user)
         res.redirect('/login')
     })
     .catch(error => {
         if (error instanceof mongoose.Error.ValidationError) {
            console.log(error)
         } else if (error.code === 11000) {
             res.render('users/new', {
                 user: {
                     ...user,
                     password: null
                 },
                 genericError: 'User already exists'
             })
         } else {
             next(error);
         }
     })
}

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw createError(400, "Missing credentials");
  }
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        throw createError(400, "Wrong credentials");
      } else {
        return user.checkPassword(password).then((match) => {
          if (!match) {
            throw createError(400, "Wrong credentials");
          } else {
            req.session.user = user;
            res.json(user);
          }
        });
      }
    })
    .catch((e) => next(e));
};

module.exports.logout = (req, res, next) => {
  req.session.destroy();
  res.status(204).json();
};

module.exports.profile = (req, res, next) => {
  User.findById(req.params.id)
    .populate("places")
    // .populate({
     
    //   populate: {
    //     path: "places",
    //     model: "Places"
    //   },
    // })
   
   
    .then((u) => {
      res.json(u);
    });
};

module.exports.editProfile = (req, res, next) => {
  User.findById(req.params.id)
    .then((p) => {
       if(p.id != req.currentUser.id){
        throw createError(403, "You can't edit other user's profiles");
       }
      else{

        p.update(req.body).then((editedUser) => {
          res.json(editedUser);
        });


      }
      
      
      
      
    })
    .catch((e) => next(e));
  
}