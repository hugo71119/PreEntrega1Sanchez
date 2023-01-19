import { Outlet, useLoaderData, Link, useLocation } from "react-router-dom";
import { obtenerCategorias } from "../assets/infor";
import CartWidget from "./CartWidget";
import Footer from "./Footer";
import NavBar from "./NavBar";

export function loader() {
  const infoId = obtenerCategorias()

  return infoId
}


export default function Layout() {
  const infoId = useLoaderData()
  const location = useLocation()

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
              {infoId.map(categoria => (
                <NavBar
                  categoria={categoria}
                  key={categoria.id}
                />
              ))}
              <li>
                <CartWidget />
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
