const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rentalObject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RentalObject'
    },
    bookingDateArrival: {
      type: Date
    },
    bookingDateDeparture: {
      type: Date
    },
    price: {
      type: Number
    },
    email: {
      type: String
    },
    phoneNumber: {
      type: String
    },
    guest: {
      type: Number,
      default: 2
    },
    bookingReference: {
      type: String
    },
    paymentMethod: {
      type: String,
      required: true
    },
    cancellationProtection: {
      type: String
    },
    message: {
      type: String
    },
    status: {
      type: String,
      default: 'pending'
    },
  },
  {
    timestamps: true
  }
  );
  
module.exports = mongoose.model('Order', orderSchema);
