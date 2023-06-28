"use client";
import React, { useState } from 'react'
import { REACT_IMG, REACT_IMG_PATH } from '@/api/Urls';

import YouTube from 'react-youtube'
import YouTubeMobile from '@u-wave/react-youtube'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import useFetchId from '@/Hooks/useFetchId';
import { useFetchVideo } from '@/Hooks/useFetchVideo';

import formatDate from '@/Utils/formatDate';
import formatTime from '@/Utils/formatTime';

import Similar from '@/Components/BoxSilimar/Serie'
import CardSeasons from '@/Components/CardSeasos/Index';

const opts = {
    height: '500',
    width: '950',
};

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const page = ({ params }: any) => {
    const { movieId }: any = useFetchId(`/tv/${params.id}?`)

    const { fetctVd, select, video }: any = useFetchVideo('tv')

    const date = formatDate(movieId.last_air_date)

    const [open, setOpen] = useState(false);
    const handleOpen = async () => {
        await fetctVd(params.id)
        setOpen(true)
    }
    const handleClose = () => setOpen(false);

    const playWeb = () => {
        const typeVideo = video ? video.key : ''

        return (
            <YouTube videoId={typeVideo} opts={opts} className={'play-web'} />
        )
    }

    const playMobile = () => {
        const typeVideo = video ? video.key : ''

        return (
            <YouTubeMobile video={typeVideo} width="350" height="300" />
        )
    }

    return (
        <div className='card_solo'>
            <div className='img-background'>
                <span className='background-botton'></span>
                <img className='solo-movie-img' src={`${REACT_IMG}${movieId.backdrop_path && movieId.backdrop_path}`} alt="" />
            </div>
            <div className='info-movie card_solo-infoserie'>
                <div className='info-movie_cardImg'>
                    {
                        movieId ? <img className='info-movie_img' src={`${REACT_IMG}${movieId.backdrop_path && movieId.poster_path && movieId.poster_path}`} alt="" /> : <span />
                    }
                </div>
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        <Box sx={style}>
                            <div className='playWeb'>
                                {select && playWeb()}
                            </div>
                            <div className='playMobile'>
                                {select && playMobile()}
                            </div>
                        </Box>
                    </Modal>
                </div>
                <div className='info-movie_cardInfo'>
                    <h1>{movieId.name}</h1>
                    <div>
                        <p>{date}</p>
                        <p>EP: {movieId.number_of_episodes}</p>
                    </div>
                    <div className='info-movie-g'>
                        {
                            movieId.genres && movieId.genres.map((g: any) => (
                                <button key={g.name} >{g.name}</button>
                            ))
                        }
                    </div>
                    <div>
                        <Button onClick={handleOpen}>Play</Button>
                    </div>
                    <p>Sinapose: {movieId.tagline}</p>
                    <p>{movieId.overview}</p>
                </div>
            </div>

            <div className='card_solo-seasons'>
                <h2>Temporadas</h2>
                <div className='card_solo-seasonsAll'>
                    {
                        movieId.seasons && movieId.seasons.map((seasons: any) => (
                            <CardSeasons seasons={seasons} key={seasons.id} />
                        ))
                    }
                </div>
            </div>

            <div className='card_solo-company'>
                <h2>Company</h2>
                {
                    movieId.production_companies && movieId.production_companies.map((company: any) => (
                        <div key={company.id}>
                            <img src={`${REACT_IMG_PATH}${company.logo_path && company.logo_path}`} alt="" />
                        </div>
                    ))
                }
            </div>

            <div className='card_solo-similar'>
                <h2>Similar</h2>
                <Similar id={params.id} />
            </div>
        </div>
    )
}

export default page