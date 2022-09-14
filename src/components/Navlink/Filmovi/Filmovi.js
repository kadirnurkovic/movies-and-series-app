
import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
import './Filmovi.css'

export default function Filmovi() {
    const [searchTerm, setSearchTerm] = useState('')
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
         <input type="text"
        placeholder="Search..."
        onChange={(event) => setSearchTerm(event.target.value)} />
         {movies.filter((val) => {
            if (searchTerm == ''){
                return val
            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
         }).map((el) => (
            <ul className='list-decoration' style={{listStyleType:'none'}} key={el.id}>
            <li>{el.title} {el.imDbRating}</li>
            </ul>
         ))}
        </div>
    )
}