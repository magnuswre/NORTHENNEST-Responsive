const ReviewRating = require('../Schema/reviewAndRatingSchema');

exports.createReviewRating = (req, res) =>{

    const { userId, rating, review } = req.body;
    const rentalObjectId = req.params.objectId;

    ReviewRating.create({ userId, rating, review, rentalObject: rentalObjectId })
        .then((reviewRating) => {
            res.status(201).json(reviewRating);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Failed to create Review and Rating', error: err.message });
        });
}

exports.getAllFacilities = async (req, res) =>{
    
    try {
        const facility = await ReviewRating.find()
        res.status(200).json(facility)
        
    } catch (err) {
        res.status(500).json({message: 'Something went wrong when getting the facilitys'})
    }
}


exports.getFacilityById = async (req, res) =>{

    const facility = await ReviewRating.findById(req.params.id)
    
    if(!facility){
        return res.status(404).json({message: 'Could not find the facility'})
    }
    res.status(200).json(facility)
}

exports.uppdateFacility = async (req, res) =>{
    const facility = await ReviewRating.findByIdAndUpdate(req.params.id, req.body, {new: true})
    
    if(!facility){
      return res.status(404).json({message: 'Could not find the facility'})
    }

    res.status(200).json(facility)
}


exports.deleteFacility = (req, res) =>{

    ReviewRating.findByIdAndDelete(req.params.id)
    .then(facility => {
        if(!facility){
           return res.status(404).json({message: 'Could not find the facility'})
        }
        res.status(200).json(facility)
    })
    .catch(err => {
        res.status(500).json({message: 'Something went wrong when deleting the facility' ,
        err: err.message})
        
    })
}
