import { useLoaderData } from 'react-router'
import { obtenerItem } from '../assets/infor'
import Categoria from './Categoria'
import Contador from './Contador'
import './styles/ItemListContainer.css'

export async function loader({params}) {

  const producto = await obtenerItem(params.id)
  console.log(producto.nombre)
  console.log(params)

  return producto
}

export default function ItemDetailContainer() {

  const producto = useLoaderData()
  const {nombre, descripcion, imagen} = producto

  return (
    <div className="container">
      <h1 className="text-center mt-4">Producto</h1>

      <div className="row my-5 gap-5 d-flex justify-content-center">
          <img src={imagen} className="img-thumbnail tamanoListContainer col-12 col-md-4" alt={nombre}/>
        <div className="col-md-4">
          <h3 className="text-center">{nombre}</h3>
          <p className="text-center mb-4">{descripcion}</p>
          <Contador/>
          <button className="btn btn-primary mt-3 mx-auto contador">Agregar al Carrito</button>
        </div>
      </div>

    </div>
  )
}
