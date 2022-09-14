import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import Navbar from './components/Navlink/Navbar'
import { Link , BrowserRouter as Router , Navlink ,Route} from 'react-router-dom'
import Filmovi from './components/Navlink/Filmovi/Filmovi'
import Serije from './components/Navlink/Serije/Serije'
import axios from 'axios'
function App() {
  const [movieTitle, setMovieTitle] = useState('')
  const [film ,setFilm] = useState([])
  const getData = () => {
    axios.get(`https://imdb-api.com/en/API/Top250Movies/k_0at6z3bm`)
    .then((res) => setFilm(res.data.items))
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="App">
        <div className="navigacija">
          <h1>Movies and Series</h1>
        <div className='div-filmovi-serije'>
          <Link to="/filmovi" >Filmovi</Link>
          <Link to="/serije" >Serije</Link>
        </div>
        <input type="text"
        placeholder="Search..."
        onChange={(event) => setMovieTitle(event.target.value)} />
        {film.filter((val) => {
            if (film === ''){
                return '0'
            }else if(val.title.toLowerCase().includes(movieTitle.toLowerCase())){
                return val
            }
         }).map((el) => (
            <ul className='ul-class' style={{listStyle: 'none'}} key={el.id}>
            <li style={{color:"black", borderRadius:'15px'}}>{el.title}</li>
            </ul>
         )).slice(0 ,3)}
        
        </div>
    </div>
  );
}

export default App;
