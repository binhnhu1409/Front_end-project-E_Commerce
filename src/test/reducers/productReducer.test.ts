import { AnyAction, ThunkMiddleware } from "@reduxjs/toolkit"
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore"
import { createProduct, fetchAllProducts } from "../../redux/reducers/productReducer"
import { createStore, RootState } from "../../redux/store"
import { ProductCreatedType } from "../../types/product"
import server from "../shared/server"

let store: ToolkitStore<
            RootState, 
            AnyAction, 
            [ThunkMiddleware<RootState, AnyAction, undefined>]>

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

beforeEach(() => {
  store = createStore()
})

describe("Test all the productReducer actions", () => {
  test("Return initial state", () => {
    expect(store.getState().productReducer.length).toBe(0)
  })
  test("Fetching all products", async () => {
    await store.dispatch(fetchAllProducts())
    expect(store.getState().productReducer.length).toBe(3)
  })
  test("create product", async () => {
    await store.dispatch(fetchAllProducts())
    const newProduct: ProductCreatedType = {
      title: "D Test create product",
      price: 50,
      description: "Test create product",
      categoryId: 1,
      images: [],
    };
    await store.dispatch(createProduct(newProduct));
    expect(store.getState().productReducer.length).toBe(4);
  })
})