import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import AppContext from './context'
import { getProducts } from './services/ProductsService'
import { getCart, addToCart, deleteFromCart } from './services/CartService'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const [productsResponse, cartResponse] = await Promise.all([
        getProducts(),
        getCart(),
      ])

      setIsLoading(false)
      setProducts(productsResponse)
      setCart(cartResponse)
    }

    getData()
  }, [])

  const onAddToCart = async product => {
    if (!isItemAdded(product.id)) {
      setCart(prev => [...prev, product])
      addToCart(product)
    }
  }

  const onRemoveItem = id => {
    if (isItemAdded(id)) {
      deleteFromCart(id)
      setCart(prev => prev.filter(product => product.id !== id))
    }
  }

  const isItemAdded = id => {
    return cart.some(product => product.id === id)
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        products,
        cart,
        onAddToCart,
        onRemoveItem,
        isItemAdded,
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}

export default App
