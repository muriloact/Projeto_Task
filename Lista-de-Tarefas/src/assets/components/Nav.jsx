import React from "react";
import { Link } from "react-router-dom";
import logo_Tarefas from "../../../public/logo_tarefas.svg"
import logalt from '../../../public/exit.png'
import { useNavigate } from 'react-router-dom';
import './Nav.css'

function NavBar() {

    const navigate = useNavigate()

    return (
        <>
            <div className="container-navbar">
                <div className="flex">
                    {/* Logo */}
                    <div className="container-logo">
                        <img src={logo_Tarefas} alt="Logo Task's" className="logo-app" />
                    </div>

                    {/* Links */}
                    <div className="div-navbar">
                        <nav className="navbar">
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/perfil">Perfil</Link></li>
                                <li><Link to="/tarefas">Tarefas</Link></li>
                                <li><Link to="/config">Configuração</Link></li>
                                <div className="div-logalt">
                                    <button className="btn-logalt" onClick={() => navigate('/')}>
                                        <img src={logalt} alt="icon-exit" />
                                    </button>
                                </div>
                            </ul>
                        </nav>
                    </div>

                    
                </div>
            </div>


        </>
    )
}

export default NavBar