import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './SASS/style.scss'
import Root from "./pages/Root"
import Cart from "./pages/Cart"
import Products from "./pages/Products"
import Product from "./pages/Product"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Account from "./pages/Account"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
          children: [
            {
              path: "?categoryId=:id",
              element: <Products />,
            },
          ]
        },
        {
          path: "products/:id",
          element: <Product />,
        },
        {
          path: "categories",
          element: <Categories />
        },
        {
          path: "cart",
          element: <Cart />

        },
        {
          path: "account",
          children: [
            {
              path: '',
              element: <Account />
            }
          ]
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App