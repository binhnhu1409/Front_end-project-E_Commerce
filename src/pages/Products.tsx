import { useEffect, useState } from "react"
import { Link} from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import {FaSearch} from 'react-icons/fa'

import { fetchAllProducts, 
  sortByName, 
  sortByPrice } 
  from "../redux/reducers/productReducer"
import AddButton from "../components/AddButton";
import "../SASS/pages/products.scss";
import { fetchAllUsers } from "../redux/reducers/userReducer"

const Products = () => {
  const dispatch = useAppDispatch()
  const [namesort, setNamesort] = useState("")
  const [pricesort, setPricesort] = useState("")
  const [search, setSearch] = useState("")
  const users = useAppSelector(state => state.userReducer)
  console.log("user", users)

  const products = useAppSelector(state => state.productReducer.filter(item => {
    return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1
  }))
  const sortName = (namesort : string) => {
    setNamesort(namesort)
    if (namesort === "nameAsc") {
      dispatch(sortByName("asc"));
    } else if (namesort === "nameDesc") {
      dispatch(sortByName("desc"));
    }
  }
  const sortPrice = (pricesort : string) => {
    setPricesort(pricesort)
    if (pricesort === "priceAsc") {
      dispatch(sortByPrice("asc"));
    } else if (pricesort === "priceDesc") {
      dispatch(sortByPrice("desc"));
    }
  }

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllUsers());
  }, [dispatch])

  return (
    <div>
      {/* search here */}
      <div className="search__container">
        <input className="search__input" 
                type="text" 
                name="search" 
                id="search" 
                placeholder="Search product..."
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
                autoFocus />
        <FaSearch className="search__icon"/>
      </div>
      {/* sort button here */}
      <div className="sort__container">
        <select name="sortByName" id="sortByName" value={namesort} className="sort__Btn"
          onChange={({ target }) => sortName(target.value)}>
          <option value="" disabled selected>Sort Products By Name</option>
          <option value="nameAsc">A-Z</option>
          <option value="nameDesc">Z-A</option>
        </select>
        <select name="sortByPrice" id="sortByPrice" value={pricesort} className="sort__Btn"
          onChange={({ target }) => sortPrice(target.value)}>
          <option value="" disabled selected>Sort Products By Price</option>
          <option value="priceAsc">Lowest price first</option>
          <option value="priceDesc">Highest price first</option>
        </select>
      </div>
      {/* products display here */}
      {!products ? (
        <h2>Loading...</h2>
      ) : (
      <div className="grid">
        {products.map(product => (
        <div className="products" key={product.id}>
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