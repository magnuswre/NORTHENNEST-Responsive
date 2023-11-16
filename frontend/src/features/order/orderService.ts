const API_BASE_URL = 'http://localhost:8080/api/order/';

const getAllAsync = async () => {
    const res = await fetch(API_BASE_URL);
    if (!res.ok) throw new Error('Something went wrong when getting rental objects by category');
    return res.json();
  }

const getByIdAsync = async (orderId: string) => {
    const res = await fetch(API_BASE_URL + orderId);
    if (!res.ok) throw new Error('Something went wrong when getting a rentalObject');
    return res.json();
}

const addRentalObjectAsync = async (orderData: string) => {
    const res = await fetch(API_BASE_URL + 'add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
    });
    if (!res.ok) throw new Error('Something went wrong when adding an order');

    const data = await res.json();
    return data; // Assuming the server wraps the order object in an "order" field
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

const OrderService = {
    getAllAsync,
    getByIdAsync,
    addRentalObjectAsync,
    updateRentalObjectAsync,
    deleteRentalObjectAsync,
};

export default OrderService;