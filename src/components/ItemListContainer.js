import { useNavigate } from 'react-router-dom'
import './styles/ItemListContainer.css'


export default function ItemListContainer({ categoria }) {
    const navigate = useNavigate()
    const { id, nombreCategoria, imagen } = categoria

    return (
        <>
            <div className="card tamano col-12 col-md-4">
                <img src={imagen} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{nombreCategoria}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={() => navigate(`/categoria/${id}`)} className="btn btn-primary">Ver Productos</button>
                </div>
            </div>
        </>
    )
}
