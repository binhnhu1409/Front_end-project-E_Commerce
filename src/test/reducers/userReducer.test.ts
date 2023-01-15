import { createStore } from "../../redux/store";

import { StoreType } from "../../types/store";
import userServer from "../shared/userServer";
import { fetchAllUsers } from "../../redux/reducers/userReducer";

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
})