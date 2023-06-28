"use client";
import React, { useState } from 'react'
import { REACT_IMG_PATH } from '@/api/Urls';

import YouTube from 'react-youtube'
import YouTubeMobile from '@u-wave/react-youtube'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import useFetchId from '@/Hook/useFetchId';
import { useFetchVideo } from '@/Hook/useFetchVideo';

import Similar from '@/Components/BoxSilimar/Movie'

import formatDate from '@/Utils/formatDate';
import formatTime from '@/Utils/formatTime';
import Img from '@/Components/CardImage/ImgBackground'
import ImgPost from '@/Components/CardImage/ImgPost'
import Image from 'next/image';

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
                <Img img={movieId} name={movieId.original_name} />
            </div>
            <div className='info-movie'>

                <div className='info-movie_cardImg'>
                    {
                        movieId
                            ?
                            <ImgPost img={movieId} name={movieId.original_name} />
                            :
                            <span />
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

            <div className='info-movie_similar'>
                <h2>Similar</h2>
                <Similar id={params.id} />
            </div>

            <div className='info-movie_center'>
                <div className='solo-info-company'>
                    <h1>Empresas Produtoras.</h1>
                    {
                        movieId.production_companies && movieId?.production_companies.map((item: any) => (
                            <div key={item.id}>
                                {
                                    item.logo_path ?
                                        <Image
                                            src={`${REACT_IMG_PATH}${item.logo_path}`}
                                            alt={item.id}
                                            layout="responsive"
                                            width={100}
                                            height={100}
                                            priority={false}
                                        />
                                        : ''
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default page