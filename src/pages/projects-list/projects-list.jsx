import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { proyects } from './proyects-data'
import { useNavigate, Link } from "react-router-dom";

import './projects-list.css'

function ProjectsList() {

  return (
    <div>
      <section>
        <div className='proyects-list'>
          <h1>Lista de Proyectos</h1>
          <div className='cards'>
            {
              proyects.map((proyect, i) => (
                <div key={i} className='card'>
                  <Row>
                    <Col md="auto">
                      <Image src={proyect.image} width="210px"></Image>
                    </Col>
                    <Col>
                      <h2>{proyect.title}</h2>
                      <br></br>
                      <h5>Descripción</h5>
                      <p>{proyect.description}</p>
                      <div className='d-flex align-items-center justify-content-center'>
                        <Button 
                          as={Link} 
                          to={`/projects/${proyect.id}`} 
                          state={{project_data: "HERE'S THE DATA"}} 
                          type="submit"
                        >
                          Ver Proyecto
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsList