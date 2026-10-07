function Footer() {
    return (
        <footer>
          <ul className="footer-nav">
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/galeria">Galería</a></li>
            <li><a href="/contacto">Contacto</a></li>
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