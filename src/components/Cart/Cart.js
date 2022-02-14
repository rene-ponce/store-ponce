import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const Cart = () => {
    const {cart, total, emptyCart, deleteItem} = useContext(CartContext);

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