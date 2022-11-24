import React from 'react'
import { Col, Container, Row, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function EntitiesList(props) {
  return (
    <div className='entitiesListPage'>
      <h1>Entidades</h1>
      <Container className='card'>
        <div className='table-responsive'>
          <table className='table table-sm table-bordered'>
            <thead>
              <tr>
                <th className='col-sm-3'>Entidad</th>
                <th className='col-sm-1'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {props.entities && props.entities.map((entity)=>(
                <tr key={entity.name}>
                  <td>{entity.name}</td>
                  <td align='center'>
                    <Nav.Link as={Link} to={`/entity/${entity.id}/attributes`}>
                      <p>Ver</p>
                    </Nav.Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </Container>
    </div>
  )
}

export default EntitiesList