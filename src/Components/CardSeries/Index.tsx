import React from 'react'
import Link from 'next/link'

import { StarIcon } from 'lucide-react'

import { REACT_IMG_PATH } from '@/api/Urls'



interface CardSeries {
    serie: {
        id: number,
        original_name: string,
        overview: string,
        poster_path: string,
        release_date: string,
        first_air_date: string,
        vote_average: number
    }
}
const CardSeries = ({ serie }: CardSeries) => {
    return (
        <Link style={{ textDecoration: "none", color: "white" }} href={`/SoloSerie/${serie.id}`}
        >
            <div className='AllMoviesCard card_allmovie'>
                {
                    serie.poster_path ? <img className='AllMoviesCard-img' src={`${REACT_IMG_PATH}${serie && serie.poster_path}`} alt="" />
                        :
                        <div className='Img-notfound'>
                            <h2>Imagem não disponivel!</h2>
                            <p>X</p>
                        </div>
                }
                <div className='AllMoviesCard-overlay'>
                    <h3>{serie && serie.original_name}</h3>
                    <div className='AllMoviesCard-rumTime'>
                        {serie && serie.release_date}
                        <div className='AllMoviesCard-rating'>
                            {serie && serie.vote_average}
                            <StarIcon />
                        </div>
                    </div>
                    <p>{serie ? serie.overview.slice(0, 118) + "..." : ""}</p>
                </div>
            </div>
        </Link>
    )
}

export default CardSeries