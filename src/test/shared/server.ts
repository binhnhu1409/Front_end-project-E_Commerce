import { rest } from "msw";
import { setupServer } from "msw/node";
import { ProductCreatedType } from "../../types/product";

const products = [
  {
    id: 1,
    title: "A Computer",
    price: 50,
    description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    images: [
      "https://api.lorem.space/image/fashion?w=640&h=480&r=6237",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=4729",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=4151"
      ],
    category: {
      id: 1,
      name: "Clothes",
      image: "https://api.lorem.space/image/fashion?w=640&h=480&r=681",
    }
    },
    {
      id: 2,
      title: "C Shoes",
      price: 500,
      description: "Designed to give easy fit",
      images: [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6237",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4729",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4151"
        ],
      category: {
        id: 2,
        name: "Shoes",
        image: "https://api.lorem.space/image/fashion?w=640&h=480&r=681",
      }
    },
    {
      id: 3,
      title: "B Other",
      price: 5,
      description: "Gloves are ergonomically designed to give easy fit",
      images: [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6237",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4729",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4151"
        ],
      category: {
        id: 1,
        name: "Clothes",
        image: "https://api.lorem.space/image/fashion?w=640&h=480&r=681",
      }
      },
]

const handler = [
  rest.get("https://api.escuelajs.co/api/v1/products", (req, res, ctx) => {
    return res(ctx.json(products))
  }),
  rest.post("https://api.escuelajs.co/api/v1/products/", async (req, res, ctx) => {
    const product: ProductCreatedType = await req.json();
    return res(ctx.json(product))
  }),
  rest.delete("https://api.escuelajs.co/api/v1/products/:id", async (req, res, ctx) => {
    const id = req.params
    const findProduct = products.find((product) => product.id === Number(id))
    console.log("findPRoduct", findProduct)
    if (findProduct) {
      return res(ctx.json(true))
    }
    return res(ctx.status(404,"Not Found"))
  }),
] 

const server = setupServer(...handler)
export default server