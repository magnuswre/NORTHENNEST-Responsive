const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:       {type: String, required: true},
    lastName:        {type: String, required: true},
    email:           {type: String, required: true},
    mobile:          {type: Number, required: true},
    streetName:      {type: String, required: true},
    postalCode:      {type: String, required: true},
    city:            {type: String, required: true},
    passwordHash:    {type: String, required: true},
    // rating:          {type: String, required: true},
    // review:          {type: String, required: true},
},
{
  timestamps: true, 
})

const User = mongoose.model('User', userSchema)

module.exports = User;