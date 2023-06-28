"use client";
import React, { useState } from 'react'
import { REACT_IMG_PATH } from '@/api/Urls';

import YouTube from 'react-youtube'
import YouTubeMobile from '@u-wave/react-youtube'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import useFetchId from '@/Hook/useFetchId';
import { useFetchVideo } from '@/Hooks/useFetchVideo';

import Similar from '@/Components/BoxSilimar/Movie'

import formatDate from '@/Utils/formatDate';
import formatTime from '@/Utils/formatTime';

const opts = {
    height: '500',
    width: '950',
    // playerVars: {
    //     autoplay: 1,
    // },
};

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 940,

};

const page = ({ params }: any) => {
    const { movieId }: any = useFetchId(`/movie/${params.id}?`)
    const { fetctVd, select, video }: any = useFetchVideo('movie')

    const date = formatDate(movieId.release_date)
    const time = formatTime(movieId.runtime)

    const [open, setOpen] = useState(false);
    const handleOpen = async () => {
        await fetctVd(params.id)
        setOpen(true)
    }
    const handleClose = () => setOpen(false);

    const playWeb = () => {
        return (
            <YouTube videoId={video.key} opts={opts} className={'play-web'} />
        )
    }
    const playMobile = () => {
        return (
            <YouTubeMobile video={video.key} width="350" height="300" />
        )
    }

    return (
        <div className='card-solo'>
            <div className='img-background'>
                <span className='background-botton'></span>
                <img className='solo-movie-img' src={`${REACT_IMG_PATH}${movieId.backdrop_path}`} alt="" />
            </div>
            <div className='info-movie'>

                <div className='info-movie_cardImg'>
                    {
                        movieId ? <img className='info-movie_img' src={`${REACT_IMG_PATH}${movieId && movieId.poster_path}`} alt="" /> : <span />
                    }
                </div>

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

                <div className='info-movie_cardInfo'>
                    <h1>{movieId.title}</h1>
                    <div>
                        <p>{date}</p>
                        <p>{time}</p>
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

            <div className='info-movie_center'>
                <div className='solo-info-company'>
                    <h1>Empresas Produtoras.</h1>
                    {
                        movieId.production_companies && movieId?.production_companies.map((item: any) => (
                            <img className='' key={item.id} src={`${REACT_IMG_PATH}${item.logo_path}`} alt="" />
                        ))
                    }
                </div>
            </div>

            <Similar id={params.id} />
        </div>
    )
}

export default page