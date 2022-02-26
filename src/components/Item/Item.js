import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({id, name, description, price, thumb, category}) => {
  return (
    <div className='col'>
      <div className="card custom-width">
        <img src={thumb} className="card-img-top" alt='product image' />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Categoría: {category}</p>
          <p className="card-text">Precio ${price}</p>
          <Link to={`/detail/${id}`}>
            <button className="btn btn-primary">Ver más</button>
          </Link>
        </div>
      </div>
    </div>
  )
}