import { createProduct, deleteProduct, fetchAllProducts, fetchProductsByCategory, sortByName, sortByPrice } from "../../redux/reducers/productReducer"
import { createStore } from "../../redux/store"
import { ProductCreatedType } from "../../types/product"
import { StoreType } from "../../types/store"
import productServer from "../shared/productServer"

let store: StoreType

beforeAll(() => {
  productServer.listen()
})

afterAll(() => {
  productServer.close()
})

beforeEach(() => {
  store = createStore()
})

describe("Test all the productReducer actions", () => {
  test("Return initial state of product", () => {
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
  test("Should sort products by name asc", async () => {
    await store.dispatch(fetchAllProducts());
    store.dispatch(sortByName("asc"));
    expect(store.getState().productReducer[0].title).toBe("A Computer");
    expect(store.getState().productReducer[1].title).toBe("B Other");
    expect(store.getState().productReducer[2].title).toBe("C Shoes");
  })
  test("Should sort products by name desc", async () => {
    await store.dispatch(fetchAllProducts());
    store.dispatch(sortByName("desc"));
    expect(store.getState().productReducer[0].title).toBe("C Shoes");
    expect(store.getState().productReducer[1].title).toBe("B Other");
    expect(store.getState().productReducer[2].title).toBe("A Computer");
  })
  test("Should sort products by price asc", async () => {
    await store.dispatch(fetchAllProducts());
    store.dispatch(sortByPrice("asc"));
    expect(store.getState().productReducer[0].price).toBe(5);
    expect(store.getState().productReducer[1].price).toBe(50);
    expect(store.getState().productReducer[2].price).toBe(500);
  });
  test("Should sort products by price desc", async () => {
    await store.dispatch(fetchAllProducts());
    store.dispatch(sortByPrice("desc"));
    expect(store.getState().productReducer[0].price).toBe(500);
    expect(store.getState().productReducer[1].price).toBe(50);
    expect(store.getState().productReducer[2].price).toBe(5);
  });
  test("Should delete a product", async () => {
    await store.dispatch(fetchAllProducts());
    await store.dispatch(deleteProduct(1));
    expect(store.getState().productReducer.length).toBe(2);
  });
  test("Should get product by category", async () => {
    await store.dispatch(fetchAllProducts());
    await store.dispatch(fetchProductsByCategory(1));
    expect(store.getState().productReducer.length).toBe(1);
  });
})