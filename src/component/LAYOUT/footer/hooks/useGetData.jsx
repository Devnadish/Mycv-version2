import React,{useState,useEffect} from 'react'

function useGetData(url) {
    const [data,setData]=useState([])
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(true)
    const [rowCount,setRowCount]=useState(true)

useEffect(() => {

    const fetchData=async ()=>{
        setLoading(true)
        try {
            const res= await fetch(url)
            const json =await res.json()
            
            
            
            // console.log({res})
            // console.log({json})
            // console.log()
            setData(json)
            setLoading(false)
            setRowCount(json.meta.pagination.total)

        } catch(error) {
            setError(error)
            setLoading(false)

        }
    }
fetchData()

}, [url])




  return  {loading,error,data,rowCount}
}

export default useGetData
