
import React, { useState } from 'react'
import axios from 'axios'
import './Serije.css'
import { Link } from 'react-router-dom'

export default function Serije() {
    const [series ,setSeries] = useState([]);

    const getApi = () => {
        axios.get(`https://imdb-api.com/en/API/Top250TVs/k_0at6z3bm`)
        .then((res) => setSeries(res.data.items))
    }

    useState(() => {
        getApi()
    },[])
    return (
        <div>
            <button><Link to='/'>Back to home</Link></button>
         {series.map((el) => (
            <ul key={el.id} className='list-decoration'>
            <li>{el.title} {el.imDbRating}</li>
            </ul>
            ))
         }
        </div>

    )
        }