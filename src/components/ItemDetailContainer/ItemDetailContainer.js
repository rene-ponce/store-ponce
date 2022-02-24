import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { getProducts } from "../../helpers/getProducts";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);
  const {itemID} = useParams();

  useEffect(() => {
    setLoading(true);
    
    // Firebase
    const documentReference = doc(db, 'products', itemID);
    getDoc(documentReference)
      .then(doc => {
        setItem({id: doc.id, ...doc.data()});
      })
      .finally(() => {
        setLoading(false);
      })

    // getProducts()
    //   .then((res) => {
    //     setItem(res.find((el) => el.id === Number(itemID)));
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   })
  }, [])

  return (
    <div className="container my-5">
      {loading ? <h2>Loading</h2> : <ItemDetail {...item} />}
    </div>
  )
}