import useTienda from '../hooks/useTienda'


export default function Carrito() {
  const {carrito} = useTienda()
  console.log(carrito)
  return (
    <>
      <h1 className="text-center">CheckOut</h1>

      <div className="mt-5">
        {carrito.length === 0 ? 'Carrito Vacío' : (
          carrito.map(producto => (
            <div key={producto.id} className="container">
              <img className="tamano" src={producto.imagen}/>

              <h3>{producto.nombre}</h3>
            </div>
          ))
        )}
      </div>
    </>
  )
}
