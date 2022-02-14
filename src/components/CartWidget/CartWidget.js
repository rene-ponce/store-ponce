import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {
  const {cartQuantity} = useContext(CartContext)
  return (
    <Link to='/cart'>
      <i className="bi bi-cart-fill"></i>
      <span>{cartQuantity()}</span>
    </Link>
  )
}
