import ItemListContainer from './components/ItemListContainer'
// import images from './assets/images'
import { collection, getDocs, getFirestore } from '@firebase/firestore'
// import { useLoaderData } from 'react-router'
// import { obtenerCategorias } from './assets/infor'
import './components/styles/ItemListContainer.css'
import { useEffect, useState } from 'react'

// export function loader(){
//   const categorias = obtenerCategorias()

//   return categorias
// }

export default function App() {

  // const informacion = useLoaderData()
  // console.log(informacion)
  const [datos, setDatos] = useState([])

  useEffect(() => {
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'categorias')
    getDocs(queryCollection)
        .then(res => setDatos(res.docs.map(producto => ({...producto.data()}))))
  }, [])


  return (
    <div>
      <p className="fs-1 fw-bold text-center mt-3">
      TechCommodity</p>

      <div className="container">
        <h2 className="text-center m-5">Bienvenido a tu tienda</h2>
        <div className="row d-flex justify-content-center gap-5 mb-4">

        {datos.map(categoria => (
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
