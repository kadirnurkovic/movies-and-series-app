
import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
import './Filmovi.css'

export default function Filmovi() {
    const [movies, setMovies] = useState([])
    const getApi = () => {
        axios.get(`https://imdb-api.com/en/API/Top250Movies/k_0at6z3bm`)
        .then((res) => setMovies(res.data.items))
    }

    useEffect(() => {
        getApi()
    },[])
    return (
        <div>
         {movies.map((el) => (
            <ul className='list-decoration' style={{listStyleType:'none'}} key={el.id}>
            <li>{el.title} {el.imDbRating}</li>
            </ul>
         ))}
        </div>
    )
}