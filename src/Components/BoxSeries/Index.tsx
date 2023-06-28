import useFetch from '@/Hook/useFetch'
import React from 'react'
import CardMovies from '../CardMovies/Series'

const Index = () => {
    const { data }: any = useFetch('/tv/top_rated?')

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