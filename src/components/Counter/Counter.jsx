export const Counter = ({max, min = 0, counter, setCounter}) => {
    const handleIncrement = () => {
        counter < max && setCounter(counter + 1);
    }

    const handleDecrement = () => {
        counter > min && setCounter(counter -1);
    }

    return (
        <div className="input-group">
          <span className="input-group-btn">
            <button type="button" className="btn btn-danger btn-number" onClick={handleDecrement}>
              <i className="bi bi-dash-lg"></i>
            </button>
          </span>
          <span className="mx-3">{counter}</span>
          <span className="input-group-btn">
            <button type="button" className="btn btn-success btn-number" onClick={handleIncrement}>
              <i className="bi bi-plus-lg"></i>
            </button>
          </span>
        </div>
    )
}