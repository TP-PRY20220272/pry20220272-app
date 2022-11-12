import React from 'react'
import { Container } from 'react-bootstrap'

function EntitiesList(props) {
  return (
    <div className='entitiesListPage'>
      <h1>Entidades</h1>
      <Container>
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
                <tr key={entity}>
                  <td>{entity}</td>
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