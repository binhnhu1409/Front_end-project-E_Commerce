import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { registerUser } from "../redux/reducers/userReducer";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const users = useAppSelector(state => state.userReducer)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("")
  const [avatar, setAvatar] = useState("");
  
  const checkEmail = (email: string) => {
    return users.some(user => user.email.toLowerCase() === email.toLowerCase())
  }
  
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registeredUser = {
      name,
      email,
      password,
      avatar,
    };
    const confirm = confirmedPassword
    if (password !== confirm) {
      window.alert("Confirmed password does not match")
    } else if (checkEmail(registeredUser.email)) {
      window.alert("This email is used already!")
    } else {
      dispatch(registerUser(registeredUser))
      window.alert("Register succesfully")
      navigate("/login")
    }
  };

  return (
    <div className="login">
      <div className="login__window">
        <form className="login__form" onSubmit={(e) => handleRegister(e)}>
          <div className="login__title">Hello there!</div>
          <div className="login__subtitle">By creating an account, you can access your cart and get cash back <br /> on your purchase.</div>
          <div className="input">
            <input type="name" 
              placeholder="Name" 
              className="input__line" 
              value={name} 
              onChange={({ target }) => setName(target.value)}></input>
            <input type="email" 
              placeholder="Email" 
              className="input__line" 
              value={email} 
              onChange={({ target }) => setEmail(target.value)}></input>
            <input type="password" 
              placeholder="Password" 
              className="input__line" 
              value={password} 
              onChange={({ target }) => setPassword(target.value)}></input>
            <input type="password" 
              placeholder="Confirm password" 
              className="input__line" 
              value={confirmedPassword} 
              onChange={({ target }) => setConfirmedPassword(target.value)}></input>
            <input type="avatar" 
              placeholder="Avatar link" 
              className="input__line" 
              value={avatar} 
              onChange={({ target }) => setAvatar(target.value)}></input>
          </div>
          <div><button className="register__Btn" type="submit">Register</button></div>
          <div className="register">Already have an account?
            <Link to="/login"><span className="register__highlight"> Login here</span></Link>
          </div>
        </form>
    </div>
    </div>
  )
}

export default Register