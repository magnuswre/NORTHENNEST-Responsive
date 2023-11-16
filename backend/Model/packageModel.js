const Package = require('../Schema/packageSchema');

exports.createNewPackage = (req, res) =>{

const {name, description, price, imageURL, budget, standard, deluxe} = req.body;
 
    if(!name || !description || !price || !imageURL){
        res.status(400).json({
            message: 'You need to enter all the fields'
        })
        return
    }


    Package.create({name, description, price, imageURL, budget, standard, deluxe })
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

exports.getAllPackage = async (req, res) =>{
    
    const limit = parseInt(req.query.limit)

    try {
        const package = await Package.find().limit(limit)
        res.status(200).json(package)
        
    } catch (err) {
        res.status(500).json({message: 'Something went wrong when getting the packages'})
    }
}


exports.getPackageById = async (req, res) =>{

    const package = await Package.findById(req.params.id)
    
    if(!package){
        return res.status(404).json({message: 'Could not find the package'})
    }

    res.status(200).json(package)
    
}

exports.uppdatePackage = async (req, res) =>{
    const package = await Package.findByIdAndUpdate(req.params.id, req.body, {new: true})
    
    if(!package){
      return res.status(404).json({message: 'Could not find the package'})
    }

    res.status(200).json(package)

}


exports.deletePackage = (req, res) =>{

    Package.findByIdAndDelete(req.params.id)
    .then(package => {
        if(!package){
           return res.status(404).json({message: 'Could not find the package'})
        }
        res.status(200).json(package)
    })
    .catch(err => {
        res.status(500).json({message: 'Something went wrong when deleting the Package' ,
        err: err.message})
        
    })
}
