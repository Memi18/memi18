import { useState } from 'react';
import PropTypes from 'prop-types';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className='Button' onClick={increment}>+</button>
            </div>
            <div>
                {stock === 0 ? (
                    <p>Sin Stock</p>
                ) : (
                    <button className='Button' onClick={() => onAdd(quantity)}>
                        Agregar al carrito
                    </button>
                )}
            </div>
        </div>
    );
}

ItemCount.propTypes = {
    stock: PropTypes.number.isRequired,
    initial: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default ItemCount;
