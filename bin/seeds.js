require("dotenv").config();
require("../config/db.config");
const User = require("../models/User.model");
const Places = require("../models/Places.model");
const faker = require("faker");

const userIds = [];
// const userTeam = [];
const userN = 10;
const placesN = 2;
const placesNoConquered = 50;

Promise.all([User.deleteMany(), Places.deleteMany()])
  .then(() => {
    for (let i = 0; i < userN; i++) {
      const user = new User({
        email: faker.internet.email(),
        password: "1234567890",
        username: faker.name.findName(),
        avatar: faker.image.avatar(),
        team: "yellow"
      });
      user
        .save()
        .then((u) => {
          console.log(u.email);
          userIds.push(u.id);
          for (let i = 0; i < placesN; i++) {
            const place = new Places({
              longitude: faker.address.longitude(),
              latitude: faker.address.latitude(),
              conquered_by: u._id,
              owner: u.team,
            });
            place
              .save()
              .then((p)=>{
                console.log(p.longitude)
              })
              
              .catch((e) => console.log(e));
          }
        })
        .catch((e) => console.log(e));
    }
  })
  .catch((e) => console.log(e));


  // Promise.all([Places.deleteMany()])
  // .then(() => {
  //   for (let i = 0; i < placesNoConquered; i++) {
    
  //       const noConqueredPlace = new Places({
  //         longitude: faker.address.longitude(),
  //         latitude: faker.address.latitude(),
  //         conquered_by: "none",
  //         owner: "none",
  //       });
      
  //     noConqueredPlace
  //       .save()
  //       .then((u) => {
  //         console.log(u.conquered_by);
         
          
  //       })
  //       .catch((e) => console.log(e));
  //   }
  // })
  // .catch((e) => console.log(e));