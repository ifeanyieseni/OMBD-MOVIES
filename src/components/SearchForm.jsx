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
      <div className='sm:w-[85vw] max-w-[40rem] py-8 shadow-1 px-6 mx-auto bg-grad text-center rounded-2xl'>
        <div className='flex items-center justify-center mb-4 gap-x-4'>
          <div className=''>
            <label htmlFor='year-filter' className='pr-1'>
              Year:
            </label>
            <input
              type='text'
              className='text-lg text-gray-300 border-none bg-input focus:outline-none'
              id='year-filter'
              value={yearFilter}
              onChange={handleYearFilterChange}
            />
          </div>
          <div>
            <label htmlFor='type-filter' className='pr-1'>
              Type:
            </label>
            <select
              className='text-sm text-gray-300 border-none bg-input focus:outline-none'
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
        <div className='flex items-center justify-center rounded-xl bg-input'>
          <input
            type='text'
            className='w-full p-2 text-lg text-gray-300 bg-transparent border-none focus:outline-none'
            placeholder='Search Movie...'
            ref={searchValue}
          />

          <button
            className='tracking-[2px] flex items-center gap-[10px] uppercase  bg-accent text-input font-semibold rounded-r-xl px-2 py-2.5'
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
