import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, removeItem } = useContext(CartContext);

    const handleRemoveItem = (itemId) => {
        removeItem(itemId);
    };

    return (
        <div className="card">
            <h2>Tu carrito</h2>
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <p>{item.titulo}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Subtotal: {item.precio * item.quantity}</p>
                    <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                </div>
            ))}
            <p className="total">
                Total: {cart.reduce((total, item) => total + item.precio * item.quantity, 0)}
            </p>
        </div>
    );
};

export default Cart;
