import { Link } from 'react-router-dom'

function Card({ titulo, precio, descripcion, imagen, onComprar }) {
  return (
    <article 
      className="card" 
      style={{
        backgroundColor: 'var(--navy-light)',
        borderRadius: '10px',
        overflow: 'hidden',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '220px',
        minWidth: '220px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
      }}
    >
      {/* Caja blanca superior idéntica a tu original */}
      <div 
        style={{
          backgroundColor: '#ffffff',
          height: '210px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px'
        }}
      >
        <img 
          src={imagen} 
          alt={titulo} 
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
            display: 'block'
          }} 
        />
      </div>

      {/* Cuerpo inferior violeta */}
      <div 
        style={{
          padding: '1rem 0.8rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between'
        }}
      >
        <div>
          <h3 
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.95rem',
              color: 'var(--cream)',
              marginBottom: '0.4rem',
              textTransform: 'uppercase'
            }}
          >
            {titulo}
          </h3>
          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              color: '#d1cfe2',
              marginBottom: '0.5rem',
              minHeight: '2.2rem'
            }}
          >
            {descripcion}
          </p>
          <p 
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--amber)',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              marginBottom: '0.8rem'
            }}
          >
            ${precio}
          </p>
        </div>

        {/* Botones de acción */}
        <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center' }}>
          <Link 
            to="/contacto" 
            style={{
              backgroundColor: 'var(--magenta)',
              color: 'var(--cream)',
              padding: '0.35rem 0.6rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)'
            }}
          >
            Ver más
          </Link>
          <button 
            onClick={onComprar}
            style={{
              backgroundColor: 'var(--magenta)',
              color: 'var(--cream)',
              border: 'none',
              padding: '0.35rem 0.6rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer'
            }}
          >
            Comprar
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card