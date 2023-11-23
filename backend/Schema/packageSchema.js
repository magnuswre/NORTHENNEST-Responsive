const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  name:         {type: String, required: true},
  description:  {type: String, required: true},
  imageURL:     {type: String, required: true},
  budget:       {type: String},
  standard:     {type: String},
  deluxe:       {type: String},
  tags:         {type: String}
},
{
  timestamps: true, 
});

module.exports = mongoose.model('Package', packageSchema);
