import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { Link, useParams, useLocation} from 'react-router-dom';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import {AiFillCheckCircle} from 'react-icons/ai'
import { proyects } from '../projects-list/proyects-data';

function ProjectDetails() {
  
  const id = useParams().id - 1
  console.log("URL Props parameter ID: " + id)

  const projectData = useLocation().state.project_data
  console.log("Project DATA as parameter: " + projectData)
  
  return (
    <div>
      <h1>Detalles del Proyecto</h1>
      <Container className='card'>
        <Row>
          <Col xs={4}>
            <Image src={proyects[id].image} fluid></Image>
          </Col>
          <Col>
            <h2>{proyects[id].title}</h2>
            <h5>Descripción</h5>
            <p>{proyects[id].description}</p>
            <Row>
              <Col>
                <Row>
                  <Col xs={1}>
                    <BsFillCalendarWeekFill color='white'/>
                  </Col>
                  <Col>
                    <p>Fecha de creación</p>
                    <p>{proyects[id].creation_date}</p>
                  </Col>
                </Row>
              </Col>

              <Col>
                <Row>
                  <Col xs={1}>
                    <AiFillCheckCircle color='white'/>
                  </Col>
                  <Col>
                    <p>Fecha de Modificación</p>
                    <p>{proyects[id].last_modification_date}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Button type="submit">Ver Proyecto</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProjectDetails