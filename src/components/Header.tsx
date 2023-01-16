import {Link} from "react-router-dom"
import { BsCart } from 'react-icons/bs';

import '../../src/SASS/components/header.scss'
import { useAppSelector } from "../hooks/reduxHook";

const Header = () => {
  const cart = useAppSelector(state => state.cartReducer)

  return (
    <header>
      <nav className="navbar">
        {/* logo on the left  */}
        <button className='navbar__homebutton'>
          <img className='navbar__logo' src={require("../assets/img/page-logo.png")} alt="shopping cart" />
          <Link className='navbar__name' to="/">NhuStore</Link>
        </button>
        {/* menu item in the middle */}
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link className="navbar__link" to="/">Home</Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/products">Deals</Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/categories">Categories</Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/login">Account</Link>
          </li>
        </ul>
        {/*cart on the right */}
        <button className="navbar__icon">
          <Link className="navbar__link" to="cart"><BsCart /></Link>
          <span className="navbar__cart">
            {cart.length}
          </span>
        </button>
      </nav>
    </header>
  )
}

export default Header