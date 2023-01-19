

export async function obtenerInformacion(){
    const url = 'http://localhost:3000/productos'

    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerProducto(id){
    const url = `http://localhost:3000/categorias/${id}/productos`

    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerItem(id){
    const url = `http://localhost:3000/productos/${id}`

    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerCategorias(){
    const url = 'http://localhost:3000/categorias'

    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}