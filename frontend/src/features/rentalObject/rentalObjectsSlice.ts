import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import rentalObjectService from './rentalObjectsService'

const initialState = {
  rentalObjects: [],
  loading: false,
  error: null as string | null, 
};

// export const getAllRentalObjects = createAsyncThunk('rentalObjects/loadrentalObjects', async (_, thunkAPI) => { 
//     try {
//        return await rentalObjectService.getAllAsync()
//     } catch (error){
//        return thunkAPI.rejectWithValue(error)
//     }
// }) 

export const getAllRentalObjectsByCategory = createAsyncThunk(
  'rentalObjects/loadRentalObjectsByCategory',
  async (category: string, thunkAPI) => { // Accept category as a parameter
    try {
      console.log("Category:: ", category)
      return await rentalObjectService.getAllAsync(category);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const rentalObjectsSlice = createSlice({
  name: 'rentalObjects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllRentalObjectsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(getAllRentalObjectsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.rentalObjects = action.payload;
        state.error = null; 
      })
      .addCase(getAllRentalObjectsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.rentalObjects = [];
        if (action.error.message !== undefined) {
          state.error = action.error.message;
        } else {
          state.error = null; 
        }
      });
  },
});


export default rentalObjectsSlice.reducer;
