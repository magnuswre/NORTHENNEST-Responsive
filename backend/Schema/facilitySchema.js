const mongoose = require('mongoose');
const { Schema } = mongoose;

const FacilitySchema = new Schema({
  text: { type: String, required: true },
},
  {
    timestamps: true, 
  })

const Facility = mongoose.model('Facility', FacilitySchema)

module.exports = Facility;