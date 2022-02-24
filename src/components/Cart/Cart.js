import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"

export const Cart = () => {
    const {cart, total, emptyCart, deleteItem} = useContext(CartContext);

    // Validate if cart is empty
    if (cart.length === 0) {
        return (
            <div className="container">
                <h2>El carrito está vacío</h2>
                <Link to='/' className='btn btn-info'>Regresar</Link>
            </div>
        )
    }

    return (
        <div className="container">
            <h2>Tú carrito</h2>
            <hr />
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio: ${item.quantity * item.price}</p>
                        <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>
                            <i className="bi bi-trash-fill"></i>
                        </button>
                    </div>
                ))
            }
            <hr />
            <h2>Total: ${total()}</h2>
            <div className="my-2">
                <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
                <button className="btn btn-success mx-2">Pagar</button>
            </div>
        </div>
    )
}