import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import images from './assets/images'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <NavBar/>
      <p className="fs-1 fw-bold text-center mt-3">
      TechCommodity</p>

      <ItemListContainer
        img = {images}
        saludo = "Bienvenidos a tu tienda"
      />

      <Footer/>

      {/* <img src={primera}/> */}

    </div>
  )
}
