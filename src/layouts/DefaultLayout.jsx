import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import TheHeader from '../components/TheHeader/TheHeader'
import Drawer from '../components/Drawer/Drawer'

const DefaultLayout = () => {
  const [cartOpened, setCartOpened] = useState(false)

  const toggleCartOpen = value => {
    setCartOpened(value)
    if (value) {
      document.documentElement.classList.add('drawer-open')
    } else {
      document.documentElement.classList.remove('drawer-open')
    }
  }

  return (
    <div>
      <TheHeader onClickCart={() => toggleCartOpen(true)} />
      <Drawer onClose={() => toggleCartOpen(false)} opened={cartOpened} />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout
