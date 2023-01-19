import { useLoaderData } from 'react-router'
import { obtenerProducto } from '../assets/infor'
import CategoriaFinal from './CategoriaFinal'


export async function loader({params}) {

    const producto = await obtenerProducto(params.id)
    return producto
}

export default function Categoria() {

    const infoCelulares = useLoaderData()
    console.log(infoCelulares)

    // for (index; index < infoCelulares.length; index++) {
    //     if (infoCelulares[index].id <= infoCelulares[2].id) {
    //         array.push(infoCelulares[index])
    //     }

    // }
    // console.log(array)

    return (
        <>
            <div className="container mt-5 mb-5">

                <div className="row d-flex justify-content-center gap-5 mb-4">

                        {infoCelulares.map(categoria => (
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
