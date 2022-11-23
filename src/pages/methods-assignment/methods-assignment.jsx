import React, { useState } from 'react'
import { Container, Col, Row, Button, Form } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import './methods-assignment.css'

function MethodsAssignment(props) {

  const [doneSelecting, setDoneSelecting] = useState(false);

  console.log(props.entities)

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
  const navigate = useNavigate();

  const handleNextClick = () => {
    if(doneSelecting) {
      navigate('/methods-assignment-confirmation', {replace: true});
    } else{
      setDoneSelecting(true)
    }
  }
  
  return (
    <div className='entityAttributesPage'>
      <h1>{doneSelecting ? "Detalles previo": "Seleccionar Métodos"}</h1>
      <Col>
        <Container className='card'>
          <div className='table-responsive'>
            <table className='table table-sm table-bordered'>
              <thead>
                <tr>
                  <th>Entidad</th>
                  <th>Método GET</th>
                  <th>Método POST</th>
                  <th>Método PUT</th>
                  <th>Método DELETE</th>
                </tr>
              </thead>
              <tbody>
                {props.entities && (doneSelecting ? filterEntities() : props.entities).map((entity)=>(
                  <tr key={entity.name}>
                    <td>{entity.name}</td>
                    {entity.methods && entity.methods.map((method)=>(
                      <td key={method.name} align='center'>
                        <Form.Check disabled={doneSelecting} defaultChecked={method.value} onChange={
                          ()=>{ method.value = !method.value }
                        }/>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
        </Container>
        <Row>
          <Col>
            <Button variant='danger' type="submit" onClick={()=>{
              if(doneSelecting) setDoneSelecting(false)
            }}>
              Volver
            </Button>
          </Col>

          <Col>
            <Button type="submit" onClick={handleNextClick}>
              Siguiente
            </Button>
          </Col>
        
        </Row>
      </Col>
    </div>
  )
}

export default MethodsAssignment