import { Link, useNavigate } from "react-router-dom"
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

import "../SASS/pages/loginAndRegister.scss"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { useEffect, useState } from "react";
import { userAuthenticate } from "../redux/reducers/authenticationReducer";
import { fetchAllUsers } from "../redux/reducers/userReducer";

const Login = () => {
  const authentication = useAppSelector((state) => state.authenticationReducer)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const enableShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userAuthenticate ({
      email: email,
      password: password,
    })
    );
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (authentication.isLogin && !authentication.error)
      navigate ("/profile")
  }, [authentication.isLogin, authentication.error, navigate])
  

  return (
    <div>
      <div className="login">
        <div className="login__window">
          <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
            <div className="login__title">Welcome back!</div>
            <div className="login__subtitle">Please login to use our services.</div>
            <div className="input">
              <input type="email" 
                placeholder="Email" 
                className="input__line" 
                value={email} 
                onChange={({ target }) => setEmail(target.value)}></input>
              <button className="input__icon">
                <AiOutlineEyeInvisible/>
                <AiOutlineEye/>
              </button>
              <input type="password" 
                placeholder="Password" 
                className="input__line"
                value={password} 
                onChange={({ target }) => setPassword(target.value)}></input>
            </div>
            <div className="register">New customer?
              <Link to="/register"><span className="register__highlight"> Register here</span></Link>
            </div>
            <div><button className="login__Btn" type="submit">Login</button></div>
          </form>
      </div>
      </div>
    </div>
  )
}

export default Login
