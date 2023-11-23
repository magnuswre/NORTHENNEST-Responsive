const API_BASE_URL = 'http://localhost:8081/api/rentalobject/';

const getAllAsync = async (category: string) => {
    const res = await fetch(API_BASE_URL + `?category=${category}`);
    if (!res.ok) throw new Error('Something went wrong when getting rental objects by category');
    return res.json();
  }

const getByIdAsync = async (rentalObjectId: string) => {
    const res = await fetch(API_BASE_URL + rentalObjectId);
    if (!res.ok) throw new Error('Something went wrong when getting a rentalObject');
    return res.json();
}

const addRentalObjectAsync = async (rentalObjectData: string) => {
    const res = await fetch(API_BASE_URL + 'add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(rentalObjectData),
    });

    if (!res.ok) throw new Error('Something went wrong when adding a rentalObject');
    return res.json();
}

const updateRentalObjectAsync = async (rentalObjectId: string, updatedRentalObjectData: string) => {
    const res = await fetch(API_BASE_URL + rentalObjectId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRentalObjectData),
    });

    if (!res.ok) throw new Error('Something went wrong when updating a rental Object');
    return res.json();
}

const deleteRentalObjectAsync = async (rentalObjectId: string) => {
    const res = await fetch(API_BASE_URL + rentalObjectId, {
        method: 'DELETE',
    });

    if (!res.ok) throw new Error('Something went wrong when deleting a rental object');
    return res.json();
}

const rentalObjectService = {
    getAllAsync,
    getByIdAsync,
    addRentalObjectAsync,
    updateRentalObjectAsync,
    deleteRentalObjectAsync,
};

export default rentalObjectService;
