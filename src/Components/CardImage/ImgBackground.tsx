import React, { useEffect } from 'react'
import Image from 'next/image'
import { REACT_IMG_PATH } from '@/api/Urls'

const Img1200 = ({ img, name }: any) => {

    return <Image
        src={`${REACT_IMG_PATH}${img && img.backdrop_path}`}
        alt=''
        width={1200}
        height={750}
        priority={true}
    />
}

export default Img1200