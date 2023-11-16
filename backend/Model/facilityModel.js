const Facility = require('../Schema/facilitySchema');

exports.createNewFacility = (req, res) =>{

const {text} = req.body;
 
    if(!text){
        res.status(400).json({
            message: 'You need to enter all the fields, all of them'
        })
        return
    }


    Facility.create({ text })
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err =>{
        res.status(500).json({
         message: 'Something went wrong when creating the package',
         err: err.message
        })
        return
    })
}

exports.getAllFacilities = async (req, res) =>{
    
    // const limit = parseInt(req.query.limit)

    try {
        const facility = await Facility.find()
        res.status(200).json(facility)
        
    } catch (err) {
        res.status(500).json({message: 'Something went wrong when getting the facilitys'})
    }
}


exports.getFacilityById = async (req, res) =>{

    const facility = await Facility.findById(req.params.id)
    
    if(!facility){
        return res.status(404).json({message: 'Could not find the facility'})
    }

    res.status(200).json(facility)
    
}

exports.uppdateFacility = async (req, res) =>{
    const facility = await Facility.findByIdAndUpdate(req.params.id, req.body, {new: true})
    
    if(!facility){
      return res.status(404).json({message: 'Could not find the facility'})
    }

    res.status(200).json(facility)

}


exports.deleteFacility = (req, res) =>{

    Facility.findByIdAndDelete(req.params.id)
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
