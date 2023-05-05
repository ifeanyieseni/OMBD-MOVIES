import React from 'react'
import { Link } from 'react-router-dom'
// import Loading from '../components/Loading'
import { useGlobalContext } from '../context'
// import AddFavourites from './AddFavourite'
import RemoveFavourites from '../components/RemoveFavourites'

const WatchList = () => {
  const { favourites, removeFavouriteMovie } = useGlobalContext()
  // console.log(favourites)

  // if (favourites.length < 1) {
  //   return (
  //     <h2 className='text-center pt-[100px] text-gray-500 text-2xl'>
  //       Add Favourite Movie
  //     </h2>
  //   )
  // }

  return (
    <section className='px-8 pt-10 mb-20'>
      <div className=''>
        <div className='text-4xl font-bold leading-5 tracking-wide py-9 mb-7'>
          Favourites
        </div>
        <div className='flex flex-wrap items-center justify-center gap-4 md:justify-start'>
          {favourites.map((item, index) => {
            // console.log(item)
            return (
              <article
                key={index}
                className=' max-w-[40rem] w-[250px] md:w-[230px] lg:w-[200px] shadow-1 relative'
              >
                <Link to={`/movie/${item.id}`} key={index}>
                  <div class='relative'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='h-[350px] w-full object-cover mb-2 rounded-md '
                    />
                    <div class='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50'></div>
                  </div>
                </Link>

                <button
                  onClick={() => removeFavouriteMovie(item)}
                  className='absolute text-yellow-400 bg-black top-1 left-1 '
                >
                  <RemoveFavourites />
                </button>
              </article>
            )
          })}
        </div>

        {/* <div className='flex flex-wrap items-center justify-center gap-4'>
          {favourites.map((item, index) => {
            // console.log(item)
            return (
              <article key={index} className='w-[200px]'>
                <Link to={`/movie/${item.id}`} key={index}>
                  <img src={item.image} alt='' />
                </Link>
                <button onClick={() => removeFavouriteMovie(item)} className=''>
                  <RemoveFavourites />
                </button>
              </article>
            )
          })}
        </div> */}
      </div>
    </section>
  )
}

export default WatchList
