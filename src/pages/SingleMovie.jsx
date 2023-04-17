import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../components/Loading'

const SingleMovie = () => {
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
            imdbRating: rating,
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
            rating,
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
    rating,
    stars,
    genre,
    country,
    plot,
    director,
  } = movie
  return (
    <section className='container mx-auto text-center'>
      <Link
        to='/'
        className='px-3 py-3 text-teal-100 capitalize border-2 border-solid rounded border-accent hover:bg-accent hover:text-input'
      >
        back home
      </Link>

      <div className='w-[75vw] mx-auto mt-16 mb-20  bg-grad shadow-inner rounded-xl'>
        <h1 className='pt-8 pb-2 text-2xl font-semibold tracking-wide pl-7 text-start'>
          {name}
        </h1>
        <div className='flex flex-col items-center gap-5 px-8 py-5 mx-auto lg:items-start lg:flex-row lg-items-center lg:justify-between'>
          <img src={image} className='rounded-md h-96' alt='' />

          <div className='text-left cursor-pointer'>
            <p className='font-normal text-md'>{plot}</p>

            <p>
              Genre: <span className='span'>{genre} </span>
            </p>
            <p>
              Rating :<span className='span'>{rating} </span>
            </p>
            <p>
              Release:
              <span className='span'>{date}</span>
            </p>

            <p>
              Stars:
              <span className='span'>{stars} </span>
            </p>
            <p>
              Duration:
              <span className='span'>{duration} </span>
            </p>

            <p>
              Director:
              <span className='span'>{director}</span>
            </p>
            <p>
              Country:
              <span className='span'> {country} </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleMovie
