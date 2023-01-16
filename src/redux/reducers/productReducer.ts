import { createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
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

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (id: number) => {
    try {
      const response = await axiosInstance.delete(`products/${id}`);
      console.log("response from delete", response)
      const data = await response.data

      return data
    } catch (e: any) {
      throw new Error ("Error: Couldn't detele products")
    }
  }
);

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

export const fetchProductsByCategory = createAsyncThunk(
  "fetchProductByCategory",
  async (categoryId: number) => {
    try {
      const response = await axiosInstance.get(`products/?categoryId=${categoryId}`);
      const data: ProductType[] = await response.data;
      return data;
    } catch (e: any) {
      throw new Error("Error: Couldn't fetch products by categories");
    }
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState: initialState,
  reducers: {
    sortByName: (state, action: PayloadAction<"asc" | "desc">) => {
      if (action.payload === "asc") {
        state.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        state.sort((a, b) => b.title.localeCompare(a.title));
      }
    },
    sortByPrice: (state, action: PayloadAction<"asc" | "desc">) => {
      if (action.payload === "asc") {
          state.sort((a, b) => a.price - b.price)
      } else {
          state.sort((a, b) => b.price - a.price)
      }
  },
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

    build.addCase(deleteProduct.fulfilled, (state, action) => {
      console.log("deleteProduct fullfilled")
      if (action.payload) {
        return state.filter((item) => item.id !== action.payload)
      } else {
        return state
      }
      
    })
    build.addCase(deleteProduct.pending, (state, action) => {
      // console.log("deleteProduct pending")
      return state
    })
    build.addCase(deleteProduct.rejected, (state, action) => {
      // console.log("deleteProduct rejected", action)
      return state
    })

    build.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      if (action.payload && "message" in action.payload) {
        return state
      } else if (!action.payload) {
        return state
      } else {
        return action.payload
      }
    })
    build.addCase(fetchProductsByCategory.pending, (state, action) => {
      return state
    })
    build.addCase(fetchProductsByCategory.rejected, (state, action) => {
      return state
    })
  }
})

const productReducer = productSlice.reducer
export const { sortByName, sortByPrice } = productSlice.actions;
export default productReducer