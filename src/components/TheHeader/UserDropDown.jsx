import { useNavigate } from 'react-router-dom'
import './style.scss'

const UserDropDown = ({ isDropped }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    localStorage.removeItem('access_token')
    navigate('/login')
  }

  return (
    <ul className={`user-dropdown ${isDropped ? 'user-dropdown-open' : ''}`}>
      <li className='user-dropdown__item'>
        <a href='#'>My account</a>
      </li>
      <li className='user-dropdown__item'>
        <a href='#'>User settings</a>
      </li>
      <li className='divider'></li>
      <li className='user-dropdown__item'>
        <a onClick={() => handleClick()}>Sign out</a>
      </li>
    </ul>
  )
}

export default UserDropDown
