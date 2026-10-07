import { useState } from 'react'

function Contacto() {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [motivo, setMotivo] = useState("")
    const [mensaje, setMensaje] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Formulario enviado:")
        console.log({
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            email: email,
            motivo: motivo,
            mensaje: mensaje
        })
        alert("¡Mensaje enviado con éxito!")
    }

    const handleReset = () => {
        setNombre("")
        setApellido("")
        setTelefono("")
        setEmail("")
        setMotivo("")
        setMensaje("")
        console.log("Formulario reseteado")
    }

    return (
        <main>
            <h1 className="pagina-titulo">¡Contáctanos!</h1>
            <section className="contacto-info">
                <h2 className="pagina-subtitulo">
                    Si tenés alguna consulta, sugerencia o querés contactarnos, podés hacerlo a través del siguiente formulario:
                </h2>
            </section>
            <section className="contacto-formulario">
                <form onSubmit={handleSubmit} onReset={handleReset}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nombre"
                            required
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Apellido</label>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Apellido"
                            required
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Telefono</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="+54 11-1234567"
                            required
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mail">Email</label>
                        <input
                            type="email"
                            name="mail"
                            id="mail"
                            placeholder="tu@email.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reason">Motivo de Contacto</label>
                        <select
                            name="reason"
                            id="reason"
                            value={motivo}
                            onChange={(e) => setMotivo(e.target.value)}
                        >
                            <option value="" disabled>Selecciona una opcion</option>
                            <option value="Presupuesto">Consulta por Presupuesto</option>
                            <option value="Soporte">Soporte Técnico / Garantía</option>
                            <option value="Pedido">Estado de Mi Pedido</option>
                            <option value="Compra">Consulta de Stock / Compra</option>
                            <option value="trabajo">Trabaja con nosotros</option>
                            <option value="Otros">Otros</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Mensaje</label>
                        <textarea
                            name="comment"
                            id="comment"
                            placeholder="Contanos en que te podemos ayudar"
                            required
                            cols="30"
                            rows="5"
                            maxLength="200"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-primary">Enviar</button>
                    <button type="reset" className="btn-primary">Limpiar</button>
                </form>
            </section>
        </main>
    )
}

export default Contacto