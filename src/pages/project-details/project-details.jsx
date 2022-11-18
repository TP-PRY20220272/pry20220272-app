import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import {AiFillCheckCircle} from 'react-icons/ai'

function ProjectDetails(props) {
  return (
    <div>
      <h1>Detalles del Proyecto</h1>
      <Container className='card'>
        <Row>
          <Col xs={4}>
            <Image src={props.projectData.image} fluid></Image>
          </Col>
          <Col>
            <h2>{props.projectData.title}</h2>
            <h5>Descripción</h5>
            <p>{props.projectData.description}</p>
            <Row>
              <Col>
                <Row>
                  <Col xs={1}>
                    <BsFillCalendarWeekFill/>
                  </Col>
                  <Col>
                    <p>Fecha de creación</p>
                    <p>{props.projectData.creation_date}</p>
                  </Col>
                </Row>
              </Col>

              <Col>
                <Row>
                  <Col xs={1}>
                    <AiFillCheckCircle/>
                  </Col>
                  <Col>
                    <p>Fecha de Modificación</p>
                    <p>{props.projectData.last_modification_date}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Button className="button" type="submit">Ver Proyecto</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProjectDetails