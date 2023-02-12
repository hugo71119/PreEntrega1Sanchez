import { useState, createContext, useEffect } from 'react'

const TiendaContext = createContext()

const TiendaProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

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

    return (
        <TiendaContext.Provider
            value={{
                agregarCarrito,
                carrito
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