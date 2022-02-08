export const ItemDetail = ({id, name, description, price, thumb, category}) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={thumb} alt={name} />
      <p>{description}</p>
      <p>Precio ${price}</p>
    </div>
  )
}