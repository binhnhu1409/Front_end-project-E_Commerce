import { CategoryType } from "./category"

export interface ProductType {
  id: number
  title: string
  price: number
  description: string
  category: CategoryType
  images: string[]
}

export interface ProductCreatedType {
  title: string,
  price: number,
  description: string,
  categoryId: number,
  images: string[]
}
