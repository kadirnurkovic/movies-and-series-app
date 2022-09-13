import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navlink/Navbar'
import { Link , BrowserRouter as Router , Navlink ,Route} from 'react-router-dom'
import Filmovi from './components/Navlink/Filmovi/Filmovi'
import Serije from './components/Navlink/Serije/Serije'
import axios from 'axios'
function App() {
  return (
    <div className="App">
        <div className="navigacija">
          <h1>E bruda</h1>
        <Link to="/filmovi" >Filmovi</Link>
        <Link to="/serije" >Serije</Link>
        </div>
    </div>
  );
}

export default App;
