import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProducts } from "../../helpers/getProducts";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);
  const {itemID} = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        setItem(res.find((el) => el.id === Number(itemID)));
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  return (
    <div className="container my-5">
      {loading ? <h2>Loading</h2> : <ItemDetail {...item} />}
    </div>
  )
}