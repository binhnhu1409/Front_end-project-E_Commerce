import {rest} from "msw";
import {setupServer} from "msw/node"
import jwt from "jsonwebtoken"

import { users } from "./userServer";
import { UserType } from "../../types/user";

const handler = [
  rest.post("https://api.escuelajs.co/api/v1/auth/login", async (req, res, ctx) => {
    const {email, password} = await req.json()
    const foundUser: UserType | undefined = users.find(user => user.email === email && user.password === password)
    if (foundUser) {
      const access_token: string = jwt.sign(foundUser, "userLoginAuthKey")
      return res(
        ctx.json({
            access_token
        })
      )
    } else {
      return res(ctx.status(401, "Unauthorized"))
    }
  }),
  rest.get("https://api.escuelajs.co/api/v1/auth/profile", (req, res, ctx) => {
    const access_tokenArr: string[] | undefined = req.headers.get("Authorization")?.split(" ")
    if (access_tokenArr) {
      const access_token = access_tokenArr[1]
      const foundUser = jwt.verify(access_token, "userLoginAuthKey")
      return res(
        ctx.json(foundUser)
      )
    } else {
      return res(ctx.status(401, "Unauthorized"))
    }
  })
]

const authenticationServer =  setupServer(...handler)
export default authenticationServer