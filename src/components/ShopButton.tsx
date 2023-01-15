import { Link } from 'react-router-dom'

import '../SASS/components/button.scss'

const ShopButton = () => {
  return (
    <Link to="/products">
      <button className="normalBtn">Shop now</button>
    </Link>
  )
}

export default ShopButton