import React from 'react'
const Movie = ({ image, type, year, name }) => {
  return (
    <div className='flex flex-col mx-auto transition cursor-pointer '>
      <figure className='relative aspect-[2/3] overflow-hidden transition rounded-md mb-3'>
        <img src={image} className='object-cover w-full h-full ' />
      </figure>
      <h2 className='mb-3 text-sm font-bold'>{name}</h2>

      <div className='flex items-center justify-between capitalize'>
        <span className='font-medium text-[var(--citrine)]'> {year}</span>
        <span className='text-[var(--light-gray)]'> {type}</span>
      </div>
    </div>
  )
}

export default Movie
