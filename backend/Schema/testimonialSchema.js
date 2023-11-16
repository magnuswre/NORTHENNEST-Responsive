const mongoose = require('mongoose')

const testimonialAndRatingSchema = new Schema({
    userId: { type: mongoose.Types.ObjectId, ref: 'User' }, //vilken user som skriver testimonial och ratings
    rating: {String, required: true},
    testimonial: {String, required: true}
},
  {
    timestamps: true, 
  })

const TestimonialRating = mongoose.model('TestimonialRating', testimonialAndRatingSchema)

module.exports = TestimonialRating;