import React from 'react'
import { Link } from 'react-router-dom'
import { BiPlayCircle } from 'react-icons/bi'
const Header = () => {
  return (
    <header className='py-4 mb-8 '>
      <nav class='container mx-auto'>
        <div class='flex justify-center items-center'>
          <Link to='/' class='flex items-center'>
            <BiPlayCircle size={30} color='yellow' />
            <span class='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              MovieLand
            </span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
