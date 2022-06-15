//import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.js'

function App() {
  return <>
  <NavBar />
  <ItemListContainer mensaje="Sin stock. Mas celulares proximamente"/>
  </>
  }

export default App;
