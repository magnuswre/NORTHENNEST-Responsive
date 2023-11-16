const mongoose = require('mongoose')
const { Schema } = mongoose;

const likesSchema = new Schema({
    rentalObject: {type: mongoose.Types.ObjectId, ref: 'rentalObject' }, // ta in vilket object som ska få likes
    likes:        {type: String, required: true}
},
  {
    timestamps: true, 
  })

const Likes = mongoose.model('Likes', likesSchema)

module.exports = Likes;