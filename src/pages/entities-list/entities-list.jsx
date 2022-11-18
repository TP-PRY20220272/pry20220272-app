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
                <th>Entidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {props.entities && props.entities.map((entity)=>(
                <tr key={entity.name}>
                  <td>{entity.name}</td>
                  <td align='center'>
                    <Nav.Link key={entity.name} as={Link} to={"/entity-attributes"}>
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