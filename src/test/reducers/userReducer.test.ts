import { createStore } from "../../redux/store";

import { StoreType } from "../../types/store";
import userServer from "../shared/userServer";
import { fetchAllUsers, registerUser } from "../../redux/reducers/userReducer";
import { UserRegisterType } from "../../types/user";

let store: StoreType

beforeAll(() => {
  userServer.listen()
})

afterAll(() => {
  userServer.close()
})

beforeEach(() => {
  store = createStore()
})

describe("Test all the userReducer actions", () => {
  test("Return initial state of user", () => {
    expect(store.getState().userReducer.length).toBe(0)
  })
  test("Should fetch all users", async () => {
    await store.dispatch(fetchAllUsers())
    expect(store.getState().userReducer.length).toBe(3)
  })
  test("should create a new user", async() => {
    const registeredData: UserRegisterType = {
      name: "Lana",
      avatar: "https://www.pexels.com/photo/woman-wearing-sun-hat-and-white-dress-holding-pink-bougainvilleas-1382734/",
      email: "lana@mail.com",
      password: "lana123"
    }
    await store.dispatch(registerUser(registeredData))
    expect(store.getState().userReducer.length).toBe(1)
  })
})