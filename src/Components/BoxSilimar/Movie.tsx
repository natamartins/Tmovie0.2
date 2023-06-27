import React from 'react'

import useFetch from '@/Hooks/useFetch'

import { REACT_URL } from '@/api/Urls'

import CardMovies from '@/Components/CardMovies/Movies'

const Movie = ({ id }: any) => {
    const { data } = useFetch(`/movie/${id}/similar?`)

    return (
        <div className='box-silimar'>
            {
                data && data?.map((movie: any) => (
                    <CardMovies movie={movie} key={movie.id} />
                ))
            }
        </div>
    )
}

export default Movie