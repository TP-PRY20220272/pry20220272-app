import React from 'react'
import { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './create-project.css'

function CreateProject() {

  const [proyectTitleText, setProyectTitleText] = useState("")
  const [proyectDescriptionText, setProyectDescriptionText] = useState("")

  return (
    <div>
      <h1>Crear Proyecto</h1>
      <Container className='card'>
        <h5>Título</h5>
        <input
          className='form-control inputProyectTitle'
          value={proyectTitleText}
          placeholder="Título del Proyecto"
          onChange={e => {
            setProyectTitleText(e.target.value)
          }}
        />
        <h5>Descripción</h5>
        <input
          className='form-control inputProyectTitle'
          value={proyectDescriptionText}
          placeholder="Descripción del Proyecto"
          onChange={e => {
            setProyectDescriptionText(e.target.value)
          }}
        />
        <div className='d-flex align-items-center justify-content-right'>
          <Button type="submit">Crear Proyecto</Button>
        </div>
      </Container>
    </div>
  )
}

export default CreateProject