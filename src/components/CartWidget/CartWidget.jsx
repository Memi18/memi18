import cart from "./assests/Cart.jpg";
import "./assests/Cart.css"

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src={cart} alt="Cart" style={{ width: "30px" }} />
            <span>0</span>
        </div>
    );
}

export default CartWidget;