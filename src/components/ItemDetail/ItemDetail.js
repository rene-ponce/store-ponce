import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Counter } from "../Counter/Counter"

export const ItemDetail = ({id, name, description, price, thumb, category, stock}) => {

  const [quantity, setQuantity] = useState(0);
  const {existInCart, addToCart} = useContext(CartContext);

  const handleAddCart = () => {
    if (quantity === 0) {
      return;
    }

    if (!existInCart(id)) {
      const item = {
        id, name, price, stock, quantity
      }
      addToCart(item);
    }
  }

  return (
    <div className="row">
      <h3>{name}</h3>
      <div className="col-md-6">
        <img src={thumb} alt={name} />
      </div>
      <div className="col-md-6">
        <p>{description}</p>
        <h3>
          <p>Precio: ${price}</p>
        </h3>
        {
          existInCart(id)
          ? <Link to='/cart' className="btn btn-success my-3">Finalizar pedido</Link>
          :
            <>
              <Counter max={stock} counter={quantity} setCounter={setQuantity} />
              <br />
              <button type="button" className="btn btn-success btn-lg" onClick={handleAddCart}>Agregar al carrito</button>
            </>
        }
      </div>
    </div>
  )
}