import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import userService from "./userService"

const initialState = {
  user: null,
  loading: false,
  error: null as string | null
}

export const getUserById = createAsyncThunk('user/getById', async (id: string, thunkAPI) => {
  try {
    return await userService.getByIdAsync(id)
  } catch (err) {
    console.log(err)
    return thunkAPI.rejectWithValue(err)
  }
})

export const getUserByToken = createAsyncThunk('user/getByToken', async (_, thunkAPI) => {
  try {
    return await userService.getUserProfile()
  } catch (err) {
    console.error('Error in getUserByToken:', err);
    return thunkAPI.rejectWithValue(err)
  }
});

export const createUser = createAsyncThunk('user/create', async (formData: any, thunkAPI) => {
  try {
    const response = await userService.createUserAsync(formData);
    console.log(response)
    return response; 
  } catch (error: any) {
    const message = error.response?.data?.message || error.message || "An unknown error occurred";
    return thunkAPI.rejectWithValue(message);
  }
});


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // clearProduct: (state) => {
    //   state.product = null
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getUserById.pending, (state) => {
        state.loading = true
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.error = null
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false
        state.user = null
        state.error = action.payload as string | null
      })
      .addCase(getUserByToken.pending, (state) => {
        state.loading = true
      })
      .addCase(getUserByToken.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.error = null
      })
      .addCase(getUserByToken.rejected, (state, action) => {
        state.loading = false
        state.user = null
        state.error = action.payload as string | null
      })

  }

})

export default userSlice.reducer