import { ProductType } from "./product";

export interface CartType {
  product: ProductType;
  amount: number;
  totalPrice: number;
}