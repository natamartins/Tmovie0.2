import React from 'react'
import { REACT_IMG_PATH } from '@/api/Urls'
import Link from 'next/link'
import { StarIcon } from 'lucide-react'

interface CardMovies {
    movie: {
        id: number,
        title: string,
        overview: string,
        poster_path: string,
        release_date: string,
        first_air_date: string,
        vote_average: number,
        media_type: string
    }
}
const CardMovies = ({ movie }: CardMovies) => {

    return (
        <Link style={{ textDecoration: "none", color: "white" }} href={`/SoloSerie/${movie.id}`}
        >
            <div className='AllMoviesCard card_allmovie'>
                {
                    movie.poster_path ? <img className='AllMoviesCard-img' src={`${REACT_IMG_PATH}${movie.poster_path && movie.poster_path}`} alt="" />
                        :
                        <div className='Img-notfound'>
                            <h2>Imagem não disponivel!</h2>
                            <p>X</p>
                        </div>
                }
                <div className='AllMoviesCard-overlay'>
                    <h3>{movie && movie.title}</h3>
                    <div className='AllMoviesCard-rumTime'>
                        {movie && movie.release_date}
                        <div className='AllMoviesCard-rating'>
                            {movie && movie.vote_average}
                            <StarIcon />
                        </div>
                    </div>
                    <p>{movie ? movie.overview.slice(0, 118) + "..." : ""}</p>
                </div>
            </div>
        </Link>
    )
}

export default CardMovies