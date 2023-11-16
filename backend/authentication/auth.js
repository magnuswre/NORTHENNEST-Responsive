const jwt = require('jsonwebtoken')
require('dotenv').config()

const secretKey = process.env.SECRET_KEY;

exports.generateTokenUser = (user) => {
    return jwt.sign({_id: user._id, displayName: user.displayName}, secretKey, {expiresIn: '1d'})
}

exports.verifyTokenUser = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log("auth.js", token); // Log the token for debugging
        req.userId = jwt.verify(token, secretKey)._id;
        next();
    } catch (error) {
        console.error('Error verifying user token:', error.message);
        return res.status(401).json({
            message: 'Unauthorized. Please log in.',
        });
    }


    
exports.generateTokenAdmin = (admin) => {
    return jwt.sign({_id: admin._id, displayName: admin.displayName}, secretKey, {expiresIn: '1d'})
}

exports.verifyTokenAdmin = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        req.userId = jwt.verify(token, secretKey)._id
        next()
    } catch {
        return res.status(401).json({
            message: 'Admin access required'
        })
    }
}

// login admin email: mwdev81@gmail.com - password: Bytmig123
     
exports.checkAdmin = (req, res, next) => {
  const adminId = '646f47da432224a6ad148144';

  if (req.adminId === adminId) { 
    next();
  } else {
    res.status(401).json({
      message: 'You need to be an admin to see the rentalObjects',
    });
  }
};

// USER


}

// mwdev81@gmail.com - password: Bytmig123
// const User = ['646f47da432224a6ad148144']


//   // const [dataTwo, setDataTwo] = useState([]);

//   exports.checkUser = (req, res, next) => {
//     if(User.includes(req.userId)){
//         next()
//     }
//     else{
//         res.status(401).json({
//             message: 'you need to be admin to se the users orders'
//         })
//     }
// }