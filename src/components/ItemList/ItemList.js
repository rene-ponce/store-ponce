import { Item } from "../Item/Item"


export const ItemList = ({products}) => {
  return (
    <div className="container">
      <h2>Productos</h2>
      <hr />
      <div className="row">
        {products.map((item) => <Item key={item.id} {...item} />)}
      </div>
    </div>
  )
}