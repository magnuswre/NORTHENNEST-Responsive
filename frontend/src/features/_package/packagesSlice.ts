import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import packagesService from './packagesService'

const initialState = {
  packages: [],
  loading: false,
  error: null as string | null, 
};

export const getAllPackages = createAsyncThunk('packages/loadPackages', async (_, thunkAPI) => { 
    try {
       return await packagesService.getAllAsync()
    } catch (error){
       return thunkAPI.rejectWithValue(error)
    }
}) 

export const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPackages.pending, (state) => {
        state.loading = true;
        state.error = null; // Set to null
      })
      .addCase(getAllPackages.fulfilled, (state, action) => {
        state.loading = false;
        state.packages = action.payload;
        state.error = null; // Set to null
      })
      .addCase(getAllPackages.rejected, (state, action) => {
        state.loading = false;
        state.packages = [];
        if (action.error.message !== undefined) {
          state.error = action.error.message;
        } else {
          state.error = null; // Set to null
        }
      });
  },
});


export default packagesSlice.reducer;
