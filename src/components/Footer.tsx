import { Link } from "react-router-dom"
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail} from 'react-icons/ai';

import '../../src/SASS/component/footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="menu__container">
      <ul className="footer__list">
        <li className="footer__item">
          <Link className="footer__link"to="/">Home</Link>
          <span className="footer__dot footer__dot--active"></span>
        </li>
        <li className="footer__item">
          <Link className="footer__link"to="/">Deals</Link>
          <span className="footer__dot footer__dot--hidden"></span>
        </li>
      </ul>
      <p>Nhu &copy; 2022</p>
    </div>
    <div className="social__container">
      <ul className="social__list">
        <li className="social__item">
          <a className="social__link" href="https://github.com/binhnhu1409"><BsGithub /></a>
        </li>
        <li className="social__item">
          <a className="social__link" href="https://www.linkedin.com/in/nhu-nguyen1409/"><BsLinkedin /></a>
        </li>
        <li className="social__item">
          <a className="social__link" href="mailto:binhnhu1409@gmail.com"><AiOutlineMail /></a>
        </li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer