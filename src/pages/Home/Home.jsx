import { useEffect, useContext } from 'react'

import AppContext from '@/context'
import ProductCard from '@/components/ProductCard/ProductCard'
import SkeletonCard from '@/components/ProductCard/SkeletonCard'
import Carousel from '@/components/Carousel/Carousel'

import './style.scss'

const Home = () => {
  const { products, isLoading } = useContext(AppContext)

  return (
    <div className='home'>
      <div className='home__container'>
        <div className='home__top'>
          <div className='home__slider-title'>Discover our icons</div>
          <Carousel />
        </div>
        <div className='home__content'>
          <div className='home__items'>
            {isLoading
              ? [...Array(8)].map((_, index) => {
                  return <SkeletonCard key={index} />
                })
              : products.map((product) => {
                  return <ProductCard product={product} key={product.id} />
                })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
