import React from 'react'
// https://huemint.com/website-1/#palette=363738-f8fae8-d82e36 #fbc500
const Movie = ({ image, type, year, name }) => {
  return (
    <div className=' flex flex-col w-[200px] shadow-1 hover:shadow-2xl rounded-2xl cursor-pointer p-[10px] transition mx-auto '>
      <img src={image} className='' />
      <h2 className='mytext'>{name}</h2>
      <div className='flex justify-between text-gray-400 capitalize'>
        <span className='span'> {year}</span>
        <span className='p-[2px] bg-input'> {type}</span>
      </div>
    </div>
  )
}

export default Movie
