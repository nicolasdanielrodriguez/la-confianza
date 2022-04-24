import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import './components/NavBar/NavBar.css'
import ListItemContainer from './components/ListItemContainer/ListItemContainer';
import Body from './components/botonComprar';
import ItemCount from './components/ItemCount';



function App() {

  function console (){
    console.log ("Su compra ha ingresado")
  }
  return (
    <div className="App">
     
      <NavBar/>
      <ListItemContainer texto='producto 1'/>
      <ListItemContainer texto='producto 2'/>
      <ListItemContainer/>
      <Body color='green'>Hola 2</Body>
      <Body color='red'>Hola 1</Body>
      <ItemCount stock='5' initial={1} onAdd={console}/>
      
    </div>
  );
}

export default App;
