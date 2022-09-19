
import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
import './Filmovi.css'
import moviesjson from './movies.json'
import Pagination from '@mui/material/Pagination'
import { useNavigate , Link } from 'react-router-dom'
import { Card } from '@mui/material';
import Footer from "../../Footer/Footer"

export default function Filmovi() {
    const navigate = useNavigate()
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
    useEffect(() => {
        window.scrollTo(0 ,0)
    },[handleChange])
    return (
        <div>
        <div className='header'>
        <div><Link to='/' className='back-link'>Back to home</Link></div>
        <input type="text"
        placeholder="Search..."
        onChange={(event) => setSearchTerm(event.target.value)} />
            </div>   
        <div className="search-results">
         {movies.filter((val) => {
            if (searchTerm == ''){
                return val
            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
         }).map((el) => ( 
            <div className='list-decoration-movies'>
            <div className='content' onClick={() => {
                navigate(`${el.id}`,{
                    state: {
                        id: el.id,
                        description: el.description,
                        image: el.image,
                        title: el.title
                    }
                })
            }}>
                <div className='img-class'><img src={el.image}></img></div>
                <div>{el.title}</div>
                <div>{el.description}</div>
            </div>
            </div>
         )).slice(numberOfMoviesVistited , numberOfMoviesVistited + moviesPerPage)}
         </div>
         <div className='div-pagination'>
            <Pagination className="pagination-class" count={numPages} page={page} onChange={handleChange} />
        </div>
         <Footer />
        </div>
        
    )
}