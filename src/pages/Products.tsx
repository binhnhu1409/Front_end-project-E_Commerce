import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { fetchAllProducts } from "../redux/reducers/productReducer"
import { AiOutlineEdit } from "react-icons/ai";

import AddButton from "../components/AddButton";
import Search from "../components/Search";
import "../SASS/component/products.scss"

const Products = () => {
  const products = useAppSelector(state => state.productReducer)
  const dispatch = useAppDispatch()
  console.log("products", products)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <div>
      <Search />
      {!products ? (
        <h2>Loading...</h2>
      ) : (
      <div className="grid">
        {products.map(product => (
        <div className="products">
          <span className="products__category">{product.category.name}</span>
          <Link to={`${product.id}`}>
            <img className="products__image" src={product.images[0]} alt="" />
          </Link>
          <div className="products__main">
            <p className="products__title">{product.title}</p>
            <p className="products__price">${product.price}</p>
          </div>
          <p className="products__description">{product.description.substring(0, 80)}...</p>
          <AddButton />
        </div>
      ))}
      </div>
      )}
    </div>
  )
}

export default Products