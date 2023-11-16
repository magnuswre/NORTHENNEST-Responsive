const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  name:         {type: String, required: true},
  description:  {type: String, required: true},
  imageURL:     {type: String, required: true},
  budget:       {type: String, required: true},
  standard:     {type: String, required: true},
  deluxe:       {type: String, required: true},
  tags:         {type: String}
},
{
  timestamps: true, 
});

module.exports = mongoose.model('Package', packageSchema);
