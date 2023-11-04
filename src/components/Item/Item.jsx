import  { useState } from 'react';
import PropTypes from 'prop-types';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ comic }) => {
    const [mostrarDetalle, setMostrarDetalle] = useState(false);

    const toggleDetalle = () => {
        setMostrarDetalle(!mostrarDetalle);
    };

    return (
        <div className="comic-item">
            <img src={comic.imagen} alt={comic.titulo} />
            <h2>{comic.titulo}</h2>
            {mostrarDetalle ? (
                <div>
                    <p>{comic.resena}</p>
                    <ItemCount stock={comic.stock} initial={1} onAdd={console.log} /> {}
                </div>
            ) : (
                <p></p>
            )}
            <button onClick={toggleDetalle}>
                {mostrarDetalle ? "Ocultar detalle" : "Ver detalle"}
            </button>
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
