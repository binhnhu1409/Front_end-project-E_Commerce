import { rest } from "msw";
import { setupServer } from "msw/node";

const products = [
  {
    id: 1,
    title: "Licensed Bronze Computer",
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
      title: "Licensed Bronze Shoes",
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
      title: "Licensed Bronze Other",
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
  })
] 

const server = setupServer(...handler)
export default server