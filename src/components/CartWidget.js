import useTienda from '../hooks/useTienda'
import { useNavigate } from 'react-router-dom'

export default function CartWidget() {
  const {carrito, cantidad} = useTienda()
  const navigate = useNavigate()
  
  console.log(carrito)


  return (
    <button onClick={() => navigate('/carrito')} className="bg-transparent border-0">
        <i className="nav-link text-light  bi bi-cart-check fs-3">{cantidad}</i>
    </button>
    
  )
}
