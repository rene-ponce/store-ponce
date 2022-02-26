import { Link } from "react-router-dom"

export const OrderCompleted = ({order}) => {
  return (
    <div className="container">
      <h2>Compra generada</h2>
      <hr />
      <h3>Tu número de orden es: {order}</h3>
      <Link to='/' className='btn btn-primary'>Seguir comprando</Link>
    </div>
  )
}