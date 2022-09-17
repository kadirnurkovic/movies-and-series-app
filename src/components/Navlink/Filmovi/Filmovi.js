
import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
import './Filmovi.css'
import moviesjson from './movies.json'
import Pagination from '@mui/material/Pagination'

export default function Filmovi() {
    const [searchTerm, setSearchTerm] = useState('')
    const [movies, setMovies] = useState([])
    const [showed, setShowed] = useState([]);
    const numPages = Math.ceil(movies.length / 9);

    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
    setPage(value);
    };
    const moviesPerPage = 9;
    const numberOfMoviesVistited = (page - 1) * moviesPerPage;

    const getApi = () => {
        setMovies(moviesjson.results)
    }

    useEffect(() => {
        getApi()
    },[])
    return (
        <div>
        <div className='header'>
            </div>    
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
            <div className='list-decoration'>
            <div className='content'>
            <ul style={{listStyleType:'none'}} key={el.id}>
            <li>{el.title} {el.imDbRating}</li>
            </ul>
            </div>
            <div className='image'>
            <img src={el.image}></img>
            </div>
            </div>
         )).slice(numberOfMoviesVistited , numberOfMoviesVistited + moviesPerPage)}
         <div>
            <Pagination count={numPages} page={page} onChange={handleChange} />
        </div>
        </div>
        
    )
}