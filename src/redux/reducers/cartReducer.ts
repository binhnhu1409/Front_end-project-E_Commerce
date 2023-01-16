import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartType } from "../../types/cart";

export const getCartFromLocalStorage = (): CartType[] => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const saveCartToLocalStorarge = (data: CartType[]) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState: CartType[] = getCartFromLocalStorage();

const cartSlice = createSlice ({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartType>) => {
      const localStorageData = getCartFromLocalStorage();
      const foundProduct = localStorageData.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (foundProduct) {
        const cart = localStorageData.map((item) => {
          if (item.product.id === action.payload.product.id) {
            let totalItem = item.amount + action.payload.amount;
            let totalPrice = totalItem * item.product.price;
            return {
              ...foundProduct,
              amount: totalItem,
              totalPrice: totalPrice,
            };
          } else {
            return item;
          }
        });
        saveCartToLocalStorarge(cart);
        return (state = cart);
      } else {
        saveCartToLocalStorarge([...localStorageData, action.payload]);
        return (state = [...localStorageData, action.payload]);
      }
    },
    removeFromCart: (state, action: PayloadAction<CartType>) => {
      const localStorageData = getCartFromLocalStorage();
      const cart = localStorageData.filter((item) => {
        return item.product.id !== action.payload.product.id;
      });
      saveCartToLocalStorarge(cart);
      return (state = cart);
    },
    increaseItem: (state, action: PayloadAction<CartType>) => {
      const localStorageData = getCartFromLocalStorage();
      const item = localStorageData.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (item) {
        item.amount++;
        item.totalPrice = item.amount * item.product.price;
        saveCartToLocalStorarge(localStorageData);
        return (state = localStorageData);
      } else {
        return state;
      }
    },
    decreaseItem: (state, action: PayloadAction<CartType>) => {
      const localStorageData = getCartFromLocalStorage();
      const item = localStorageData.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (item) {
        if (item.amount > 1) {
          item.amount--;
          item.totalPrice = item.amount * item.product.price;
          saveCartToLocalStorarge(localStorageData);
          return (state = localStorageData);
        } else {
          item.amount = 1;
          item.totalPrice = item.amount * item.product.price;
          return (state = localStorageData);
        }
      }
    },
  }, 
})

const cartReducer = cartSlice.reducer
export const { addToCart, removeFromCart, increaseItem, decreaseItem } = cartSlice.actions;
export default cartReducer