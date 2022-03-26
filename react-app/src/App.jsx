// import { Navbar } from 'react-bootstrap';
import NavBar from './components/navBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';
import ItemCount from './components/contador/ItemCount';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemCount />
    </div>
  );
}

export default App;
