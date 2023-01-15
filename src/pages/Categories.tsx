import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"

import { fetchAllCategories } from "../redux/reducers/categoryReducer"
import "../SASS/component/categories.scss"

const Categories = () => {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(state => state.categoryReducer)
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [dispatch])

  return (
    <div>
      {!categories ? (
        <h2>Loading...</h2>
      ) : (
      <div className="categories">
        {categories.map(item => (
          <div className="categories__card" key={item.id}>
            <span className="categories__name">{item.name}</span>
            <Link to="" onClick={(e) => 
              {e.preventDefault();
              navigate(`products/?categoryId=${item.id}`);}}>
              <img className="categories__image" src={item.image} alt="" />
            </Link>
            
          </div>
        ))}
      </div>
      )}
    </div>
  )
}

export default Categories