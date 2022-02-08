import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">La Jaibita Sport</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/productos/playeras" className="nav-link active">Playera</Link>
            </li>
            <li className="nav-item">
              <Link to="/productos/tenis" className="nav-link active">Tenis</Link>
            </li>
            <li className="nav-item">
              <Link to="/productos/gorras" className="nav-link active">Gorras</Link>
            </li>
            <li className="nav-item">
              <Link to="/productos/short" className="nav-link active">Short</Link>
            </li>
          </ul>
          
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}