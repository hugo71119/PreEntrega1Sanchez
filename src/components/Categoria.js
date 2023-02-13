import { collection, getDocs, getFirestore } from '@firebase/firestore'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CategoriaFinal from './CategoriaFinal'

export default function Categoria() {

    const location = useLocation()
    const locationId = +(location.pathname.split("/")[2])

    const [informacion, setInformacion] = useState([])

    // for (index; index < infoCelulares.length; index++) {
    //     if (infoCelulares[index].id <= infoCelulares[2].id) {
    //         array.push(infoCelulares[index])
    //     }

    // }
    // console.log(array)

    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'Productos')
        getDocs(queryCollection)
            .then(res => setInformacion(res.docs.map(producto => ({...producto.data()}))))
    }, [])
    // console.log(informacion)
    const nuevaInformacion = informacion.filter(info => info.categoriaId === locationId)
    // console.log(nuevaInformacion)

    return (
        <>
            <div className="container mt-5 mb-5">

                <div className="row d-flex justify-content-center gap-5 mb-4">

                        {nuevaInformacion.map(categoria => (
                            <CategoriaFinal
                                categoria={categoria}
                                key={categoria.id}
                            />
                        ))}
                </div>
            </div>
        </>
    )
}
