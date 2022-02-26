import { addDoc, collection, Timestamp, writeBatch, query, where, documentId, getDocs } from "firebase/firestore";
import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config";

export const Checkout = () => {

  const {cart, total, emptyCart} = useContext(CartContext);

  const [orderId, setOrderId] = useState();

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const createOrder = async () => {
    const order = {
      buyer: values,
      items: cart,
      total: total(),
      createdAt: Timestamp.fromDate(new Date())
    }

    const batch = writeBatch(db);
    const orderReferences = collection(db, 'orders');
    const productsReferences = collection(db, 'products')

    const q = query(productsReferences, where(documentId(), 'in', cart.map((el) => el.id)))

    const products = await getDocs(q);
    const outOfStock = [];

    products.docs.forEach((doc) => {
      const item = cart.find((el) => el.id === doc.id)
      if (doc.data().stock >= item.quantity) {
        batch.update(doc.ref, {
          stock: doc.data().stock - item.quantity
        })
      } else {
        outOfStock.push(item);
      }
    });

    if (outOfStock.length === 0) {
      addDoc(orderReferences, order)
        .then((doc) => {
          batch.commit();
          setOrderId(doc.id);
          emptyCart();
        });
    } else {
      alert("Hay productos sin stock");
    }
  }

  const handleInputChange = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createOrder()
  }

  if (orderId) {
    return (
      <>
        <h2>Compra generada</h2>
        <hr />
        <h3>Tu número de orden es: {orderId}</h3>
        <Link to='/' className='btn btn-primary'>Seguir comprando</Link>
      </>
    )
  }

  if (cart.length === 0) {
    return (
      <Navigate to='/' />
    )
  }

  return (
    <div className="container">
      <h2>Checkout</h2>
      <hr />
      <form onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    type='text'
                    placeholder="Tu nombre"
                    value={values.name}
                    onChange={handleInputChange}
                    name='name'
                />
                <input
                    className="form-control my-2"
                    type='email'
                    placeholder="Tu email"
                    value={values.email}
                    onChange={handleInputChange}
                    name='email'
                />
                <input
                    className="form-control my-2"
                    type='text s'
                    placeholder="Tu teléfono"
                    value={values.phone}
                    onChange={handleInputChange}
                    name='phone'
                />

                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
    </div>
  )
}