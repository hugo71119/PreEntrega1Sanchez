import { useEffect, useState } from 'react'
import useTienda from '../hooks/useTienda'


export default function Carrito() {
  const [total, setTotal] = useState(0)
  const { carrito, actualizarProducto, eliminarProducto } = useTienda()
  useEffect(() => {
    const calcularTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0 )
    setTotal(calcularTotal)
  }, [carrito])
  console.log(carrito)

  return (
    <>
      <h1 className="text-center mt-3">CheckOut</h1>

      <div className="mt-5 container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 ">
            {carrito.length === 0 ? 'Carrito Vacío' : (
              carrito.map(producto => (
                <div key={producto.id} className="mb-3 text-center">
                  <img className="tamano" src={producto.imagen} />

                  <h3>{producto.nombre}</h3>
                  <p className="fw-bold fs-5">Precio: <span className="text-success fw-normal fs-4">{producto.precio}</span></p>
                  <p className="fw-bold fs-5">Subtotal: {producto.precio * producto.cantidad}</p>
                  <p className="fw-bold fs-5">Cantidad: </p>

                  <select className="form-select select" value={producto.cantidad} onChange={e => actualizarProducto({
                    cantidad: +e.target.value,
                    id: producto.id
                  })}>
                    <option value="0">-- Seleccione --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>

                  <button type="button" className="btn btn-danger mx-2" onClick={() => eliminarProducto(producto.id)}>X</button>


                </div>
              ))
            )}
          </div>

          <div className="col-12 col-md-6 espacio">
            <div className="shadow p-3 mb-5 bg-body rounded sube">
              <h1 className="fs-3 fw-bold text-center">Resumen del Pedido</h1>
              <p className="mt-5 fs-5">Total a pagar: <span className="fw-bold">${total} USD</span> </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
