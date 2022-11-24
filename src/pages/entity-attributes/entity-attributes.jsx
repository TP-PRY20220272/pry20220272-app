import React from 'react'
import { Container } from 'react-bootstrap'
import { entities } from '../entities-list/entities-data'
import { useParams } from 'react-router-dom';

function EntityAttributes() {
  const id = useParams().id
  return (
    <div className='entityAttributesPage'>
      <h1>Atributos</h1>
      <Container className='card'>
        <div className='table-responsive'>
          <table className='table table-sm table-bordered'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tipo de dato</th>
                <th>Tamaño</th>
              </tr>
            </thead>
            <tbody>
              {entities[id].attributes && entities[id].attributes.map((attribute)=>(
                <tr key={attribute.name}>
                  <td>{attribute.name}</td>
                  <td>{attribute.data_type}</td>
                  <td>{attribute.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </Container>
    </div>
  )
}

export default EntityAttributes