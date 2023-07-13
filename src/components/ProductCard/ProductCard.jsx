import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AppContext from '../../context'
import cartIcon from '@/assets/images/icons/cart.svg'

const ProductCard = ({ product }) => {
  const { onAddToCart, onRemoveItem, isItemAdded } = useContext(AppContext)

  return (
    <div className='home__item product-card'>
      <div className='product-card__image'>
        <img src={product.image} alt='' />
      </div>
      <div className='product-card__body'>
        <NavLink to='/' className='product-card__name'>
          {product.name}
        </NavLink>
        <div className='product-card__price'>${product.price},99</div>
      </div>
      {isItemAdded(product.id) ? (
        <button
          onClick={() => onRemoveItem(product.id)}
          className='product-card__button product-card__button_remove button'
        >
          Remove
        </button>
      ) : (
        <button
          onClick={() => onAddToCart(product)}
          className='product-card__button button'
        >
          <img src={cartIcon} alt='add to cart' /> Add to Cart
        </button>
      )}
    </div>
  )
}

export default ProductCard
