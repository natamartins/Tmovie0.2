import { REACT_IMG_PATH } from '@/api/Urls'
import { StarIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface ItemsType {
    movie: {
        id: number,
        title: string,
        overview: string,
        backdrop_path: string,
        release_date: string,
        vote_average: number,
    }
}

const Carrosel = ({ movie }: ItemsType) => {
    return (
        <Link
            style={{ textDecoration: "none", color: "black" }}
            href={`/SoloSerie/${movie.id}`}
        >
            <div className='carrossel_movie-img'>
                <img src={`${REACT_IMG_PATH}${movie.backdrop_path}`} alt="" />
            </div>
            <div className='carrossel_movie-overlay'>
                <h1>{movie.title}</h1>
                <div className='carrossel_movie-runtime'>
                    <p><StarIcon />{movie.vote_average}</p>
                    <p>{movie.release_date}</p>
                </div>
                <p>{movie.overview}</p>
            </div>
        </Link>
    )
}

export default Carrosel