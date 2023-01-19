import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function NavBar({ categoria }) {

    const navigate = useNavigate()
    const location = useLocation()

    const { id, nombreCategoria } = categoria

    return (
        <>
            <li className="nav-item">
                <button className={`${location.pathname === `/categoria/${id}` ? 'text-dark' : 'text-light'} nav-link bg-transparent border border-primary fw-bold`} onClick={() => navigate(`/categoria/${id}`)}>{nombreCategoria}</button>
            </li>
        </>
    )
}
