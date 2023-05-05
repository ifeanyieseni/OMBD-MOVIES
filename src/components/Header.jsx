import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RiGooglePlayLine } from 'react-icons/ri'
import { useState } from 'react'
const Header = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const updateScroll = () => {
      setScroll(window.scrollY > 20)
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll)

    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <div
      className={`${
        scroll
          ? ' bg-[var(--oxford-blue-2)] shadow-md fixed top-0 left-0 w-full z-20'
          : ''
      } `}
    >
      <header className='py-4'>
        <nav class=' px-4'>
          <div class='flex justify-between items-center '>
            <Link to='/' class='flex items-center'>
              <RiGooglePlayLine size={20} color='yellow' />
              <span class='text-[1.1rem] tracking-wide font-medium dark:text-white '>
                MovieLand
              </span>
            </Link>

            <div className='text-[1rem]'>
              <Link
                to='/'
                className='hover:text-yellow-400 focus:text-yellow-300'
              >
                Home
              </Link>
              <Link
                to='/watchlist'
                className='ml-4 hover:text-yellow-400 focus:text-yellow-300'
              >
                WatchList
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
