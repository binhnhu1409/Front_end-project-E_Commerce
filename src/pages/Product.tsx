import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";

import { fetchAllProducts } from "../redux/reducers/productReducer";
import "../SASS/pages/product.scss";

const Product = () => {
  const products = useAppSelector((state) => state.productReducer)
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  if (!product) {
    return <Loading />
  } 

  return (
    <>
      <section className='product'>
        <aside className='product__item'>       
          <img className='product__img' src={product.images[0]} alt="" />
        </aside>
        <article className='product__item'>
          <h2 className='product__title'>{product.title}</h2>
          <h2>${product.price}</h2>
          <p><strong>Category:</strong> {product.category.name}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </article>
      </section>
    </>
  )
}

export default Product