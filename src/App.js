import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import './components/NavBar/NavBar.css'
import ListItemContainer from './components/ListItemContainer/ListItemContainer';
import Body from './components/botonComprar';


function App() {
  return (
    <div className="App">
     
      <NavBar/>
      <ListItemContainer texto='producto 1'/>
      <ListItemContainer texto='producto 2'/>
      <ListItemContainer/>
      <Body color='green'>Hola 2</Body>
      <Body color='red'>Hola 1</Body>
    </div>
  );
}

export default App;
