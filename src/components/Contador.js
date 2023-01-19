import { useState } from "react"
import './styles/ItemListContainer.css'


export default function Contador() {

    const [contador, setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

  return (
    <div className="contador">
      <button className="btn btn-success" onClick={sumar}>+</button>
        <p>{contador}</p>
        {/* <input
          className="text-center"
          type="text"
          value={contador}
        /> */}

      <button className="btn btn-danger" onClick={restar}>-</button>
    </div>
  )
}
