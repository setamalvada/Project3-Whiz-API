const mongoose = require("mongoose");
// const pointSchema = require("./Point.model");

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const placesSchema = new mongoose.Schema({
  // {
  //   longitude: {
  //     type: Number,
  //     max: 180,
  //     min: -180,
  //   },
  //   latitude: {
  //     type: Number,
  //       max: 90,
  //       min: -90,
  //   },
  conquered_by: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },


  location: {
    type: pointSchema,
    required: true
    },
   
  
   
    

    owner: {
      type: String,
      default: null,
      required: true,
    },
    
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (document, toReturn) => {
        toReturn.id = document._id;
        delete toReturn.__v;
        delete toReturn._id;
        delete toReturn.createdAt;
        delete toReturn.updatedAt;
        return toReturn;
      },
    },
  }
);

const Places = mongoose.model("Places", placesSchema);

module.exports = Places;
