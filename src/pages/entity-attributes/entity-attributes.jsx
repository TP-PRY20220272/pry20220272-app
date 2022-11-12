import React from 'react'
import { Container } from 'react-bootstrap'

function EntityAttributes(props) {
  return (
    <div className='entityAttributesPage'>
      <h1>Atributos</h1>
      <Container>
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
              {props.attributes && props.attributes.map((attribute)=>(
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