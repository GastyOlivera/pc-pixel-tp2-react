import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo"><i className="fa-solid fa-headset fa-shake"></i> PC Pixel</Link>
        <ul className="nav-links">
           <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/galeria">Galería</Link></li>
             <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default Navbar