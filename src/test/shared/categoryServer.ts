import { rest } from "msw"
import { setupServer } from "msw/lib/node"

const categories = [
  {
    id: 1,
    name: "Shoes",
    image: "https://placeimg.com/640/480/any",
  },
  {
    id: 2,
    name: "Clothes",
    image: "https://placeimg.com/640/480/any",
  },
  {
    id: 3,
    name: "Other",
    image: "https://placeimg.com/640/480/any",
  }
]

const handler = [
  rest.get("https://api.escuelajs.co/api/v1/categories", (req, res, ctx) => {
    return res(ctx.json(categories))
  }),
]

const categoryServer = setupServer(...handler)
export default categoryServer