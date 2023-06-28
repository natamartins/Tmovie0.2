import React, { useEffect } from 'react'
import Image from 'next/image'
import { REACT_IMG_PATH } from '@/api/Urls'

const ImgBackground = ({ img, name }: any) => {

    return <Image
        src={`${REACT_IMG_PATH}${img.poster_path && img.poster_path}`}
        alt=''
        width={500}
        height={750}
        priority={false}
    />
}

export default ImgBackground