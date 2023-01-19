import React from 'react'
import ItemListContainer from './components/ItemListContainer'
// import images from './assets/images'
import { useLoaderData } from 'react-router'
import { obtenerCategorias } from './assets/infor'
import './components/styles/ItemListContainer.css'



export function loader(){
  const categorias = obtenerCategorias()

  return categorias
}

export default function App() {

  const informacion = useLoaderData()
  console.log(informacion)

  return (
    <div>
      <p className="fs-1 fw-bold text-center mt-3">
      TechCommodity</p>

      <div className="container">
        <h2 className="text-center m-5">Bienvenido a tu tienda</h2>
        <div className="row d-flex justify-content-center gap-5 mb-4">

        {informacion.map(categoria => (
          <ItemListContainer
            categoria={categoria}
            key={categoria.id}
          />
        ))}
        </div>
      </div>

    </div>
  )
}
