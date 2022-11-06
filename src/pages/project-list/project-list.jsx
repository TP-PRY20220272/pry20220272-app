import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './project-list.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function ListProjects() {
    const [isExpended, setExpendedState] = useState(false);
    const menuItems = [
        {
            text:"Crear Proyecto",
            icon:"bi bi-folder-plus",
        },
        {
            text:"Listar Proyecto",
            icon:"bi bi-card-list",
        },
        {
            text:"Buscar Proyecto",
            icon:"bi bi-search"
        }
    ];
    return (
        <div className={isExpended ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
            <div className="nav-upper">
                <div className="nav-heading">
                    {isExpended && (<div className="nav-brand">
                        <img src="assets/Bootstrap_logo.png" alt="nav brand"/>
                        <h2>MS D&D</h2>
                    </div>)}
                    <button 
                    className={isExpended? "hamburger hamburger-in" : "hamburger hamburger-out"}
                    onClick={()=>setExpendedState(!isExpended)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="nav-menu">{menuItems.map(({text,icon})=>
                <a href="#" className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
                    <i class={icon}></i>
                    {isExpended && <p>{text}</p>}
                    {!isExpended && <div className="tooltip">{text}</div>}
                </a>)
                }</div>
            </div>
        </div>
    );
}