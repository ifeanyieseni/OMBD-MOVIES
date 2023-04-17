import React from 'react'
import { useGlobalContext } from '../context'
import { RiSearchLine } from 'react-icons/ri'
const SearchForm = () => {
  const searchValue = React.useRef('')
  const { setSearchTerm } = useGlobalContext()

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])
  const searchMovie = () => {
    setSearchTerm(searchValue.current.value)
  }
  return (
    <div className='py-8'>
      <div className='w-[85vw] max-w-[40rem] py-16 px-8 mx-auto bg-grad text-center rounded-2xl'>
        <div className='flex items-center justify-center rounded-xl bg-input'>
          <input
            type='text'
            className='w-full p-2 text-lg text-gray-300 bg-transparent border-none focus:outline-none'
            placeholder='Search Movie...'
            ref={searchValue}
          />

          <button
            className='tracking-[2px] flex items-center gap-[10px] uppercase  bg-accent text-input font-semibold rounded-r-xl px-3 py-2.5'
            onClick={searchMovie}
          >
            <RiSearchLine size={20} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
