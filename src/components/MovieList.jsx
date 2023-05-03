import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import { useGlobalContext } from '../context'
import Movie from './Movie'
const MovieList = () => {
  const { movies, loading } = useGlobalContext()

  // console.log(movies)
  if (loading) {
    return <Loading />
  }

  if (movies.length < 1) {
    return (
      <h2 className='text-center pt-[100px] text-gray-500 text-2xl'>
        Sorry no movies matched your search
      </h2>
    )
  }
  return (
    <section className='pt-10 mb-20'>
      <div className='container p-2 mx-auto'>
        <div className='grid justify-center gap-8 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5'>
          {movies.map((item, index) => {
            // console.log(item)
            return (
              <Link to={`/movie/${item.id}`} key={index}>
                <Movie {...item} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MovieList
