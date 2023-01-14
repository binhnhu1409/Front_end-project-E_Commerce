import '../SASS/component/home.scss'
import ShopButton from '../components/ShopButton'

const Home = () => {
  return (
    <div className="home">
      <div>
        <div className="home__container">
          <h1 className="home__slogan"> Get 5% Cash Back On Your Purchase</h1>
          <p className="home__context">This is just a E-commerce website mockup from Nhu though... But shopping is sometimes troubling for my bank balance lol</p>
          <ShopButton />
        </div>
        <img className="home__img" src={require("../assets/img/home-img.jpg")} alt="" />
      </div>
        
    </div>
  )
}

export default Home