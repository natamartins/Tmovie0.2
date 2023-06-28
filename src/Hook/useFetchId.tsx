import axios from "axios";
import { useEffect, useState } from "react";

import { REACT_API_KEY, REACT_KEY, REACT_URL } from "@/api/Urls";

const useFetchId = (url: any) => {
    const [movieId, setMovie] = useState({})
    const [isLoading, setLoading] = useState(false)

    const fetcId = async () => {
        try {
            const { data } = await axios.get(`${REACT_URL}` + url + REACT_API_KEY)
                .finally(() => {
                    setLoading(false)
                })

            setMovie(data)
        } catch (err) {
            console.log("Ops! deu ruim", err)
        }
    }


    useEffect(() => {
        window.scrollTo(0, 0)
        fetcId()
        // eslint-disable-line react-hooks/exhaustive-deps 
    }, [])

    return {
        movieId,
        isLoading
    }
}

export default useFetchId