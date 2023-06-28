import React from 'react'

import useFetch from '@/Hook/useFetch'

import { REACT_URL } from '@/api/Urls'

import CardMovies from '@/Components/CardMovies/Series'

const Serie = ({ id }: any) => {
    const { data } = useFetch(`/tv/${id}/similar?`)

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

export default Serie