import React, { useEffect, useState } from 'react'
import axios from "axios"

const HomePage = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchData();
      },[])

    const fetchData = async () => {
        setLoading(true);
        axios({
          method: 'get',
          url: "https://restcountries.com/v2/all"
        })
        .then(res => { 
          setData(res.data);
          console.log(res.data)
          setLoading(false);
        })
        .catch(err => {
          setError(true);
          setLoading(false);
        })
      }

      console.log(data)

    return (
        <div>
          <div className='homeDiv'>
            <h1>HomePage</h1>
            <button className='logout'>Logout</button>
          </div>
              
          <div className='mainDiv'>
            {
              data.map((item) => {
                return <div className='homeChildDiv'>
                          <p>Name: {item.name}</p>
                          <p>Capital: {item.capital}</p>
                        </div>
              }) 
            }
          </div> 
        </div>
    )
}

export default HomePage
