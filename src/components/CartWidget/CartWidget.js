import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css';

export const CartWidget = () => {
  const {cartQuantity, cart} = useContext(CartContext)
  return (
    <Link to='/cart' className={`${cart.length === 0 ? 'hide-cart' : ''}`}>
      <i className="bi bi-cart-fill"></i>
      <span>{cartQuantity()}</span>
    </Link>
  )
}
