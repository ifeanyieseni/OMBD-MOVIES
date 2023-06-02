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
  const [favourites, setFavourites] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  // useEffect(() => {
  //   const movieFavourites = JSON.parse(
  //     localStorage.getItem('react-movie-app-favourites')
  //   )
  //   setFavourites(movieFavourites)
  // }, [])
  // const getLocalStorage = (items) => {
  //   localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  // }
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'))
    if (storedFavorites) {
      setFavourites(storedFavorites)
    }
  }, [])

  const addFavouriteMovie = (item) => {
    if (favourites.includes(item)) {
      alert('Movie already exists')
      return
    }

    const updatedFavourites = [...favourites, item]
    setFavourites(updatedFavourites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavourites))
  }
  const removeFavouriteMovie = (item) => {
    const updatedFavorites = favourites.filter((f) => f.id !== item.id)
    setFavourites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }
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
        addFavouriteMovie,
        removeFavouriteMovie,
        favourites,
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
