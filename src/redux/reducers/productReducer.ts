import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosInstance from "../../common/axiosIntance";

import { ProductType } from "../../types/product";

const initialState: ProductType[] = []

export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async () => {
    try {
      const response = await axiosInstance.get("products")
      const data: ProductType[] = await response.data
      return data
    } catch (e: any) {
      throw new Error (e.message)
    }
  }
)

const productSlice = createSlice({
  name: "productSlice",
  initialState: initialState,
  reducers: {

  },
  extraReducers: (build) => {
    build.addCase(fetchAllProducts.fulfilled, (state, action) => {
      if (action.payload && "message" in action.payload) {
        return state
      } else if (!action.payload) {
        return state
      } else {
        return action.payload
      }
    })
    build.addCase(fetchAllProducts.pending, (state, action) => {
      return state
    })
    build.addCase(fetchAllProducts.rejected, (state, action) => {
      return state
    })
  }
})

const productReducer = productSlice.reducer
export default productReducer