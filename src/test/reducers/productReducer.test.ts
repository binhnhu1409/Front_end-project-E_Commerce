import { fetchAllProducts } from "../../redux/reducers/productReducer"
import { store } from "../../redux/store"
import server from "../shared/server"

server.listen()

describe("Test all the productReducer actions", () => {
  test("Return initial state", () => {
    expect(store.getState().productReducer.length).toBe(0)
  })
  test("Fetching all products", async () => {
    await store.dispatch(fetchAllProducts())
    expect(store.getState().productReducer.length).toBe(3)
  })
})