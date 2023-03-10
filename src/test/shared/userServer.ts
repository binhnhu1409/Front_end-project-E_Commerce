import { rest } from "msw"
import { setupServer } from "msw/lib/node"
import { UserRegisterType } from "../../types/user"

export const users = [
  {
    id: 1,
    email: "john@mail.com",
    password: "changeme",
    name: "Jhon",
    role: "customer",
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=7909",
  },
  {
    id: 2,
    email: "maria@mail.com",
    password: "12345",
    name: "Maria",
    role: "customer",
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=4777",
  },
  {
    id: 3,
    email: "admin@mail.com",
    password: "admin123",
    name: "Admin",
    role: "admin",
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6673",
  }
]

const handler = [
  rest.get("https://api.escuelajs.co/api/v1/users", (req, res, ctx) => {
    return res(ctx.json(users))
  }),
  rest.post("https://api.escuelajs.co/api/v1/users/", async(req, res, ctx) => {
    const user: UserRegisterType = await req.json()
    return res(ctx.json({
          ...user,
          role: "customer",
          id: 1
      })
    )
  }),
]

const userServer = setupServer(...handler)
export default userServer