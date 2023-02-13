import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { collection, getDocs, getFirestore } from '@firebase/firestore'
import { TiendaProvider } from '../context/TiendaProvider'
import CartWidget from "./CartWidget";
import Footer from "./Footer";
import NavBar from "./NavBar";


export default function Layout() {
  const location = useLocation()

  const [datos, setDatos] = useState([])

  useEffect(() => {
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'categorias')
    getDocs(queryCollection)
        .then(res => setDatos(res.docs.map(producto => ({...producto.data()}))))
  }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fw-bolder">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">TechCommodity</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <Link className={`${location.pathname === '/' ? 'text-dark' : 'text-light'} nav-link `} aria-current="page" to="/">Inicio</Link>
              </li>
              {datos.map(categoria => (
                <NavBar
                  categoria={categoria}
                  key={categoria.id}
                />
              ))}
              <li>
                <TiendaProvider>
                  <CartWidget />
                </TiendaProvider>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <Outlet />
      <Footer />
    </>
  )
}
