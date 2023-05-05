import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import { BsFillBookmarkPlusFill } from 'react-icons/bs'
import { useGlobalContext } from '../context'
const SingleMovie = () => {
  const { addFavouriteMovie } = useGlobalContext()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState(null)

  const url = `https://www.omdbapi.com/?i=${id}&apikey=9ce884d7`
  React.useEffect(() => {
    setLoading(true)
    async function getMovie() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)

        if (data) {
          const {
            Title: name,
            Poster: image,
            Released: date,
            Genre: genre,
            Country: country,
            Plot: plot,
            Actors: stars,
            Director: director,
            Runtime: duration,
          } = data

          const newMovie = {
            name,
            image,
            date,
            genre,
            country,
            plot,
            stars,
            director,
            duration,
          }
          setMovie(newMovie)
          // console.log(newMovie)
        } else {
          setMovie(null)
        }
        setLoading(false)
      } catch (error) {
        console.log('error')
        setLoading(false)
      }
    }

    getMovie()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!movie) {
    return (
      <h2 className='text-center pt-[100px] text-gray-500 text-2xl'>
        No movies to display
      </h2>
    )
  }
  const {
    name,
    image,
    date,
    duration,

    stars,
    genre,
    country,
    plot,
    director,
  } = movie
  return (
    <>
      <div className='flex items-center justify-center w-full min-h-screen px-4 mb-5 md:mb-20'>
        <div className='w-full max-w-5xl flex flex-col md:flex-row space-y-6 p-8 text-white shadow-lg bg-[var(--oxford-blue-2)] rounded-xl'>
          <div className='flex flex-col space-y-8'>
            <div>
              <h1 className='text-2xl font-bold tracking-wide md:text-4xl'>
                {name}
              </h1>
              <p className='md:w-[90%] pt-2 text-sm  text-cyan-300/50'>
                {plot}
              </p>
            </div>
            <div className='flex flex-col space-y-6'>
              <div className='inline-flex items-center space-x-2'>
                <h3 className='text-lg text-teal-300 capitalize'>Genre:</h3>
                <span className='text-yellow-400'>{genre}</span>
              </div>
              <div className='inline-flex items-center space-x-2'>
                <h3 className='text-lg text-teal-300 capitalize'>released:</h3>
                <span className='text-teal-500'>{date}</span>
              </div>
              <div className='inline-flex items-center space-x-2'>
                <h3 className='text-lg text-teal-300 capitalize'>Stars:</h3>
                <span className='text-yellow-400'>{stars}</span>
              </div>
              <div className='inline-flex items-center space-x-2'>
                <h3 className='text-lg text-teal-300 capitalize'>Duration:</h3>
                <span className='text-teal-500'>{duration}</span>
              </div>
              <div className='inline-flex items-center space-x-2'>
                <h3 className='text-lg text-teal-300 capitalize'>director:</h3>
                <span className='text-yellow-400'>{director}</span>
              </div>
              <div className='inline-flex items-center space-x-2'>
                <h3 className='text-lg text-teal-300 capitalize'>country:</h3>
                <span className='text-yellow-400'>{country}</span>
              </div>
            </div>
          </div>

          <div className='flex flex-col p-2 space-y-4'>
            <div className='self-center w-64'>
              <img src={image} alt='' />
            </div>
            <button
              className='flex items-center justify-center py-2 text-white bg-yellow-700'
              onClick={() => addFavouriteMovie(movie)}
            >
              <BsFillBookmarkPlusFill />
              <span className='text-lg '>Bookmark</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleMovie
