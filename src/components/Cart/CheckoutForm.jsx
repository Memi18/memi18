import  { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../main';
import { CartContext } from '../context/CartContext';
import Cart from './Cart';
import './Cart.css';


const CheckoutForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        celular: '',
        email: '',
    });
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const { cart } = useContext(CartContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.nombre || !formData.celular || !formData.email) {
            alert('Por favor, completa todos los campos del formulario.');
        } else {

            const orderData = {
                nombre: formData.nombre,
                celular: formData.celular,
                email: formData.email,
                items: cart, 
            };

            try {

                const docRef = await addDoc(collection(db, 'ordenes'), orderData);
                console.log('Orden de compra subida con ID: ', docRef.id);

                setConfirmationMessage('Finalizaste tu compra, nos estaremos contactando para la entrega. Muchas gracias. ');
                setShowConfirmation(true);
            } catch (error) {
                console.error('Error al subir la orden de compra: ', error);
                alert('Hubo un error al procesar su pedido. Por favor, inténtelo nuevamente.');
            }
        }
    };

    const handleAccept = () => {
        setShowConfirmation(false);
        navigate('/');
    };

    return (
        <div className="container">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Nombre:
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Celular:
                        <input type="text" name="celular" value={formData.celular} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Email:
                    </label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <button type="submit">Comprar</button>
            </form>
            <Cart />
            {showConfirmation && (
                <div className="confirmation">
                    <p>{confirmationMessage}</p>
                    <button onClick={handleAccept}>Aceptar</button>
                </div>
            )}
        </div>
    );
};

export default CheckoutForm;
