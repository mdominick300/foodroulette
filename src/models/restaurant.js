const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;