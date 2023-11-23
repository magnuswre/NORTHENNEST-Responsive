const RentalObject = require('../Schema/rentalObjectSchema');

exports.createNewRentalObject = (req, res) => {
    const { name, description, price, imageURL, bedrooms, category, facilities, RentalObjectPackage, livingarea, rating, review, saved } = req.body;

    if (!name || !description || !price || !imageURL || !bedrooms || !category || !livingarea || !facilities || !RentalObjectPackage || !rating || !review) {
        res.status(400).json({
            message: 'You need to enter all the fields, RentalObject'
        });
        return;
    }

    RentalObject.create({
        name,
        description,
        price,
        imageURL,
        bedrooms,
        category,
        livingarea,
        facilities,
        RentalObjectPackage,
        rating,
        review,
        saved,
        createdAt: new Date(),
        updatedAt: new Date()
    })
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong when creating the rentalObject',
                err: err.message
            });
        });
};


exports.getAllRentalObjects = async (req, res) => {
    try {
        const category = req.query.category
        let query = {}
        if(category && category !== "All") query.category = category
        console.log("query", query) 
        const rentalObjects = await RentalObject.find(query)

        res.status(200).json(rentalObjects)


    } catch (err) {
        res.status(500).json({ message: 'Something went wrong when getting the rentalObjects' })
    }
}


exports.getRentalObjectById = async (req, res) => {

    const _rentalObject = await RentalObject.findById(req.params.id).populate("facilities")

    if (!_rentalObject) {
        return res.status(404).json({ message: 'Could not find the rentalObject' })
    }

    res.status(200).json(_rentalObject)

}

exports.uppdateRentalObject = async (req, res) => {
    const _rentalObject = await RentalObject.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (!_rentalObject) {
        return res.status(404).json({ message: 'Could not find the rentalObject' })
    }

    res.status(200).json(_rentalObject)

}


exports.deleteRentalObject = (req, res) => {

    RentalObject.findByIdAndDelete(req.params.id)
        .then(_rentalObject => {
            if (!_rentalObject) {
                return res.status(404).json({ message: 'Could not find the rentalObject' })
            }
            res.status(200).json(_rentalObject)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong when deleting the rentalObject',
                err: err.message
            })

        })
}
