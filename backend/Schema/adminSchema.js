const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    email:         {type: String, required: true},
    passwordHash:  {type: String, required: true}
},
{
  timestamps: true, 
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin