import axios from "axios"
import { useEffect, useState } from "react"

import { REACT_API_KEY, REACT_URL } from "@/api/Urls"

const useSearch = (urlSearch: string, url: string) => {
    const [item, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [isFetching, setIsFetching] = useState(true)

    const fetchMovies = async (search: string) => {
        try {
            const query = `${urlSearch}` + `query=${search}`
            const type = search ? query : url

            const { data } = await axios.get(`${REACT_URL}/${type}/${REACT_API_KEY}`)
                .finally(() => {
                    setIsFetching(false)
                })

            setMovies(data.results)
        } catch (err) {
            console.log("Ops! deu ruim", err)
        }
    }

    const searchMovies = (e: any) => {
        e.preventDefault()
        fetchMovies(search)
    }

    useEffect(() => {
        fetchMovies(search)
        // eslint-disable-line react-hooks/exhaustive-deps 
    }, [])

    return {
        item,
        searchMovies,
        setSearch,
        fetchMovies,
        isFetching
    }
}

export default useSearch