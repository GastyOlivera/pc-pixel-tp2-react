import { useState } from 'react'
import Card from '../components/Card'

function Productos() {
  const listaProductos = [
    { id: 1, titulo: "Disco Externo", precio: 85000, desc: "Western Digital Elements Portable 1TB", img: "/assets/img/producto1.jpeg" },
    { id: 2, titulo: "PC Gamer", precio: 950000, desc: "Ryzen 7 - 32GB - RTX 5060 - 1TB", img: "/assets/img/producto2.jpeg" },
    { id: 3, titulo: "Disco Duro", precio: 62000, desc: "Seagate SkyHawk 1TB", img: "/assets/img/producto3.jpeg" },
    { id: 4, titulo: "Placa Madre", precio: 110000, desc: "Asus Prime A520M", img: "/assets/img/producto4.jpeg" },
    { id: 5, titulo: "Monitor", precio: 320000, desc: "Gigabyte MO27Q28G 27 pulgadas", img: "/assets/img/producto5.jpeg" },
    { id: 6, titulo: "Fuente Sentey", precio: 75000, desc: "Sentey EPP500-GT 500W 80+ Bronze", img: "/assets/img/producto6.jpeg" },
    { id: 7, titulo: "Silla Gamer", precio: 210000, desc: "X-Micro XM-B98WH Ergonómica", img: "/assets/img/producto7.jpeg" },
    { id: 8, titulo: "Teclado Mecánico", precio: 68000, desc: "Redragon Eisa Max K686SP RGB", img: "/assets/img/producto8.jpeg" },
    { id: 9, titulo: "Palanca de Cambios", precio: 95000, desc: "Logitech Driving Force Shifter", img: "/assets/img/producto9.jpeg" },
    { id: 10, titulo: "Placa de Video", precio: 580000, desc: "RTX 5060Ti 8GB RGB", img: "/assets/img/producto10.jpeg" }
  ]

  const [carrito, setCarrito] = useState({})

  const agregarAlCarrito = (prod) => {
    setCarrito((prev) => {
      const existe = prev[prod.id]
      return {
        ...prev,
        [prod.id]: {
          id: prod.id,
          title: prod.titulo,
          precio: prod.precio,
          cantidad: existe ? existe.cantidad + 1 : 1
        }
      }
    })
  }

  const sumarCantidad = (id) => {
    setCarrito((prev) => ({
      ...prev,
      [id]: { ...prev[id], cantidad: prev[id].cantidad + 1 }
    }))
  }

  const restarCantidad = (id) => {
    setCarrito((prev) => {
      const copia = { ...prev }
      copia[id].cantidad -= 1
      if (copia[id].cantidad === 0) {
        delete copia[id]
      }
      return copia
    })
  }

  const vaciarCarrito = () => {
    setCarrito({})
  }

  const itemsCarrito = Object.values(carrito)
  const totalCantidad = itemsCarrito.reduce((acc, item) => acc + item.cantidad, 0)
  const totalPrecio = itemsCarrito.reduce((acc, item) => acc + item.cantidad * item.precio, 0)

  return (
    <main style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
      <h1 className="pagina-titulo" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        CARRITO DE COMPRAS
      </h1>
      
      {/* Tabla del carrito */}
      <div 
        style={{ 
          backgroundColor: 'var(--navy-light)', 
          borderRadius: '10px', 
          padding: '1.5rem', 
          marginBottom: '3rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4)' 
        }}
      >
        <table className="table table-dark table-hover align-middle mb-0" style={{ backgroundColor: 'transparent' }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Acción</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {itemsCarrito.length === 0 ? (
              <tr>
                <th scope="row" colSpan="5" className="text-center py-3 text-warning">
                  Carrito vacío - ¡comience a comprar!
                </th>
              </tr>
            ) : (
              itemsCarrito.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.cantidad}</td>
                  <td>
                    <button 
                      onClick={() => sumarCantidad(item.id)} 
                      className="btn btn-sm me-2"
                      style={{ backgroundColor: 'var(--mint)', color: '#000', fontWeight: 'bold' }}
                    >
                      +
                    </button>
                    <button 
                      onClick={() => restarCantidad(item.id)} 
                      className="btn btn-danger btn-sm"
                    >
                      -
                    </button>
                  </td>
                  <td>${item.cantidad * item.precio}</td>
                </tr>
              ))
            )}
          </tbody>
          {itemsCarrito.length > 0 && (
            <tfoot>
              <tr>
                <th scope="row" colSpan="2">Total productos</th>
                <td>{totalCantidad}</td>
                <td>
                  <button onClick={vaciarCarrito} className="btn btn-outline-danger btn-sm">
                    Vaciar todo
                  </button>
                </td>
                <td className="fw-bold" style={{ color: 'var(--amber)', fontSize: '1.1rem' }}>
                  ${totalPrecio}
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>

      <h1 className="pagina-titulo" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        NUESTROS PRODUCTOS
      </h1>
      
      {/* Grid idéntico a tu original */}
      <div 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center'
        }}
      >
        {listaProductos.map((prod) => (
          <Card
            key={prod.id}
            titulo={prod.titulo}
            precio={prod.precio}
            descripcion={prod.desc}
            imagen={prod.img}
            onComprar={() => agregarAlCarrito(prod)}
          />
        ))}
      </div>
    </main>
  )
}

export default Productos