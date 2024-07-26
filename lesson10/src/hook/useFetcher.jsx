import axios from "axios"
import { useEffect, useState } from "react"

export const useFetcherHook = (url) => {
    const [loading, setIsloading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(url)
            .then((res) => { setData(res.data) })
            .catch((err) => setError(err.message))
            .finally(() => setIsloading(false))

    }, [url])
    return {
        loading,
        error,
        data
    }

}