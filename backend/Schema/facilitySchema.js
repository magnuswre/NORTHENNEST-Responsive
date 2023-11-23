const mongoose = require('mongoose');
const { Schema } = mongoose;

const FacilitySchema = new Schema({
  categories: [
    {
      name: { type: String, required: true },
      facilities: [
        {
          text: { type: String, required: true },
          iconText: { type: String, required: true }
        }
      ]
    }
  ]
}, {
  timestamps: true
});

const Facility = mongoose.model('Facility', FacilitySchema);

module.exports = Facility;


// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const FacilitySchema = new Schema({
//   category:[{ type: String }],
//   text: { type: String, required: true },
// },
//   {
//     timestamps: true, 
//   })

// const Facility = mongoose.model('Facility', FacilitySchema)

// module.exports = Facility;