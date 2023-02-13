import { getFirestore, collection, getDocs } from 'firebase/firestore'
import './styles/ItemListContainer.css'
import ItemDetailContainerFinal from './ItemDetailContainerFinal'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ItemDetailContainer() {

  const location = useLocation()
  const locationId = +(location.pathname.split("/")[2])

  const [informacion, setInformacion] = useState([])


  useEffect(() => {
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'Productos')
    getDocs(queryCollection)
        .then(res => setInformacion(res.docs.map(producto => ({...producto.data()}))))
  }, [])
  const nuevaInformacion = informacion.filter(info => info.id === locationId)


  return (
    <>
      {nuevaInformacion.map(info => (
          <ItemDetailContainerFinal
            info={info}
            key={info.id}
          />
      ))}
    </>
  )
}
