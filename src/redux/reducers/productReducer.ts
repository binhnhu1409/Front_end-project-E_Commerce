import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import axiosInstance from "../../common/axiosIntance";

import { ProductCreatedType, ProductType } from "../../types/product";

const initialState: ProductType[] = []

export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async () => {
    try {
      const response = await axiosInstance.get("products")
      const data: ProductType[] = await response.data
      return data
    } catch (e: any) {
      throw new Error ("Error: Couldn't fetch products")
    }
  }
)

export const createProduct = createAsyncThunk(
  "createProduct",
  async (product: ProductCreatedType) => {
    try {
      const response: AxiosResponse<ProductType, ProductType> = await axiosInstance.post("products/", product)
      return response.data
    } catch (e: any) {
      throw new Error ("Error: Couldn't create the new product")
    }
  }
)

const productSlice = createSlice({
  name: "productSlice",
  initialState: initialState,
  reducers: {
    sortByName: (state) => {
      state.sort((a,b) => a.title.localeCompare(b.title))
    }
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

    build.addCase(createProduct.fulfilled, (state, action) => {
      if (action.payload) {
        state.push(action.payload)
      } else {
        return state
      }
    })
    build.addCase(createProduct.pending, (state, action) => {
      return state
    })
    build.addCase(createProduct.rejected, (state, action) => {
      return state
    })
  }
})

const productReducer = productSlice.reducer
export const { sortByName} = productSlice.actions;
export default productReducer