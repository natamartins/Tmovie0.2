'use client'
import React from 'react'
import { Search } from 'lucide-react'

import useSearch from '@/Hook/useSearch'

import BoxCarossel from '@/Components/BoxCarrossel/IndexSerie'
import CardSeries from '@/Components/CardSeries/Index'

const page = () => {
    const { item, searchMovies, setSearch } = useSearch("/search/tv?", "/tv/top_rated?")

    return (
        <div className='container'>
            <BoxCarossel data={item} />

            <form onSubmit={searchMovies} >
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Buscar Filme..." />
                <button type={'submit'}><Search /></button>
            </form>

            <div className='box-movieAll'>
                {
                    item && item?.map((movies: any) => (
                        <CardSeries key={movies.id} serie={movies} />
                    ))
                }
            </div>
        </div>
    )
}

export default page