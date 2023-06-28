import axios from "axios"
import { use, useEffect, useState } from "react"

import { REACT_API_KEY, REACT_KEY, REACT_URL } from "@/api/Urls"

const useFetchVideo = (url: string) => {
    const [video, setVideo] = useState({})
    const [select, setSelect] = useState({})
    const [keyOpen, setKeyOpen] = useState({})

    const fetctVd = async (id: any) => {
        try {
            const { data } = await axios.get(`${REACT_URL}/${url}/${id}?`, {
                params: {
                    api_key: REACT_KEY,
                    append_to_response: 'videos',
                }
            })

            setVideo(data.videos.results[0])
            setSelect(data.videos.results)
        } catch (err) {
            console.log("Ops! deu ruim", err)
        }
    }


    return {
        fetctVd,
        select,
        video
    }
}

export default useFetchVideo