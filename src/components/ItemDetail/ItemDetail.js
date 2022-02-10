export const ItemDetail = ({id, name, description, price, thumb, category}) => {
  return (
    <div className="row">
      <h3>{name}</h3>
      <div className="col-md-6">
        <img src={thumb} alt={name} />
      </div>
      <div className="col-md-6">
        <p>{description}</p>
        <h3>
          <p>Precio: ${price}</p>
        </h3>
        <div className="input-group">
          <span className="input-group-btn">
            <button type="button" className="btn btn-danger btn-number"  data-type="minus" data-field="quant[2]">
              <i class="bi bi-dash-lg"></i>
            </button>
          </span>
          <input type="text" name="quant[2]" className="form-control input-number" min="1" max="100" />
          <span class="input-group-btn">
            <button type="button" className="btn btn-success btn-number" data-type="plus" data-field="quant[2]">
              <i class="bi bi-plus-lg"></i>
            </button>
          </span>
        </div>
        <br />
        <button className="btn btn-success btn-lg">Agregar al carrito</button>
      </div>
    </div>
  )
}