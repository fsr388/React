
import './App.css'
import NavBar from './components/NavBar' 
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
   <div>
    <NavBar/>
    <ItemListContainer greeting='Bienvenido'/>

   </div>
  )
}

export default App