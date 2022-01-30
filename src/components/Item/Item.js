import './Item.css';

export const Item = ({id, name, description, price, thumb}) => {
  return (
    <div className='col'>
      <div className="card custom-width">
        <img src={thumb} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{price}</p>
          <button className="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}