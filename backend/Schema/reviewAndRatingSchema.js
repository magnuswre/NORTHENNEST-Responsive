const mongoose = require('mongoose')
const { Schema } = mongoose;

const reviewAndRatingSchema = new Schema({
    rentalObject: { type: mongoose.Types.ObjectId, ref: 'rentalObject' }, // ta in vilket object som ska få ratings
    userId: { type: mongoose.Types.ObjectId, ref: 'User' }, //vilken user som skriver ratings
    rating: {String, required: true},
    // kalkyl av medeltal etc med mera 
    review: {String, required: true}
},
  {
    timestamps: true, 
  })

const ReviewRating = mongoose.model('ReviewRating', reviewAndRatingSchema)

module.exports = ReviewRating;