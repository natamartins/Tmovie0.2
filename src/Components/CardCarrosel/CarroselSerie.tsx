import React from 'react'
import Link from 'next/link'
import { StarIcon } from 'lucide-react'

import Img from '@/Components/CardImage/ImgBackground'
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
                <Img img={movie} name={movie.title} />
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