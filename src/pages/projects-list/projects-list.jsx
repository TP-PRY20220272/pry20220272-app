import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { proyects } from './proyects-data'
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
                    <Col>
                      <Image src={proyect.image} width="220px" ></Image>
                    </Col>
                    <Col>
                      <h2>{proyect.title}</h2>
                      <h5>Descripción</h5>
                      <p>{proyect.description}</p>
                    </Col>
                    <Col className='d-flex align-items-center justify-content-center'>
                      <Button type="submit">Ver Proyecto</Button>
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