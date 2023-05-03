import React from 'react'
import { useGlobalContext } from '../context'
import { RiSearchLine } from 'react-icons/ri'

const SearchForm = () => {
  const searchValue = React.useRef('')
  const {
    setSearchTerm,
    setYearFilter,
    setTypeFilter,
    yearFilter,
    typeFilter,
  } = useGlobalContext()

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])
  const searchMovie = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleYearFilterChange = (event) => {
    setYearFilter(event.target.value)
  }

  const handleTypeFilterChange = (event) => {
    setTypeFilter(event.target.value)
  }

  return (
    <div className='py-8'>
      <div className='sm:w-[85vw] max-w-[40rem] py-8 shadow-1 px-6 mx-auto  text-center rounded-2xl overflow-hidden '>
        <div className='flex items-center justify-center w-3/4 mx-auto mb-6'>
          <input
            type='text'
            className='w-full px-2 py-1 text-white focus:outline-0'
            placeholder='Search Movie...'
            ref={searchValue}
          />

          <button
            className='flex items-center justify-center px-2 py-1 bg-[var(--citrine)] text-gray-40 rounded-r-md'
            onClick={searchMovie}
          >
            <span>Search</span>
            <RiSearchLine size={20} />
          </button>
        </div>
        <div className='grid grid-cols-2 gap-5 mx-auto text-white sm:w-3/4'>
          <input
            type='text'
            className='px-2 py-1 focus:outline-0'
            id='year-filter'
            placeholder='Enter year...'
            value={yearFilter}
            onChange={handleYearFilterChange}
          />

          <select
            className='px-2 py-1 focus:outline-0 '
            id='type-filter'
            value={typeFilter}
            onChange={handleTypeFilterChange}
          >
            <option value=''>Any</option>
            <option value='movie'>Movie</option>
            <option value='series'>TV series</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
