import React, { useState } from 'react'
import { Container, Col, Row, Button, Form } from 'react-bootstrap'
import './methods-assignment.css'

function MethodsAssignmentConfirmation(props) {

  const filterEntities = () => {
    const fm = []
    props.entities.map((entity)=>{
      for (var i = 0; i < entity.methods.length; i++) {
        if(entity.methods[i].value) {
          fm.push(entity)
          break;
        }
      }
    })
    return fm
  }

  return (
    <div className='entityAttributesPage'>
      <h1>Asignación Completada</h1>
      <Col>
        <Container className='card'>
          <Row>
            <Col>
            Los métodos asignados a cada entidad serán creados cuando se termine la configuración del proyecto y se genere el código del proyecto
            </Col>
            
            <Col>
              <div className='table-responsive'>
                <table className='table table-sm table-bordered'>
                  <thead>
                    <tr>
                      <th>Entidad</th>
                      <th>Métodos Asignados</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.entities && props.entities.map((entity)=>(
                      <tr key={entity.name}>
                        <td>{entity.name}</td>
                        <td align='center'>
                          {
                            entity.methods && entity.methods.map((method)=>(
                              method.value ? method.name+" " : ""
                            ))
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col>
            <Button type="submit" onClick={()=>{
              
            }}>
              Ir al diagrama
            </Button>
          </Col>
        
        </Row>
      </Col>
    </div>
  )
}

export default MethodsAssignmentConfirmation