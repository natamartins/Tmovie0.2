import useFetch from '@/Hook/useFetch'
import React from 'react'
import CardMovies from '../CardMovies/CardRecomendation'

const Index = () => {
    const { data }: any = useFetch('/trending/all/day?')
    console.log("All ==>", data)
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