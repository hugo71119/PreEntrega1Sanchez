import { useState, createContext, useEffect } from 'react'
import Swal from 'sweetalert2'

const TiendaContext = createContext()

const TiendaProvider = ({children}) => {

    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
    const [carrito, setCarrito] = useState(carritoLS)
    const [cantidad, setCantidad] = useState(0)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    useEffect(() => {
        const nuevoCarrito = carrito.reduce((total, cantidadTotal) => total + (cantidadTotal.cantidad), 0)
        setCantidad(nuevoCarrito)
      }, [carrito])

    const agregarCarrito = producto => {
        if (carrito.some(productoState => productoState.id === producto.id)) {
            const carritoActualizado = carrito.map(productoState => {
                if (productoState.id === producto.id) {
                    productoState.cantidad = producto.cantidad
                }
                return productoState
            })
            setCarrito(carritoActualizado)
        } else{
            setCarrito([...carrito, producto])
            
        }
    }

    const actualizarProducto = producto => {
        const carritoActualizado = carrito.map(productoState => {
            if (productoState.id === producto.id) {
                productoState.cantidad = producto.cantidad
            }
            return productoState
        })
        setCarrito(carritoActualizado)
    }

    const eliminarProducto = id => {
        Swal.fire({
            title: '¿Quieres eliminar este producto de tu carrito?',
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: 'Si',
            // denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const carritoActualizado = carrito.filter( productoState => productoState.id !== id )
                setCarrito(carritoActualizado)
                return
            } 
            // else if (result.isDenied) {
            //   Swal.fire('Changes are not saved', '', 'info')
            // }
          })
        
    }

    return (
        <TiendaContext.Provider
            value={{
                agregarCarrito,
                carrito,
                actualizarProducto,
                eliminarProducto,
                cantidad
            }}
        >
            {children}
        </TiendaContext.Provider>
    )
}

export {
    TiendaProvider
}
export default TiendaContext