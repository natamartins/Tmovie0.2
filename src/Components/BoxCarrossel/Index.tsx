import React from 'react'

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import CardCarrosel from '@/Components/CardCarrosel/Carrosel'

const Index = ({ data }: any) => {

    return (
        <div className='box-carrossel'>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={2}
                infiniteLoop={true}
                showStatus={false}
            >
                {
                    data && data?.map((movies: any) => (
                        <CardCarrosel key={movies.id} movie={movies} />
                    )).slice(0, 7)
                }
            </Carousel>
        </div>
    )
}
export default Index