import React from 'react'
import Link from 'next/link'

import { StarIcon } from 'lucide-react'

import { REACT_IMG_PATH } from '@/api/Urls'


interface CardSeasons {
    seasons: {
        id: number,
        name: string,
        overview: string,
        poster_path: string,
        episode_count: number,
        air_date: string,
    }
}
const CardSeasons = ({ seasons }: CardSeasons) => {
    return (
        <Link style={{ textDecoration: "none", color: "white" }} href={`/SoloSerie/${seasons.id && seasons.id}`}
        >
            <div className='AllMoviesCard card_allmovie'>
                {
                    seasons.poster_path ? <img className='AllMoviesCard-img' src={`${REACT_IMG_PATH}${seasons && seasons.poster_path}`} alt="" />
                        :
                        <div className='Img-notfound'>
                            <h2>Imagem não disponivel!</h2>
                            <p>X</p>
                        </div>
                }
                <div className='AllMoviesCard-overlay'>
                    <h3>{seasons && seasons.name}</h3>
                    <p> {seasons && seasons.air_date}</p>
                    <p>{seasons ? seasons.overview.slice(0, 118) + "..." : ""}</p>
                </div>
            </div>
        </Link>
    )
}

export default CardSeasons