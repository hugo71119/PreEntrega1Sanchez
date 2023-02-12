// import useTienda from '../hooks/useTienda'
import { useNavigate } from 'react-router-dom'

export default function CartWidget() {

  const navigate = useNavigate()
  // const location = useLocation()

  return (
    <button onClick={() => navigate('/carrito')} className="bg-transparent border-0">
        <i className="nav-link text-light  bi bi-cart-check fs-3">7</i>
    </button>
    
  )
}
