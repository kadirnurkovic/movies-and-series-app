import React, { useEffect, useState } from 'react'
import './Search.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import movies from '../Navlink/Filmovi/movies.json'
import Pagination from '@mui/material/Pagination'

export default function FrontPage() {
    const [term, setTerm] = useState('')
    const [api, setApi] = useState([])
    const [showed, setShowed] = useState([]);
    const numPages = Math.ceil(showed.length / 9);

    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
    setPage(value);
  };
    const moviesPerPage = 9;
    const numberOfMoviesVistited = (page - 1) * moviesPerPage;

    const getApi = () => {
        setApi(movies.results);
      };

    useEffect(()=> {
        getApi();
    }, [term])


    return (
        <div className='container'>
         <div className='searchList'>
          <input type='text' placeholder='Search...' className='searchbar-class' onChange={(event) => {
                setTerm(event.target.value)
            }}/> 
            {api.filter((val) => {
                if(term == ''){
                    return val
                }else if(val.title.toLowerCase().includes(term.toLowerCase())){
                    return val
                }
            }).map((el) => (
                <div key={el.id} className="map-class">
                <img src={el.image}></img>
                <h1>{el.title}</h1>
                </div>
            )).slice(0 , 3)}
          </div>
        </div>
    )
}