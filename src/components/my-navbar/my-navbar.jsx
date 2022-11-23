import React, { Children, useState } from 'react';
import { Container, Row, Col, Image, Nav } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './my-navbar.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom';

function MyNavbar({children}) {
  const [isExpanded, setExpandedState] = useState(false);
  const menuItems = [
    {
      text: "Crear Proyecto",
      icon: "bi bi-folder-plus",
      path: "/create-proyect"
    },
    {
      text:"Listar Proyecto",
      icon:"bi bi-card-list",
      path: "/"
    },
    {
      text:"Buscar Proyecto",
      icon:"bi bi-search",
      path: "/search"
    },
    {
      text:"Asignar Métodos",
      icon:"bi bi-list",
      path: "/methods-assignment"
    },
    {
      text:"Lista de Entidades",
      icon:"bi bi-list",
      path: "/entities-list"
    },
    {
      text:"Configuración de RDS",
      icon:"bi bi-database",
      path: "/rds-configuration"
    },
  ];

  return (
    <>
    <Row>
      <Col md="auto">
        <div className={isExpanded ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
          <div className="nav-upper">
            <div className="nav-heading">
              {isExpanded && (
              <div className="nav-brand">
                <Image src='./assets/Bootstrap_logo.png' alt="nav brand" width={40} height={40}/>
                <h2>MS D&D</h2>
              </div>
              )}
              <button 
              className={isExpanded? "hamburger hamburger-in" : "hamburger hamburger-out"} 
              onClick={()=>setExpandedState(!isExpanded)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>

            <div className="nav-menu">
              {
                menuItems.map(
                  (item, index) => 
                  <Nav.Link key={index} as={Link} to={item.path} className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}>
                    <i className={item.icon}></i>
                    {isExpanded && <p>{item.text}</p>}
                  </Nav.Link>
                )
              }
            </div>
          </div>
        </div>
      </Col>
      <Col>
        <Container className='main-content'>
          <main>{children}</main>
        </Container>
      </Col>
    </Row>
    
    
    </>
  );
}

export default MyNavbar;