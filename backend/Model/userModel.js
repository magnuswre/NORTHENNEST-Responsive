const User = require('../Schema/userSchema')
const bcrypt = require('bcryptjs');
const auth = require('../authentication/auth')

exports.getUser = async (req, res) => {
    try {
        const userId = req.userId;
        console.log("getUser", userId);

        if (!userId) {
            return res.status(401).json({
                message: "No credentials"
            });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'Could not find the user' });
        }

        const displayName = `${user.firstName} ${user.lastName}`;
        const userWithDisplayName = {
            ...user._doc,
            displayName
        };

        res.status(200).json(userWithDisplayName);
    } catch (error) {
        console.error(error);

        // Handle the error properly and avoid sending multiple responses
        res.status(500).json({ message: 'Internal server error' });
    }
};


// exports.getUser = async (req, res) => {
//     try {
//         const userId = req.userId;
//         console.log("getUser", userId)
//         if (!userId) {
//             res.status(401).json({
//                 message: "No credentials"
//             });
//         } else {
//             const user = await User.findById(userId);

//             if (!user) {
//                 res.status(404).json({ message: 'Could not find the user' });
//             } else {
//                 const displayName = `${user.firstName} ${user.lastName}`;
//                 const userWithDisplayName = {
//                     ...user._doc,
//                     displayName
//                 };
//                 res.status(200).json(userWithDisplayName);
//             }
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };



// exports.createNewUser = async (req, res) =>{
//     const {firstName, lastName, email, streetName, mobile, postalCode, city, password} = req.body;

//     if(!firstName || !lastName || !mobile || !email || !streetName || !postalCode || !city || !password){
//         return res.status(404).json({message: 'You need to enter all the fields. Create user'})
//     }

//     const salt = bcrypt.genSaltSync(10);

//     bcrypt.hash(password, salt, (err, hash) => {
//         if(err){
//             return res.status(500).json({
//                 message: 'filed when encrptering the password'
//             })
//         }
//         User.create({firstName, lastName,  email, mobile, streetName, postalCode, city, passwordHash: hash})

//         .then(user =>{
//             res.status(201).json({
//                 token: auth.generateTokenUser(user),
//             })
//         })
//     })
// }

exports.createNewUser = async (req, res) => {
    try {
        const { firstName, lastName, email, streetName, mobile, postalCode, city, password } = req.body;

        if (!firstName || !lastName || !mobile || !email || !streetName || !postalCode || !city || !password) {
            res.status(404).json({ message: 'You need to enter all the fields. Create user' });
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = await bcrypt.hash(password, salt);

            const user = await User.create({
                firstName,
                lastName,
                email,
                mobile,
                streetName,
                postalCode,
                city,
                passwordHash: hash
            });

            res.status(201).json({
                token: auth.generateTokenUser(user),
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.loginUser = (req, res) => {
    const {email, password} = req.body
    console.log(email, password)

    if(!email || !password){
        return res.status(400).json({message: 'You need to enter both email and password'})
    }
    
    User.findOne({email})
    .then(data =>{
        if(!data){
            console.log("NO ACCOUNT")
            return res.status(401).json({message: 'incorrect credentials'})
        }

        bcrypt.compare(password, data.passwordHash, (err, result) => {
            if(err){
                return res.status(500).json({message: 'something went wrong when decrypting the password'})
            }

            if(!result){
                console.log("PASSWORD DO NOT MATCH", result)
                return res.status(401).json({message: 'Incorrect credentials'})
            }

            res.status(200).json(
                {token: auth.generateTokenUser(data)}
          )
        })
    })
}

exports.getAllUsers = (req, res) =>{
    User.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err =>{
        res.status(500).json({
            message: 'Cannot find the prodocts'
        })
    })
}


  

exports.getUserReviewRating= async (req, res) => {
    const { userId } = req.params;

    ReviewRating.find({ userId })
        .populate('rentalObject') // If you need details about the associated Rental Objects
        .exec()
        .then((reviews) => {
            res.status(200).json(reviews);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Failed to fetch user reviews', error: err.message });
        });
    
}
