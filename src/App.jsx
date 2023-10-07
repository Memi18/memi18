import './App.css'
import NavBar from './components/NavBar/NavBar'
import Logo from './components/Logo/Logo'
import ItemListContainer from './components/ItemsListContainer/ItemListContainer'

function App() {


  return (
    <div className='App'>
      <NavBar />
      <Logo/>
      <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
  )
}

export default App