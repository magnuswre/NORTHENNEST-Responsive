// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import facilitiesService from './facilitiesService'

// const initialState = {
//   icon: "",
//   text: "",
//   loading: false,
//   error: null as string | null, 
// };

// export const getAllFacilities = createAsyncThunk('rentalObjects/loadrentalObjects', async (_, thunkAPI) => { 
//     try {
//        return await facilitiesService.getAllAsync()
//     } catch (error){
//        return thunkAPI.rejectWithValue(error)
//     }
// }) 

// export const facilitiesSlice = createSlice({
//   name: 'rentalObjects',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAllFacilities.pending, (state) => {
//         state.loading = true;
//         state.error = null; 
//       })
//       .addCase(getAllFacilities.fulfilled, (state, action) => {
//         state.loading = false;
//         state.text = action.payload.text;
//         state.icon = action.payload.icon;
//         state.error = null; 
//       })
//       .addCase(getAllFacilities.rejected, (state, action) => {
//         state.loading = false;
//         state.text = "";
//         state.icon = "";
//         if (action.error.message !== undefined) {
//           state.error = action.error.message;
//         } else {
//           state.error = null; 
//         }
//       });
//   },
// });


// export default facilitiesSlice.reducer;