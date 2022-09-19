import Searchbar from './components/Search/Search'
import './App.css';
import { useState, useEffect } from 'react'
import Navbar from './components/Navlink/Navbar'
import { Link , BrowserRouter as Router , Navlink ,Route} from 'react-router-dom'
import Filmovi from './components/Navlink/Filmovi/Filmovi'
import Serije from './components/Navlink/Serije/Serije'
import axios from 'axios'
import Footer from './components/Footer/Footer'

function App() {
  return (  
    <div className='container'>
        <div className='div-filmovi-serije'>
          <Link to="/filmovi" className='linkovi'>Filmovi</Link>
          <Link to="/serije" className='linkovi'>Serije</Link>
        </div>
        <div>
          <Searchbar />
        </div>
        <Footer />
    </div>
  );
}

export default App;
