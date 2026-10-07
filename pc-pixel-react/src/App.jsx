import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Galeria from './pages/Galeria'
import Contacto from './pages/Contacto'

// Importá todos tus estilos acá:
import './styles/styles.css'
import './styles/general.css'
import './styles/hero.css'
import './styles/productos.css'
import './styles/galeria.css'
import './styles/contacto.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App