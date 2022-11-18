import React from 'react'
import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

function RdsConfiguration() {

  const [serverNameText, setServerNameText] = useState("")
  const [userNameText, setUserNameText] = useState("")
  const [passwordText, setPasswordText] = useState("")
  const [dataBaseText, setDatabaseText] = useState("")
  const [portText, setPortText] = useState("")

  return (
    <div>
      <h1>Configuración del RDS</h1>
      <Container className='card'>
        <h5>Nombre del Servidor</h5>
        <input
          className='form-control inputProyectTitle'
          value={serverNameText}
          placeholder="Nombre del Servidor"
          onChange={e => {
            setServerNameText(e.target.value)
          }}
        />

        <h5>Nombre de Usuario</h5>
        <input
          className='form-control inputProyectTitle'
          value={userNameText}
          placeholder="Nombre de Usuario"
          onChange={e => {
            setUserNameText(e.target.value)
          }}
        />

        <h5>Contraseña</h5>
        <input
          className='form-control inputProyectTitle'
          value={passwordText}
          placeholder="Contraseña"
          onChange={e => {
            setPasswordText(e.target.value)
          }}
        />

        <h5>Base de Datos</h5>
        <input
          className='form-control inputProyectTitle'
          value={dataBaseText}
          placeholder="Base de Datos"
          onChange={e => {
            setDatabaseText(e.target.value)
          }}
        />

        <h5>Puerto</h5>
        <input
          className='form-control inputProyectTitle'
          value={portText}
          placeholder="Puerto"
          onChange={e => {
            setPortText(e.target.value)
          }}
        />

        <Button className="d-grid gap-2" type="submit">Cargar</Button>
      </Container>
    </div>
  )
}

export default RdsConfiguration