import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../common/axiosIntance";
import { UserType } from "../../types/user";

const initialState: UserType[] = []

export const fetchAllUsers = createAsyncThunk(
  "fetchAllUsers",
  async () => {
    try {
      const response = await axiosInstance.get("users")
      const data: UserType[] = await response.data
      return data
    } catch (e: any) {
      throw new Error ("Error: Couldn't fetch users")
    }
  }
)

const userSlice = createSlice ({
  name: "useSlice",
  initialState: initialState,
  reducers: {

  }, 
  extraReducers: (build) => {
    build.addCase(fetchAllUsers.fulfilled, (state, action) => {
      if (action.payload && "message" in action.payload) {
        return state
      } else if (!action.payload) {
        return state
      } else {
        return action.payload
      }
    })
    build.addCase(fetchAllUsers.pending, (state, action) => {
      return state
    })
    build.addCase(fetchAllUsers.rejected, (state, action) => {
      return state
    })
  }
})

const userReducer = userSlice.reducer
export default userReducer