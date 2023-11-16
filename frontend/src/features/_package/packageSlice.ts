import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import postsService from "./packagesService"

const initialState = {
    _package: null,
    error: null as string | null,
    loading: false
}

export const getPackageById = createAsyncThunk('post/getById', async (packageId: string, thunkAPI) => { 
    try {
       return await postsService.getByIdAsync(packageId)
    } catch (err){
       console.log(err)
       return thunkAPI.rejectWithValue(err) 
    }
}) 
 
export const packageSlice = createSlice({ 
    name: 'package',
    initialState,
    reducers: {
      clearPackage: (state) => {
        state._package = null
      }
    },
    extraReducers: (builder) => { 
      builder
          .addCase(getPackageById.pending, (state) => {
            state.loading = true
          })
          .addCase(getPackageById.fulfilled, (state, action)=> {
            state.loading = false
            state._package = action.payload
            state.error = null
          })
          .addCase(getPackageById.rejected, (state, action) => {
            state.loading = false
            state._package = null
            state.error = action.payload as string | null
          })

      }
    
})

export const { clearPackage, } = packageSlice.actions 

export default packageSlice.reducer