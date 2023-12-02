import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import cartImage from "./assests/Cart.jpg";
import "./assests/Cart.css";

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCartClick = () => {
        if (cart.length > 0) {
            navigate('/checkout');
        }
    };

    const totalUnidades = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="cart-widget" onClick={handleCartClick} style={{ cursor: cart.length > 0 ? 'pointer' : 'default' }}>
            <img src={cartImage} alt="Carrito" style={{ width: "30px" }} />
            <span>{totalUnidades}</span>
        </div>
    );
}

export default CartWidget;
