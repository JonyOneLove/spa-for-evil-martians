import './style.scss'

const SkeletonCard = () => {
  return (
    <div className='skeleton-card'>
      <div className='skeleton skeleton-card__image'></div>
      <div>
        <div className='skeleton skeleton-card__text'></div>
        <div className='skeleton skeleton-card__text'></div>
        <div className='skeleton skeleton-card__text'></div>
      </div>
    </div>
  )
}

export default SkeletonCard
