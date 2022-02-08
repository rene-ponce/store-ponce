import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../helpers/getProducts';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([false]);

  const {categoryID} = useParams();

  useEffect(() => {
    setLoading(true);
    
    getProducts().then((response) => {
      if (categoryID) {
        setProducts(response.filter((el) => el.category === categoryID));
      } else {
        setProducts(response);
      }
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    });

  }, [categoryID]);

  return (
    <>
      {loading ? <h2>Loading</h2> : <ItemList products={products} />}
    </>
  )
}