import { Link, Navlink , Router as BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Navbar() {
    const [movie ,setMovie] = useState('');

    const getApi = () => {
        axios.get(`https://imdb-api.com/en/API/Search/k_12345678/inception 2010`)
        .then((res) => setMovie(res))
    } 
    useEffect(() => {
        getApi()
    },[])

    return( 
        <div>
            {movie.map((el) => (
                <div key={el.id}>
                <h1>{el.title}</h1>
                </div>
            ))}
        </div>
    )
}
