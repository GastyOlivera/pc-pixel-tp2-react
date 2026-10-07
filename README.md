# PC Pixel - Trabajo Práctico Final (Opción A)
**Curso Inicial Front-End - UTN BA**

Este proyecto corresponde a la **Opción A** del Trabajo Práctico Final, que consiste en la migración del sitio web original maquetado en HTML y CSS (**PC Pixel**) desarrollado en los módulos anteriores hacia una aplicación moderna modularizada en **React.js**.

---

## 🛠️ Tecnologías y Herramientas
- **Vite** + **React.js**
- **React Router Dom** (Navegación SPA)
- **Bootstrap 5** & CSS Custom Properties
- **JavaScript (ES6+)** con Hooks (`useState`)

---

## 🚀 Migración y Características Implementadas
1. **Componentización:**
   - Modularización del sitio base en componentes reutilizables (`Navbar`, `Footer`, `Layout`, `Card`, `Gallery`).
   - Implementación de un `Layout` general con `<Outlet />` para estructurar las rutas fijas y dinámicas.
2. **Navegación:**
   - Enrutamiento con `React Router` para navegar entre las secciones Inicio, Productos, Galería y Contacto sin recargas de página.
3. **Formulario de Contacto Controlado:**
   - Gestión de estados de los inputs mediante `useState`.
   - Control de eventos (`preventDefault`, logs en consola de datos enviados y reseteo de campos).
4. **Interactividad Extra (Carrito de Compras):**
   - Integración de catálogo de productos en Cards dinámicas alimentadas por props.
   - Carrito interactivo con tabla resumen, suma de subtotales, modificación de cantidades (+ / -) y vaciado de carro.

--### Instalación y ejecución:
1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Ejecutar `npm run dev` para iniciar el servidor de desarrollo local.
