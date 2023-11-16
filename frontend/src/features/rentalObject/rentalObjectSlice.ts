import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import rentalObjectsService from "./rentalObjectsService";

const initialState = {
  rentalObject: null,
  loading: false,
  error: null as string | null,
  rentalObjectId: null as string | null, // New state field to store rentalObjectId
};

export const getRentalObjectById = createAsyncThunk(
  "rentalObject/getById",
  async (id: string, thunkAPI) => {
    try {
      return await rentalObjectsService.getByIdAsync(id);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const rentalObjectSlice = createSlice({
  name: "rentalObject",
  initialState,
  reducers: {
    setRentalObjectId: (state, action) => {
      state.rentalObjectId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRentalObjectById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRentalObjectById.fulfilled, (state, action) => {
        state.loading = false;
        state.rentalObject = action.payload;
        state.error = null;
      })
      .addCase(getRentalObjectById.rejected, (state, action) => {
        state.loading = false;
        state.rentalObject = null;
        state.error = action.payload as string | null;
      });
  },
});

export const { setRentalObjectId } = rentalObjectSlice.actions;

export default rentalObjectSlice.reducer;
