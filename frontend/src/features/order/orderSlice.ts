import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderService";

const initialState = {
  order: null,
  isLoading: false,
  error: null as string | null,
};

// Async thunk for getting a rental object by ID
export const getRentalObjectById = createAsyncThunk('order/getById', async (id: string, thunkAPI) => {
  try {
    return await orderService.getByIdAsync(id);
  } catch (error: any) {
    // Type assertion to any to avoid TypeScript error 18046
    const message = error.response?.data?.message || error.message || "An unknown error occurred";
    return thunkAPI.rejectWithValue(message);
  }
});

// Async thunk for creating an order
export const createOrder = createAsyncThunk('order/create', async (orderData: any, thunkAPI) => {
  try {
    const response = await orderService.addRentalObjectAsync(orderData);
    return response; // This is assuming that the response from the service has an `order` object
  } catch (error: any) {
    const message = error.response?.data?.message || error.message || "An unknown error occurred";
    return thunkAPI.rejectWithValue(message);
  }
});

// Slice for orders
export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // Reducers for other actions can be added here
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload.order; // This assumes that the payload is the `order` object
        state.error = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(getRentalObjectById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRentalObjectById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload;
        state.error = null;
      })
      .addCase(getRentalObjectById.rejected, (state, action) => {
        state.isLoading = false;
        state.order = null;
        state.error = action.payload as string;
      })
  },
});

export default orderSlice.reducer;