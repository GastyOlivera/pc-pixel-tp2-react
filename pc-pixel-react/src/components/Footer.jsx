
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <ul className="footer-nav">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/galeria">Galería</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
            <div className="footer-social">
                <p>Seguinos en nuestras Redes Sociales</p>
                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
            </div>
        </footer>
    )
}
export default Footer