// import { Seeder } from 'mongoose-data-seed';
// const Places = require("../models/Places.model");

module.exports = function(done) {

const data = [
    {
        conquered_by: null, 
        CODBARRIO: "2-5", 
        NOMBRE: "Delicias" , 
        location: { 
          type: "Point", 
        coordinates: [ 
          -3.6880541, 40.4003326 
          ]}
        },
  
         { conquered_by: null, CODBARRIO: "3-2", NOMBRE: "Adelfas" , location: { type: "Point", coordinates: [ -3.6716552, 40.3997455 ] } },
         { conquered_by: null, CODBARRIO: "3-2", NOMBRE: "Adelfas" , location: { type: "Point", coordinates: [ -3.6733625, 40.3989841 ] } },
         { conquered_by: null, CODBARRIO: "3-2", NOMBRE: "Adelfas" , location: { type: "Point", coordinates: [ -3.6700371, 40.4017098 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.6774645, 40.4028416 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.6804168, 40.4042477 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.6708376, 40.4063168 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.6748834, 40.4038837 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.6781525, 40.4068366 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.676239, 40.4018122 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.6824166, 40.4067546 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.6748033, 40.4069598 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.6727498, 40.4038843 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.6803156, 40.4066236 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.6763959, 40.4057269 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.678511, 40.4052897 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.6731109, 40.4060344 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.6799679, 40.4026575 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.683418, 40.404986 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.683254258458676, 40.404600215643093 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.683102525580741, 40.404605634674446 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.682999563985, 40.404546025329545 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.683140458800225, 40.40451893017277 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.682912859483324, 40.404464739859222 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.682945373671452, 40.404676082082055 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.683124201706161, 40.404719434332897 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.68302124011042, 40.40480071980322 ] } },
         { conquered_by: null, CODBARRIO: "3-1", NOMBRE: "Pacífico" , location: { type: "Point", coordinates: [ -3.682826154981647, 40.404589377580379 ] } },
         { conquered_by: null, CODBARRIO: "3-6", NOMBRE: "Niño Jesús" , location: { type: "Point", coordinates: [ -3.676335, 40.4080204 ] } },
         { conquered_by: null, CODBARRIO: "3-6", NOMBRE: "Niño Jesús" , location: { type: "Point", coordinates: [ -3.6711578, 40.4080473 ] } },
         { conquered_by: null, CODBARRIO: "3-5", NOMBRE: "Jerónimos" , location: { type: "Point", coordinates: [ -3.6875332, 40.4068166 ] } },
         { conquered_by: null, CODBARRIO: "3-5", NOMBRE: "Jerónimos" , location: { type: "Point", coordinates: [ -3.6791132, 40.4082549 ] } },
         { conquered_by: null, CODBARRIO: "3-5", NOMBRE: "Jerónimos" , location: { type: "Point", coordinates: [ -3.6848935, 40.4066378 ] } }
  
]

done(null, data);
};