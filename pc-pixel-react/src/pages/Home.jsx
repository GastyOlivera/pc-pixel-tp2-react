import { Link } from 'react-router-dom'

function Home() {
    return (
        <main>
          <section className="hero">
            <h1>Bienvenido a PC Pixel</h1>
            <p>Tu tienda de tecnología favorita</p>
            <Link className="btn-primary" to="/productos">Ver Nuestros Productos</Link>
          </section>
        </main>
    )
}
export default Home