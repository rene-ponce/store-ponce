import { useEffect, useState } from 'react';
import { getProducts } from '../../helpers/getProducts';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    setLoading(true);

    getProducts().then((response) => {
      setProducts(response);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    });

  }, []);

  return (
    <>
      {loading ? <h2>Loading</h2> : <ItemList products={products} />}
    </>
  )
}