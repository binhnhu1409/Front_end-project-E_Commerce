import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AxiosError } from "axios"

import axiosInstance from "../../common/axiosIntance"
import { LoginType, LogoutType, ReturnedCredentials, UserType } from "../../types/user"

const initialState: LogoutType = {
  isLogin: false,
  userInfo: null,
  error: false,
  errorMsg: ''
}

export const userAuthenticate = createAsyncThunk(
  "userAuthenticate",
  async (loginInfo: LoginType) => {
    try{
      const response = await axiosInstance.post("auth/login", loginInfo)
      const data: ReturnedCredentials = response.data
      if ("access_token" in data && data.access_token.length){
        const headerConfig = {
          headers: {
            "Authorization": `bearer ${data.access_token}`
          }
        }
        const res = await axiosInstance.get('auth/profile', headerConfig)
        const resData: UserType = await res.data
        return resData
      }
  } catch(e: any) {
    const error = e as AxiosError
    return error
  }
  }
)

const authenticationSlice = createSlice ({
  name: "authenticationSlice",
  initialState: initialState,
  reducers: {
    userLogout: (state: LogoutType) => {
      return {
        ...state,
        isLogin: false,
        userInfo: null,
        error: false,
        errorMsg: '',
      }
    }
  }, 
  extraReducers: (build) => {
    build.addCase(userAuthenticate.fulfilled, (state, action) => {
      if(action.payload && "message" in action.payload) {
        state.isLogin = false
        state.userInfo = null
        state.error = true
        state.errorMsg = action.payload.message
        return state
      }
      if( action.payload && "id" in action.payload) {
        const {id, email, password, name, role, avatar} = action.payload
        const userData = {
          id,
          email,
          password,
          name,
          role,
          avatar
        }
        state.isLogin = true
        state.userInfo = userData
        state.error = false
        state.errorMsg=''
        return state
      } else {
        return state
      }
    })
    build.addCase(userAuthenticate.pending, (state, action) => {
      return state
    })
    build.addCase(userAuthenticate.rejected, (state, action) => {
      return state
    })
  }
})

const authenticationReducer = authenticationSlice.reducer
export const { userLogout } = authenticationSlice.actions;
export default authenticationReducer