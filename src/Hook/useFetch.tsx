"use client";
import axios from "axios";
import { useEffect, useState } from "react"

import { REACT_API_KEY, REACT_URL } from "@/api/Urls";

export default function useFetch(url: string) {
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState(false)

    const fetchData = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`${REACT_URL}` + url + `${REACT_API_KEY}`)
                .finally(() => {
                    setLoading(false)
                })
            setData(data.results)
        } catch (error) {
            console.log(`Ops! deu ruim: ${error}`)
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        fetchData()

    }, [])

    return {
        data,
        isLoading,
    }
}