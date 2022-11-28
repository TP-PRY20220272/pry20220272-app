import React from "react";
import { useState, useRef, useEffect } from "react";
import useAuth from "../../hooks/use-auth";
import axios from '../../api/axios';
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.css"

const LOGIN_URL = '/users/auth'

export default function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/projects"

  const userRef = useRef()
  const errorRef = useRef()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget;

    try{
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          email: email,
          password: password
        }),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      
      setAuth({
        user: response?.data.user,
        accessToken: response?.data.accessToken
      })

      setEmail('')
      setPassword('')
      setValidated(true);
      navigate(from, { replace: true })

    }catch(err){
      if(!err?.response){
        setErrorMsg('No server response :(')
      } else if(err.response?.status === 400){
        setErrorMsg('Missing username or password')
      } else if(err.response?.status === 401){
        setErrorMsg('Unauthorized')
      } else {
        setErrorMsg('Fallo en el inicio de sesión')
      }
    }
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
  };
  
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="heading">
            <div className="tittle">Bienvenido de nuevo!</div>
            <div className="subtittle">Inicie sesión para continuar con MS D&D.</div>
        </div>
        <Row>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
                required
                id="email"
                type="text"
                placeholder="Correo electronico"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
                required
                id="password"
                type="password"
                placeholder="Contraseña"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

      </Row>
      <Row>
        <Form.Group as={Col} md="6">
          <Form.Check
              className="check"
              label="Recordar clave"
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
            <a className="forgot">¿Olvidaste tu contraseña?</a>
        </Form.Group>
      </Row>
      <Button type="submit">Iniciar Sesion</Button>
    </Form>
  );
}
