import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Root from "./pages/Root"
import Cart from "./pages/Cart"
import Products from "./pages/Products"
import Product from "./pages/Product"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Categories from "./pages/Categories"

import './SASS/style.scss'

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
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App