const Facility = require('../Schema/facilitySchema');

exports.createNewFacility = (req, res) => {
    const { categories } = req.body;

    if (!categories || !Array.isArray(categories)) {
        res.status(400).json({
            message: 'Invalid input. Provide an array of categories.',
        });
        return;
    }

    Facility.create({ categories })
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong when creating the facility',
                err: err.message,
            });
            return;
        });
};

exports.getAllFacilities = async (req, res) => {
    try {
        const facilities = await Facility.find();
        res.status(200).json(facilities);
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong when getting the facilities' });
    }
};

exports.getFacilityById = async (req, res) => {
    const facilityId = req.params.id;

    try {
        const facility = await Facility.findOne({ 'categories.facilities._id': facilityId });

        if (!facility) {
            return res.status(404).json({ message: 'Could not find the facility' });
        }

        const matchingFacility = facility.categories.reduce((acc, category) => {
            const matchingFacility = category.facilities.find(facility => facility._id == facilityId);
            if (matchingFacility) {
                acc = matchingFacility;
            }
            return acc;
        }, null);

        res.status(200).json(matchingFacility);
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong when getting the facility by ID' });
    }
};

exports.updateFacility = async (req, res) =>{
    const facility = await Facility.findByIdAndUpdate(req.params.id, req.body, {new: true})
    
    if(!facility){
      return res.status(404).json({message: 'Could not find the facility'})
    }

    res.status(200).json(facility)

}


exports.deleteFacility = async (req, res) => {
    const facilityId = req.params.id;

    try {
        const facility = await Facility.findOne({ 'categories.facilities._id': facilityId });

        if (!facility) {
            return res.status(404).json({ message: 'Could not find the facility' });
        }

        facility.categories.forEach(category => {
            const index = category.facilities.findIndex(facility => facility._id == facilityId);
            if (index !== -1) {
                category.facilities.splice(index, 1);
            }
        });

        await facility.save();

        res.status(200).json(facility);
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong when deleting the facility' });
    }
};