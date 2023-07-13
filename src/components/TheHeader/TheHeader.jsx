import { useContext, useState } from 'react'
import logoIcon from '@/assets/images/icons/logo.svg'
import cartIcon from '@/assets/images/icons/cart.svg'
import userIcon from '@/assets/images/icons/user.svg'
import UserDropDown from './UserDropDown'

import './style.scss'
import AppContext from '../../context'

const TheHeader = ({ onClickCart }) => {
  const { cart } = useContext(AppContext)
  const [isDropped, setIsDropped] = useState(false)

  const totatPrice = cart.reduce((sum, obj) => obj.price + sum, 0)

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__content'>
          <a href='#' className='header__logo'>
            <img src={logoIcon} alt='logo' />
            <span>Hello!</span>
          </a>
          <div className='header__actions'>
            <div onClick={onClickCart} className='header__item'>
              <img src={cartIcon} alt='cart' />
              <span>${totatPrice}</span>
            </div>
            <div
              onClick={() => setIsDropped(!isDropped)}
              className='header__item'
            >
              <img src={userIcon} alt='user' />
              <UserDropDown isDropped={isDropped} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TheHeader
