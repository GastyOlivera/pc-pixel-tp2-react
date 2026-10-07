import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    console.log("cargando layout")
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout