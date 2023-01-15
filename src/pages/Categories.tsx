import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"

import { fetchAllCategories } from "../redux/reducers/categoryReducer"
import "../SASS/component/categories.scss"

const Categories = () => {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(state => state.categoryReducer)
  console.log ("categories", categories)
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
          <div className="categories__card">
            <span className="categories__name">{item.name}</span>
            <img className="categories__image" src={item.image} alt="" />
          </div>
        ))}
      </div>
      )}
    </div>
  )
}

export default Categories