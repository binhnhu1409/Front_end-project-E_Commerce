const Register = () => {
  return (
    <div>
      <div className="login">
        <div className="login__window">
          <div className="login__form">
            <div className="login__title">Hello there!</div>
            <div className="login__subtitle">By creating an account, you can access your cart and get cash back <br /> on your purchase.</div>
            <div className="input">
              <input type="email" placeholder="Email" className="input__line"></input>
              <input type="password" placeholder="Password" className="input__line"></input>
              <input type="confirmedPassword" placeholder="Confirm password" className="input__line"></input>
            </div>
            <div><button className="register__Btn">Register</button></div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Register