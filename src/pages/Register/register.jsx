import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./register.css"

export default function Register() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="heading">
                <div className="tittle">Registrate con nosotros</div>
                <div className="subtittle">Obtenga su cuenta MS D&D gratis ahora.</div>
            </div>
            <Row>
                <Form.Group controlId="validationCustom01">
                    <Form.Label></Form.Label>
                    <Form.Control
                        required
                        id="email"
                        type="text"
                        placeholder="Correo electronico"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label></Form.Label>
                    <Form.Control
                        required
                        id="password"
                        type="text"
                        placeholder="Contraseña"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} md="6">
                    <Form.Check
                        className="check"
                        required
                        label="Recordar clave"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <a className="forgot">¿Olvidaste tu contraseña?</a>
                </Form.Group>
            </Row>
            <Button className="button" type="submit">Registrarse</Button>
        </Form>
    );
}