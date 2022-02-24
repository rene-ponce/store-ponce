import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { getProducts } from '../../helpers/getProducts';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([false]);

  const {categoryID} = useParams();

  useEffect(() => {
    setLoading(true);

    // Firebase
    const productsReference = collection(db, 'products')
    const queryStr = categoryID ? query(productsReference, where("category", "==", categoryID)) : productsReference;
    getDocs(queryStr)
      .then(res => {
        setProducts(res.docs.map((doc) => {
          return {
            id: doc.id,
          ...doc.data()
          }
        }))
      })
      .finally(() => {
        setLoading(false);
      });

  }, [categoryID]);

  return (
    <>
      {loading ? <h2>Loading</h2> : <ItemList products={products} />}
    </>
  )
}