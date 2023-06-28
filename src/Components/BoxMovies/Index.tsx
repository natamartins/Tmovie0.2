import React from 'react'
import useFetch from '@/Hook/useFetch'

import CardMovies from '../CardMovies/Movies'

const Index = () => {
    const { data }: any = useFetch('/movie/upcoming?')

    return (
        <div className='container-movies'>
            {
                data?.map((movies: any) => (
                    <CardMovies key={movies.id} movie={movies} />
                ))
            }
        </div>
    )
}

export default Index