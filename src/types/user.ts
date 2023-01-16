export interface UserType {
  id: number
  email: string
  password: string
  name: string
  role: string
  avatar: string
}

export interface LogoutType {
  isLogin: boolean
  userInfo: UserType | null
  error: boolean
  errorMsg: string
}

export interface LoginType {
  email: string
  password: string
}

export interface ReturnedCredentials {
  access_token: string
}