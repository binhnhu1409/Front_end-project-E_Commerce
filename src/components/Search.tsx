import {FaSearch} from 'react-icons/fa'

import '../SASS/component/search.scss';

const Search = () => {
  return (
    <div className="search__container">
      <input className="search__input" type="text" placeholder="Search product..." autoFocus />
      <FaSearch className="search__icon"/>
    </div>
  )
}

export default Search