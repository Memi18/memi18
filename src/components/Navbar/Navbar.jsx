import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    
      <div className='Navbar'>
        <h1 className='WebTitle'>DebComics</h1>
          <NavLink to='/category/'>Inicio</NavLink>
          <NavLink to='/category/dc'>DC</NavLink>
          <NavLink to='/category/marvel'>Marvel</NavLink>
          <NavLink to='/category/manga'>Manga</NavLink>
          <CartWidget />
      </div>
      

  );
};

export default NavBar;
