'use client'
import React from 'react'
import useFetch from '@/Hooks/useFetch'
import useSearch from '@/Hooks/useSearch'

import CardCarrosel from '@/Components/CardCarrosel/Carrosel'
import BoxCarossel from '@/Components/BoxCarrossel/Index'
import CardMovies from '@/Components/CardMovies/Movies'
import { Search } from 'lucide-react'

const page = () => {
    const { item, searchMovies, setSearch } = useSearch("/search/movie?", "/movie/upcoming?")

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
                        <CardMovies key={movies.id} movie={movies} />
                    ))
                }
            </div>
        </div>
    )
}

export default page