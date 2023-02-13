import { useNavigate } from 'react-router'

export default function CategoriaFinal({categoria}) {

    const navigate = useNavigate()
    const {imagen, nombre, id} = categoria

    return (
        <div className="card tamano col-12 col-md-4">

            <div>
                <img src={imagen} alt="imagen" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. :)</p>
                    <button onClick={() => navigate(`/producto/${id}`)} className="btn btn-primary">Ver Producto</button>
                </div>
            </div>
        </div>
    )
}
