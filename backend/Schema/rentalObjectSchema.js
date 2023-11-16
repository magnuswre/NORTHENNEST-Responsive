const mongoose = require('mongoose')
const { Schema } = mongoose;

const rentalObjectSchema = new Schema({
    name:                    {type: String, required: true},
    description:             {type: String, required: true},
    price:                   {type: Number, required: true},
    imageURL:                {type: String, required: true},
    bedrooms:                {type: Number, required: true},
    category:                {type: String, required: true},
    livingarea:              {type: Number, required: true},
    RentalObjectPackage:     [{type: String, required: true}],
    facilities:              [{ type: mongoose.Types.ObjectId, ref: 'Facility' }],
    review:                  [{type: mongoose.Types.ObjectId, ref: 'ReviewRating'}],
    rating:                  [{type: mongoose.Types.ObjectId, ref: 'ReviewRating'}], 
    saved:                   {type: mongoose.Types.ObjectId, ref: 'Likes'},
    tags:                    {type: String},
    

  },
  {
    timestamps: true, 
  })

const rentalObject = mongoose.model('rentalObject', rentalObjectSchema)

module.exports = rentalObject;