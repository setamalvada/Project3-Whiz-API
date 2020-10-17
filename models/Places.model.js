const mongoose = require("mongoose");
// const User = require("./User.model");

const placesSchema = new mongoose.Schema(
  {
    longitude: {
      type: Number,
      max: 180,
      min: -180,
    },
    latitude: {
      type: Number,
        max: 90,
        min: -90,
    },
   
    conquered_by: {
      type: String,
      default: "none",
      required: true,
    },

    owner: {
      type: String,
      default: "none",
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
