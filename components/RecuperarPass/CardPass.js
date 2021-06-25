import React, { Component, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const CardPass = () => {
  const initialState = [
    {
      id: 1,
      title: "Descuida, a todos nos ha pasado",
      subtitle:"No te preocupes que en pocos minutos podrás restablecer tu contraseña. Por favor,primero selecciona la forma de contacto.",
    }
  ];

  const [preguntas, setPreguntas] = useState(initialState);

  return (
    <>
        <div className="row-pass-card">
            {preguntas.map((pregunta) => (
                <div className="card-pass">
                    <Card.Body>
                        <Card.Title>
                            <div className="card-pass-title">{pregunta.title}</div>
                        </Card.Title>
                        <Card.Text>
                        <div className="card-pass-description">
                            {pregunta.subtitle}
                        </div>
                        <div className="checkbox-card">
                            <div className="check-recuperar">
                                <input type="checkbox" id="email-pass" name="email-pass" value=""/>
                                <label for="email-pass">Recuperar mi contraseña por correo electrónico.
                                </label>
                            </div>
                            <div className="check-recuperar">
                                <input type="checkbox" id="phone-pass" name="phone-pass" value=""/>
                                <label for="phone-pass">Enviar un SMS a tu número de teléfono.
                                </label>
                            </div>
                        </div>
                        </Card.Text>
                    </Card.Body>
                </div>
            ))}
        </div>
        <style jsx>
            {`
                .row-pass-card {
                    width: 95%;
                }
                .card-pass {
                    background: #ffffff;
                    box-shadow: 2px 2px 13px 2px rgb(0 0 0 / 20%);
                    border-radius: 20px;
                    min-height: 16rem;
                    margin: 2rem 0rem;
                    padding: 1.5rem 0rem 1rem;
                }
                .card-pass-title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    font-family: "neutra-text-bold";
                    color: #3a487f;
                }
                .card-pass-description {
                    font-size: 1rem;
                    font-family: "neutra-text-bold";
                    color: #878787;
                    font-weight: 700;
                    line-height: 1.5rem;
                    margin-top: 0.5rem;
                    margin: 0.5rem 0rem 0rem;
                    text-align: center;
                }
                .checkbox-card{
                    margin: 1rem;
                }
                .check-recuperar{
                    display: flex;
                    align-items: start;
                    margin: 1rem 0rem;
                }
                .check-recuperar label {
                    color: #878787;
                    font-family: "neutra-text-bold";
                    margin-top: -0.4rem;
                    text-align: start;
                    margin-left: 0.5rem;
                }
                @media (min-width: 768px) {
                    .card-pass {
                        max-width: 25rem;
                    }
                    .row-pass-card {
                        justify-content: center;
                    }
                }
        `}
        </style>
    </>
    );
};

export default CardPass;
