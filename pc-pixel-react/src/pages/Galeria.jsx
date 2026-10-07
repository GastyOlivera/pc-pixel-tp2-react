function Galeria() {
    const itemsGaleria = [
        {
            id: 1,
            img: "/assets/img/galeria/ArmadoMedida.jpg",
            alt: "PC gamer armada con luces RGB",
            categoria: "Armado de PC",
            titulo: "Armada a tu medida"
        },
        {
            id: 2,
            img: "/assets/img/galeria/Componentes.jpg",
            alt: "Componentes de Pc",
            categoria: "Componentes",
            titulo: "Procesadores"
        },
        {
            id: 3,
            img: "/assets/img/galeria/Memorias.jpg",
            alt: "Memorias RAM",
            categoria: "Componentes",
            titulo: "Memorias RAM"
        },
        {
            id: 4,
            img: "/assets/img/galeria/PlacasVideo.jpg",
            alt: "Placa de video en el mostrador",
            categoria: "Componentes",
            titulo: "Placa de video"
        },
        {
            id: 5,
            img: "/assets/img/galeria/Reparacion.jpg",
            alt: "PC gamer armada con luces RGB",
            categoria: "Reparación",
            titulo: "Reparación de PC"
        },
        {
            id: 6,
            img: "/assets/img/galeria/SetupGamer.jpg",
            alt: "Setup Gamer",
            categoria: "Sistema de Refrigeracion Liquida",
            titulo: "Refrigeración Líquida"
        },
        {
            id: 7,
            img: "/assets/img/galeria/Notebooks.jpg",
            alt: "Setup Gamer",
            categoria: "Notebook Gamer",
            titulo: "Acer"
        },
        {
            id: 8,
            img: "/assets/img/galeria/Soldaduras.jpg",
            alt: "Setup Gamer",
            categoria: "Soldadura de Placas",
            titulo: "Soldadura"
        }
    ]

    return (
        <main>
            <section className="galeria-header">
                <h1 className="pagina-titulo">PIEZAS, ARMADOS Y REPARACIONES</h1>
                <h2>Un vistazo a lo que entra y sale del talle,
                    Los componentes que vendemos, las PCs que armamos y los equipos que les devolvemos la vida.</h2>
            </section>
            <section className="galeria-grid">
                {itemsGaleria.map((item) => (
                    <section className="galeria-item" key={item.id}>
                        <img src={item.img} alt={item.alt} />
                        <div className="texto-imagen">
                            <p>{item.categoria}</p>
                            <h3>{item.titulo}</h3>
                        </div>
                    </section>
                ))}
            </section>
        </main>
    )
}

export default Galeria