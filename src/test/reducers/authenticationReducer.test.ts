import { createStore } from "../../redux/store";

import { StoreType } from "../../types/store";
import authenticationServer from "../shared/authenticationServer";
import { userAuthenticate, userLogout } from "../../redux/reducers/authenticationReducer";
import { users } from "../shared/userServer";

let store: StoreType

beforeAll(() => {
  authenticationServer.listen()
})

afterAll(() => {
  authenticationServer.close()
})

beforeEach(() => {
  store = createStore()
})

describe("Test all the authenticationReducer actions", () => {
  test("Return initial state of user for authentication", () => {
    const initialState = {
      isLogin: false,
      userInfo: null,
      error: false,
      errorMsg: ''
    }
    expect(Object.keys(store.getState().authenticationReducer).length).toBe(4)
    expect(store.getState().authenticationReducer).toStrictEqual(initialState)
  })
  test("should let user login", async () => {
    const credentials = {
      email: "admin@mail.com",
      password: "admin123",
    }
    await store.dispatch(userAuthenticate(credentials))
    const expectedResult = {
      isLogin: true,
      userInfo: users[2],
      error: false,
      errorMsg: '',
    }
    expect(store.getState().authenticationReducer).toStrictEqual(expectedResult)
  })
  test("shouldn't let user login", async () => {
    const credentials = {
      email: "admin@mail.com",
      password: "admin124",
    }
    await store.dispatch(userAuthenticate(credentials))
    const expectedResult = {
      isLogin: false,
      userInfo: null,
      error: true,
      errorMsg: "Request failed with status code 401",
    }
    expect(store.getState().authenticationReducer).toStrictEqual(expectedResult)
  })
  test("should let user log out", async () => {
    const credentials = {
      email: "admin@mail.com",
      password: "admin123",
    }
    await store.dispatch(userAuthenticate(credentials))
    const loginResult = {
      isLogin: true,
      userInfo: users[2],
      error: false,
      errorMsg: '',
    }
    expect(store.getState().authenticationReducer).toStrictEqual(loginResult)
    store.dispatch(userLogout())
    const expectedResult = {
        isLogin: false,
        userInfo: null,
        error: false,
        errorMsg: '',
    }
    expect(store.getState().authenticationReducer).toStrictEqual(expectedResult)
})
})