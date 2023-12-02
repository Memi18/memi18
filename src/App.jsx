import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logo from './components/Logo/Logo';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import { CartProvider } from './components/context/CartContext';
import CheckoutForm from './components/Cart/CheckoutForm';
import NavBar from "./components/NavBar/navBar"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />  {}
        <Logo />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;