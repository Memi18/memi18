import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Item.css';


const Item = ({ comic }) => {
    const [mostrarDetalle, setMostrarDetalle] = useState(false);
    const { addItem } = useContext(CartContext);
    const navigate = useNavigate();

    const toggleDetalle = () => {
        setMostrarDetalle(!mostrarDetalle);
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className="comic-item">
            <img src={comic.imagen} alt={comic.titulo} />
            <h2>{comic.titulo}</h2>
            {mostrarDetalle ? (
                <div className="comic-details">
                    <p>{comic.resena}</p>
                    <ItemCount stock={comic.stock} initial={1} onAdd={(quantity) => addItem(comic, quantity)} />
                    <div className="button-container">
                        <button onClick={handleCheckout}>Ir a Checkout</button>
                        <button className="hide-button" onClick={toggleDetalle}>Ocultar detalle</button>
                    </div>
                </div>
            ) : (
                <button className="show-button" onClick={toggleDetalle}>Ver detalle</button>
            )}
        </div>
    );
};


Item.propTypes = {
    comic: PropTypes.shape({
        imagen: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        resena: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
    }).isRequired,
};

export default Item;
