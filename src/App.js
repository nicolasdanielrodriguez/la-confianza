import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import './components/NavBar/NavBar.css'
import ListItemContainer from './components/ItemListContainer';
import Body from './components/BuyButton'
import ItemCount from './components/ItemCount';
import Item from './components/Item/Item';
import ComplexGrid from './components/Item/Item';
import ListItem from './components/ListItem/ListItem';
import ItemListContainer from './components/ItemListContainer';





function App() {
  function onAdd (){
    console.log ("Su compra ha ingresado")
  }
  return (
    <div className="App">
      <NavBar/>
      <Body color='green'>Hola 2</Body>
      <Body color='red'>Hola 1</Body>
      <ItemCount stock='5' initial={1} onAdd= {onAdd}/>
      <ItemListContainer/>
     
    </div>
  );
}
export default App;


//<Item nombre='Agnolottis' id= '1' precio= '$190'/>