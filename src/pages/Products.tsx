import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { fetchAllProducts, sortByName } from "../redux/reducers/productReducer"

import AddButton from "../components/AddButton";
import Search from "../components/Search";
import "../SASS/component/products.scss"

const Products = () => {
  const products = useAppSelector(state => state.productReducer)
  const dispatch = useAppDispatch()
  const sortName = () => {
    dispatch(sortByName())
  }
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <div>
      <div>
        <button onClick={sortName} className="addBtn">Sort products by name</button>
        <Search />
      </div>
      
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