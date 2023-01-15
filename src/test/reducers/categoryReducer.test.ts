import { fetchAllCategories } from "../../redux/reducers/categoryReducer";
import { createStore } from "../../redux/store";

import { StoreType } from "../../types/store";
import categoryServer from "../shared/categoryServer";

let store: StoreType

beforeAll(() => {
  categoryServer.listen()
})

afterAll(() => {
  categoryServer.close()
})

beforeEach(() => {
  store = createStore()
})

describe("Test all the categoryReducer actions", () => {
  test("Return initial state of category", () => {
    expect(store.getState().categoryReducer.length).toBe(0)
  })
  test("Should fetch all categories", async () => {
    await store.dispatch(fetchAllCategories())
    expect(store.getState().categoryReducer.length).toBe(3)
  })
})