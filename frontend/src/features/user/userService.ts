const API_BASE_URL = 'http://localhost:8081/api/user/';

export const getUserProfile = async () => {
    try {
      const token = localStorage.getItem('user-token');
      console.log("userService getUserProfile,", token)
      const response = await fetch(`${API_BASE_URL}profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Error in getUserProfile: ${error.message}`);
    }
  };
  
const getAllAsync = async () => {     
    const res = await fetch(API_BASE_URL);
    if (!res.ok) throw new Error('Something went wrong when getting all the Users');
    return res.json();
}


const getByIdAsync = async (userId: string) => {
    const res = await fetch(API_BASE_URL + userId);
    if (!res.ok) throw new Error('Something went wrong when getting an User');
    return res.json();
}

const createUserAsync = async (formData: string) => {
    const res = await fetch(API_BASE_URL + 'register', {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        
    });
       console.log('createUserAsync;', res)
    if (!res.ok) {
        throw new Error('Something went wrong when creating a user');
    }

    const responseBody = await res.json();

    if (responseBody.token) {
        localStorage.setItem('user-token', JSON.stringify(responseBody.token));
    } else {
        console.error('Token not found in the response body');
    }

    return responseBody;
}

const loginAsync = async (formData : string) => {
    console.log(formData)
    const res = await fetch(API_BASE_URL + 'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (!res.ok) {
        throw new Error('Something went wrong during login');
    }

    const responseBody = await res.json();

    if (responseBody.token) {
        localStorage.setItem('user-token', JSON.stringify(responseBody.token));
    } else {
        console.error('Token not found in the response body');
    }

    return responseBody;
};

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

const userService = {
    getAllAsync,
    getByIdAsync,
    createUserAsync,
    updateRentalObjectAsync,
    deleteRentalObjectAsync,
    loginAsync,
    getUserProfile
};

export default userService;
