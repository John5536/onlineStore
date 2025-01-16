import GlobalContext from "../state/globalContext";
import "./styles/cart.css";

function Cart() {

    const cart = useContext(GlobalContext).cart;
    return(
        <div className = "cart page">
            <h1>Ready to complete your purchase?</h1>
            <h3>We have {cart.length}products waiting for you!</h3>

            <div className="list">
                <ul>
                    {cart.map(prod =>
                        <li className="cart-prad">
                            <img src="prod.image" alt="" />
                            <h6>{prod.title}</h6>
                            <label>#{prod.quantity}</label>
                            <label>${prod.price}</label>
                            <label>${(prod.price * prod.quantity).tofixed(2)}</label>
                            <button className='btn btn-sm btn-outline-danger'>remove</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Cart;