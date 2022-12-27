import React from 'react'
import CartWidget from './CartWidget'

export default function NavBar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fw-bolder">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">TechCommodity</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Tienda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Categorias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Nosotros</a>
                        </li>
                        <li>
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
