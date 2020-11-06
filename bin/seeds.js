require("dotenv").config();
require("../config/db.config");
const User = require("../models/User.model");
const Places = require("../models/Places.model");
const faker = require("faker");
const { database } = require("faker");

const userIds = [];
// const userTeam = [];
const userN = 10;
const placesN = 2;
const placesNoConquered = 50;

const data =[
 

 
  {conquered_by: null, CODBARRIO: "19-3", NOMBRE: "Valderrivas" , location:{ type: "Point", coordinates: [ -3.5977522, 40.4013781 ] } },
  {conquered_by: null, CODBARRIO: "19-3", NOMBRE: "Valderrivas" , location:{ type: "Point", coordinates: [ -3.6025505, 40.3990902 ] } },
  {conquered_by: null, CODBARRIO: "19-3", NOMBRE: "Valderrivas" , location:{ type: "Point", coordinates: [ -3.6068588, 40.3980524 ] } },
  {conquered_by: null, CODBARRIO: "19-3", NOMBRE: "Valderrivas" , location:{ type: "Point", coordinates: [ -3.6006321, 40.4014378 ] } },
  {conquered_by: null, CODBARRIO: "19-3", NOMBRE: "Valderrivas" , location:{ type: "Point", coordinates: [ -3.6074572, 40.3949723 ] } },
  {conquered_by: null, CODBARRIO: "11-3", NOMBRE: "San Isidro" , location:{ type: "Point", coordinates: [ -3.720962, 40.3997213 ] } },
  {conquered_by: null, CODBARRIO: "11-3", NOMBRE: "San Isidro" , location:{ type: "Point", coordinates: [ -3.723849, 40.4017779 ] } },
  {conquered_by: null, CODBARRIO: "11-3", NOMBRE: "San Isidro" , location:{ type: "Point", coordinates: [ -3.718164, 40.3971874 ] } },
  {conquered_by: null, CODBARRIO: "11-3", NOMBRE: "San Isidro" , location:{ type: "Point", coordinates: [ -3.7346902, 40.3983248 ] } },
  {conquered_by: null, CODBARRIO: "11-3", NOMBRE: "San Isidro" , location:{ type: "Point", coordinates: [ -3.7288579, 40.3917961 ] } },
  {conquered_by: null, CODBARRIO: "11-3", NOMBRE: "San Isidro" , location:{ type: "Point", coordinates: [ -3.7257226, 40.3927437 ] } },
  {conquered_by: null, CODBARRIO: "11-3", NOMBRE: "San Isidro" , location:{ type: "Point", coordinates: [ -3.7201279, 40.3955618 ] } },
  {conquered_by: null, CODBARRIO: "11-3", NOMBRE: "San Isidro" , location:{ type: "Point", coordinates: [ -3.7273971, 40.3946378 ] } },
  {conquered_by: null, CODBARRIO: "11-3", NOMBRE: "San Isidro" , location:{ type: "Point", coordinates: [ -3.7381736, 40.3916433 ] } },
  {conquered_by: null, CODBARRIO: "11-3", NOMBRE: "San Isidro" , location:{ type: "Point", coordinates: [ -3.7359656, 40.392239 ] } },
  {conquered_by: null, CODBARRIO: "11-3", NOMBRE: "San Isidro" , location:{ type: "Point", coordinates: [ -3.73557, 40.3940028 ] } },
  {conquered_by: null, CODBARRIO: "11-3", NOMBRE: "San Isidro" , location:{ type: "Point", coordinates: [ -3.7307658, 40.3965741 ] } },
  {conquered_by: null, CODBARRIO: "11-3", NOMBRE: "San Isidro" , location:{ type: "Point", coordinates: [ -3.737998, 40.39422 ] } },
  {conquered_by: null, CODBARRIO: "11-3", NOMBRE: "San Isidro" , location:{ type: "Point", coordinates: [ -3.7373057, 40.3964079 ] } },
  {conquered_by: null, CODBARRIO: "11-3", NOMBRE: "San Isidro" , location:{ type: "Point", coordinates: [ -3.7333744, 40.3919834 ] } },
  {conquered_by: null, CODBARRIO: "19-2", NOMBRE: "Valdebernardo" , location:{ type: "Point", coordinates: [ -3.6223755, 40.3970794 ] } },
  {conquered_by: null, CODBARRIO: "19-2", NOMBRE: "Valdebernardo" , location:{ type: "Point", coordinates: [ -3.6203052, 40.40228 ] } },
  {conquered_by: null, CODBARRIO: "19-2", NOMBRE: "Valdebernardo" , location:{ type: "Point", coordinates: [ -3.6186543, 40.3974595 ] } },
  {conquered_by: null, CODBARRIO: "19-2", NOMBRE: "Valdebernardo" , location:{ type: "Point", coordinates: [ -3.6228539, 40.3949837 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6677011, 40.399241 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6654992, 40.4013937 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6600997, 40.3967561 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.662185, 40.4034991 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6649932, 40.3986317 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6551495, 40.4026846 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6629644, 40.3979878 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6584814, 40.4007672 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6528646, 40.3983341 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6599962, 40.404429 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6600242, 40.3986866 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6621211, 40.4018005 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6605414, 40.401411 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.657832, 40.3968471 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6548209, 40.3917567 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6620184, 40.3959828 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6586036, 40.3943488 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6556883, 40.393754 ] } },
  {conquered_by: null, CODBARRIO: "13-6", NOMBRE: "Numancia" , location:{ type: "Point", coordinates: [ -3.6526687, 40.4005159 ] } },
  {conquered_by: null, CODBARRIO: "3-2", NOMBRE: "Adelfas" , location:{ type: "Point", coordinates: [ -3.6671636, 40.405258 ] } },
  {conquered_by: null, CODBARRIO: "3-2", NOMBRE: "Adelfas" , location:{ type: "Point", coordinates: [ -3.6716552, 40.3997455 ] } },
  {conquered_by: null, CODBARRIO: "3-2", NOMBRE: "Adelfas" , location:{ type: "Point", coordinates: [ -3.6733625, 40.3989841 ] } },
  {conquered_by: null, CODBARRIO: "3-2", NOMBRE: "Adelfas" , location:{ type: "Point", coordinates: [ -3.6700371, 40.4017098 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.7111777, 40.4006993 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.7104746, 40.4062752 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.7054749, 40.4053498 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.7080545, 40.4045303 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.7083961, 40.4018927 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.7034316, 40.3983134 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.7005414, 40.4021236 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.7028771, 40.4026898 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.7013182, 40.4006909 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.7044706, 40.4026119 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.7065833, 40.3990488 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.701535, 40.3987542 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.7065559, 40.403627 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.70308, 40.4003334 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.7130427, 40.4010941 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.7084686, 40.3985052 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.7110757, 40.4045816 ] } },
  {conquered_by: null, CODBARRIO: "2-2", NOMBRE: "Acacias" , location:{ type: "Point", coordinates: [ -3.7024968, 40.4044938 ] } },
  {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.6774645, 40.4028416 ] } },
  {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.6804168, 40.4042477 ] } },
  {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.6708376, 40.4063168 ] } },
  {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.6748834, 40.4038837 ] } },
  {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.6781525, 40.4068366 ] } },
  {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.676239, 40.4018122 ] } },
  {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.6824166, 40.4067546 ] } },
  {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.6748033, 40.4069598 ] } },
  {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.6727498, 40.4038843 ] } },
  {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.6803156, 40.4066236 ] } },
  {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.6763959, 40.4057269 ] } },
  {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.678511, 40.4052897 ] } },
  {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.6731109, 40.4060344 ] } },
  {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.6799679, 40.4026575 ] } },
  {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.683418, 40.404986 ] } },
  // {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.683254258458676, 40.404600215643093 ] } },
  // {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.683102525580741, 40.404605634674446 ] } },
  // {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.682999563985, 40.404546025329545 ] } },
  // {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.683140458800225, 40.40451893017277 ] } },
  // {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.682912859483324, 40.404464739859222 ] } },
  {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.682945373671452, 40.404676082082055 ] } },
  // {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.683124201706161, 40.404719434332897 ] } },
  // {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.68302124011042, 40.40480071980322 ] } },
  // {conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location:{ type: "Point", coordinates: [ -3.682826154981647, 40.404589377580379 ] } },
 
      ]

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
        })
        
        .catch((e) => console.log(e));
    }


  


    for (let j = 0; j < data.length; j++) {
      const place = new Places({
        conquered_by: null, 
        CODBARRIO: data[j].CODBARRIO, 
        NOMBRE: data[j].NOMBRE, 
        location: { 
         type: "Point", 
        coordinates: [ 
          data[j].location.coordinates[0],data[j].location.coordinates[1]
          ]}
        });
      place
        .save()
        .then((u) => {
          console.log(u.location);
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

