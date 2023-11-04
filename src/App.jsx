import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logo from './components/Logo/Logo';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Logo />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
