import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import facilitiesService from './facilitiesService'

const initialState = {
  text: [],
  loading: false,
  error: null as string | null, 
};

export const getAllFacilities = createAsyncThunk('rentalObjects/loadrentalObjects', async (_, thunkAPI) => { 
    try {
       return await facilitiesService.getAllAsync()
    } catch (error){
       return thunkAPI.rejectWithValue(error)
    }
}) 

// export const selectFacilitiesByCategory = (state, category) => {
//   console.log(state, category)
// // Check if state.facilities is defined
// if (state.facilities) {
//   // Check if state.facilities is an array
//   if (Array.isArray(state.facilities)) {
//     return state.facilities.filter((facility) => {
//       const matchingCategory = facility.categories.find(
//         (cat) => cat.name.toLowerCase() === category.toLowerCase()
//       );
//       return !!matchingCategory;
//     });
//   }

//   // If state.facilities is an object, assume it has a 'text' property
//   if (state.facilities.text) {
//     return state.facilities.text.filter((facility) => {
//       const matchingCategory = facility.categories.find(
//         (cat) => cat.name.toLowerCase() === category.toLowerCase()
//       );
//       return !!matchingCategory;
//     });
//   }
// }

// // Return an empty array if state.facilities is not defined or doesn't have a 'text' property
// return [];
// };

export const facilitiesSlice = createSlice({
  name: 'facilities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllFacilities.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(getAllFacilities.fulfilled, (state, action) => {
        state.loading = false;
        state.text = action.payload;
        state.error = null; 
      })
      .addCase(getAllFacilities.rejected, (state, action) => {
        state.loading = false;
        state.text = [];
        if (action.error.message !== undefined) {
          state.error = action.error.message;
        } else {
          state.error = null; 
        }
      });
  },
});


export default facilitiesSlice.reducer;
