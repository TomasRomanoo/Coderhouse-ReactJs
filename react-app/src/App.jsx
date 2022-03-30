// import { Navbar } from 'react-bootstrap';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/itemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      
    </div>
  );
}

export default App;
