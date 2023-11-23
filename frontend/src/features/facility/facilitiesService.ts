const API_BASE_URL = 'http://localhost:8081/api/facility/';

const getAllAsync = async () => {     
    const res = await fetch(API_BASE_URL);
    if (!res.ok) throw new Error('Something went wrong when getting all the facilities');
    return res.json();
}

const getByIdAsync = async (facilityId: string) => {
    const res = await fetch(API_BASE_URL + facilityId);
    if (!res.ok) throw new Error('Something went wrong when getting a facility');
    return res.json();
}

const facilitiesService = {
    getAllAsync,
    getByIdAsync,
};

export default facilitiesService;