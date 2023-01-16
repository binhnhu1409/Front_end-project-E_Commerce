import { AiOutlineArrowLeft } from "react-icons/ai"
import { useAppSelector } from "../hooks/reduxHook"

const Cart = () => {
  const cart = useAppSelector(state => state.cartReducer)

  return (
    <div>
      <div className="back">
        <AiOutlineArrowLeft/>
        <span className="back__context">Continue Shopping</span>
      </div>
      <hr />
      <h4 className="">Shopping cart</h4>
      <div className="">
        <span>You have {cart.length} items in your cart</span>
      </div>
    </div>
  )
}

export default Cart