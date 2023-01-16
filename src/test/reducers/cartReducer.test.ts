import cartReducer, { addToCart, decreaseItem, increaseItem, removeFromCart } from "../../redux/reducers/cartReducer";
import { StoreType } from "../../types/store";

let store: StoreType

const initialCart = {
  product: {
    id: 1,
    title: "Tasty Rubber Soap",
    price: 50,
    description: "The Football Is Good For Training And Recreational Purposes",
    images: ["https://api.lorem.space/image/furniture?w=640&h=480&r=8344"],
    category: {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=5292",
    }
  },
  amount: 3,
  totalPrice: 150,
}

const testAdd = {
  product: {
    id: 2,
    title: "Tasty Rubber Clothes",
    price: 100,
    description: "Test Purposes",
    images: ["https://api.lorem.space/image/furniture?w=640&h=480&r=8344"],
    category: {
      id: 2,
      name: "Clothes",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=5292",
    }
  },
  amount: 1,
  totalPrice: 100,
}

const testItem = {
  product: {
    id: 1,
    title: "Tasty Rubber Soap",
    price: 50,
    description: "The Football Is Good For Training And Recreational Purposes",
    images: ["https://api.lorem.space/image/furniture?w=640&h=480&r=8344"],
    category: {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=5292",
    }
  },
  amount: 1,
  totalPrice: 50,
}

beforeEach(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify([initialCart])
  );
});

afterEach(() => {
  localStorage.clear();
});

describe("Test all the cartReducer actions", () => {
  test("Should add items to cart", () => {
    const cart = cartReducer([], 
      addToCart(testAdd))
    expect(cart.length).toBe(2)
  })
  test("Should remove items from cart", () => {
    const cart = cartReducer([], 
      removeFromCart(initialCart))
    expect(cart.length).toBe(0)
  })
  test("Should increase items in cart", () => {
    const cart = cartReducer([], 
      increaseItem(testItem))
    expect(cart[0].amount).toBe(4)
  })
  test("Should decrease items in cart", () => {
    const cart = cartReducer([], 
      decreaseItem(testItem))
    expect(cart[0].amount).toBe(2)
  })
})