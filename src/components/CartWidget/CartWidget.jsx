import cart from "./assests/Cart.png"


const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget " style={{ width: "20px" }} />
            0
        </div>
    )
}

export default CartWidget