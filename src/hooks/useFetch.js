import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        
        const fetchData = async () => {
            
            setLoading(true)
            try {
                const fetchData = await axios.get(url)
                console.log(fetchData , "fetchData in useFetch");

                setData(fetchData.data)
                setLoading(false)
            }
            catch (error) {
                setError(error?.message)
                setLoading(false)
            }
        }
        fetchData()

    },[])

    const reFetchData = async () => {
        setLoading(true)
        try {
            const fetchData = await axios.get(url)
            setData(fetchData.data)
            setLoading(false)
        }
        catch (error) {
            setError(error?.message)
            setLoading(false)
        }
    }

    return { data , loading , error , reFetchData }

}

export default useFetch