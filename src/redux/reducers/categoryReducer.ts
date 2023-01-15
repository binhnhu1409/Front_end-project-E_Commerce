import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "../../common/axiosIntance";
import { CategoryType } from "../../types/category";
import { ProductType } from "../../types/product";

const initialState: CategoryType[] = []

export const fetchAllCategories = createAsyncThunk(
  "fetchAllCategories",
  async () => {
    try {
      const response = await axiosInstance.get("categories")
      const data: CategoryType[] = await response.data
      return data
    } catch (e: any ) {
      throw new Error("Error: Couldn't fetch categories")
    }
  }
)

const categorySlice = createSlice ({
  name: "categorySlice",
  initialState: initialState,
  reducers: {

  },
  extraReducers: (build) => {
    build.addCase(fetchAllCategories.fulfilled, (state, action) => {
      if (action.payload && "message" in action.payload) {
        return state
      } else if (!action.payload) {
        return state
      } else {
        return action.payload
      }
    })
    build.addCase(fetchAllCategories.pending, (state, action) => {
      return state
    })
    build.addCase(fetchAllCategories.rejected, (state, action) => {
      return state
    })
  }
})

const categoryReducer = categorySlice.reducer
export default categoryReducer