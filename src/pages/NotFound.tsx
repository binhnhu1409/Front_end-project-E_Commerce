import { Link } from "react-router-dom"

import "../SASS/pages/notfound.scss"

const NotFound = () => {
  return (
    <div className="notfound">
      <img className="notfound__img" src={require("../assets/img/error.png")} alt="" />
      <div className="notfound__msg">Maybe this page moved? Got deleted? <br />
      Is hiding out in quarantine? Never existed in the first place?
        <p>Let's go 
          <Link to={`/`} className="notfound__link"> HOME</Link> and try from there.
        </p>
      </div>
    </div>
  )
}

export default NotFound