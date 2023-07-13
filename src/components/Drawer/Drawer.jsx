import productImage from '@/assets/images/product.png'
import arrowIcon from '@/assets/images/icons/arrow.svg'
import removeIcon from '@/assets/images/icons/btn-remove.svg'
import emtyCartImage from '@/assets/images/empty-cart.jpg'

import { useContext } from 'react'
import AppContext from '../../context'

import './Drawer.scss'

const Drawer = ({ onClose, opened }) => {
  const { cart, onRemoveItem } = useContext(AppContext)

  const totatPrice = cart.reduce((sum, obj) => obj.price + sum, 0)

  return (
    <div className={`card-overlay ${opened ? 'card-overlay_open' : ''}`}>
      <div onClick={onClose} className='card-overlay__backdrop' />
      <div className='cart-sidebar__content'>
        <div className='cart-sidebar__title'>
          Корзина
          <img
            onClick={onClose}
            className='cu-p'
            src={removeIcon}
            alt='Close'
          />
        </div>
        {cart.length > 0 ? (
          <div className='cart-sidebar__body'>
            <div className='cart-sidebar__items'>
              {cart.map(product => {
                return (
                  <div
                    key={product.id}
                    className='cart-sidebar__item cart-item'
                  >
                    <div className='cart-item__image'>
                      <img src={product.image} alt='' />
                    </div>
                    <div className='cart-item__body'>
                      <div className='cart-item__name'>{product.name}</div>
                      <span className='cart-item__price'>
                        ${product.price},99
                      </span>
                    </div>
                    <div
                      onClick={() => onRemoveItem(product.id)}
                      className='cart-item__close'
                    >
                      <img src={removeIcon} alt='' />
                    </div>
                  </div>
                )
              })}
            </div>

            <div className='cart-sidebar__bottom cart-total'>
              <ul className='cart-total__content'>
                <li className='cart-total__item'>
                  <span>Итого:</span>
                  <b>${totatPrice}</b>
                </li>
              </ul>
              <button
                onClick={() => alert('GOOD')}
                className='cart-total__button'
              >
                Оформить заказ <img src={arrowIcon} alt='Arrow' />
              </button>
            </div>
          </div>
        ) : (
          <div className='cart-sidebar__cart-empty'>
            <img
              className='cart-sidebar__empty-image'
              src={emtyCartImage}
              alt='Empty'
            />
            <h2>Cart is empty</h2>
            <p>Add at least one pair of sneakers to place an order.</p>
            <button onClick={onClose} className='cart-sidebar__back-button'>
              <img src={arrowIcon} alt='Arrow' /> Back
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Drawer
