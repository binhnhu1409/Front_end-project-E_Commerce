import { useAppSelector } from "../hooks/reduxHook"
import Loading from "../components/Loading"
import "../SASS/pages/profile.scss"

const Profile = () => {
  const user = useAppSelector( (state) => state.authenticationReducer)

  if (!user.userInfo) {
    return <Loading />
  } 

  return (
    <div className="profile">
      <span className="profile__role">{user.userInfo.role}</span>
      <img className="profile__img" src={user.userInfo.avatar} alt="user" />
      <h3>{user.userInfo.name}</h3>
      <p>{user.userInfo.email}</p>
      <button className="profile__logout">Logout</button>
      <button className="profile__edit">Edit</button>
    </div>
  )
}

export default Profile
