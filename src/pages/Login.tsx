import { Link } from "react-router-dom"
import "../SASS/pages/loginAndRegister.scss"

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="login__window">
          <div className="login__form">
            <div className="login__title">Welcome back!</div>
            <div className="login__subtitle">Please login to use our services.</div>
            <div className="input">
              <input type="email" placeholder="Email" className="input__line"></input>
              <input type="password" placeholder="Password" className="input__line"></input>
            </div>
            <div className="register">New customer?
              <Link to="/register"><span className="register__highlight"> Register here</span></Link>
            </div>
            <div><button className="login__Btn">Login</button></div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Login