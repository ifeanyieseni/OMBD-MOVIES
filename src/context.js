import React, { useState, useContext, useEffect } from 'react'
// import { useCallback } from 'react'
import axios from 'axios'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('guardians')
  const [yearFilter, setYearFilter] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    setLoading(true)

    try {
      const urlParams = new URLSearchParams({
        s: searchTerm,
        y: yearFilter,
        type: typeFilter,
        apiKey: '9ce884d7',
      })

      const url = `http://www.omdbapi.com/?${urlParams.toString()}`

      const response = await axios.get(url)

      // console.log(response.data.Search)

      if (response.data.Search) {
        const newMovies = response.data.Search.map((item) => {
          const { Title, Year, Poster, Type, imdbID } = item
          return {
            name: Title,
            image: Poster,
            type: Type,
            year: Year,
            id: imdbID,
          }
        })
        setMovies(newMovies)
      } else {
        setMovies([])
      }
      setLoading(false)
    } catch (error) {
      // console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [searchTerm, yearFilter, typeFilter])
  return (
    <AppContext.Provider
      value={{
        loading,
        movies,
        searchTerm,
        setSearchTerm,
        yearFilter,
        setYearFilter,
        typeFilter,
        setTypeFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
