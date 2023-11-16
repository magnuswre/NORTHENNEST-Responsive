const Order = require('../Schema/orderSchema'); 
// const User = require('../Schema/userSchema'); 

exports.createOrder = async (req, res) => {
  try {
    const { userId, rentalObject, bookingDateArrival, bookingDateDeparture, price, email, phoneNumber, guest, paymentMethod, status } = req.body;
 
    console.log(req.body)
    if (!rentalObject || !price || !phoneNumber || !paymentMethod || !email || !bookingDateArrival || !bookingDateDeparture || !status || !guest) {
      res.status(400).json({
          message: 'You need to enter all the fields'
      });
      return;
  }

    const randomStr = generateRandomString(10);

    function generateRandomString(length) {
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789!?';
      let randomString = '';

      for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * characters.length);
                 randomString += characters.charAt(randomIndex);
             }
         return randomString;
      }


     

    const order = new Order({
      userId,
      rentalObject,
      bookingDateArrival,
      bookingDateDeparture,
      price,
      guest,
      paymentMethod,
      bookingReference: randomStr,
      email,
      phoneNumber,
      status
    });

    const savedOrder = await order.save();
    const responseObject = { order: savedOrder, message: 'Order created successfully' };
    console.log('Response Object:', responseObject);
     // Instead of just sending a success message, send the order's _id back
     return res.status(200).json(responseObject);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};



exports.getOrderById = async (req, res) => {
  try {
    // Assuming the order's ID is passed as a URL parameter named 'id'
    const orderId = req.params.id;

    // Use the findById method provided by Mongoose to find the order by its ID
    const order = await Order.findById(orderId);

    // If no order is found, send a 404 response
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // If the order is found, send it back in the response
    res.status(200).json(order);
  } catch (err) {
    console.error(err);
    // If there is an error (e.g., if the ID is not a valid format), send a 500 response
    return res.status(500).json({ error: 'Internal server error' });
  }
};


// exports.getOrders = async (req, res) =>{
//     const orders = await Order.find().populate({
//         path: 'userId', 
//         select: "_id email "
//     })
//     if(!orders){
//         return res.status(404).json({message: 'Could not fint the orders'})
//     }

//     res.status(200).json(orders)
// }

// exports.getOrderById = async (req, res) => {
//     const orderId = req.params.id;
  
//     try {
//       const order = await Order.findById(orderId);
  
//       if (!order) {
//         return res.status(404).json({ message: 'Order not found' });
//       }
  
//       res.status(200).json(order);
//     } catch (error) {
//       res.status(500).json({ message: 'Something went wrong' });
//     }
//   };

//   exports.updateStatus = async (req, res) => {
//     try {
//       const status = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true})
//       res.status(200).json(status)
//     } catch (error) {
//       return res.status(404).json({message: 'Could not update status'})
//     }
//   }