import { useState } from 'react'
import useTienda from '../hooks/useTienda'

export default function ItemDetailContainerFinal({info}) {

  const {agregarCarrito} = useTienda()
  const [cantidad, setCantidad] = useState(0)
  const {imagen, nombre, descripcion, id} = info
  // console.log(info)


  const handleSubmit = e => {
    e.preventDefault()
    
    if (cantidad < 1) {
      alert('Debes seleccionar una cantidad')
      return
    }

    const productoSeleccionado = {
      id,
      imagen,
      nombre,
      cantidad
    }
    agregarCarrito(productoSeleccionado)
  }

  return (
    <div className="container">
      <h1 className="text-center mt-4">Producto</h1>

      <div className="row my-5 gap-5 d-flex justify-content-center">
          <img src={imagen} className="img-thumbnail tamanoListContainer col-12 col-md-4" alt={nombre}/>
        <div className="col-md-4">
          <h3 className="text-center">{nombre}</h3>
          <p className="text-center mb-4">{descripcion}</p>

          <form onSubmit={handleSubmit}>
            <label>Cantidad</label>

            <select
              onChange={ e => setCantidad(parseInt(e.target.value)) }
              id="cantidad"
            >
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>

            </select>
            <input className="btn btn-primary mt-3 mx-auto contador"
              type="submit"
              value="Agregar al Carrito"
            />
          </form>

        </div>
      </div>

    </div>
  )
}
