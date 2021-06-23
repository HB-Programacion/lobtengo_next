import React, { Component, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const CardCorreo = () => {
  const initialState = [
    {
      id: 1,
      title: "¡Todo listo!",
      subtitle:"Por favor revisa tus bandejas, busca nuestro correo y haz clic en el enlace para restablecer tu contraseña.",
    }
  ];

  const [preguntas, setPreguntas] = useState(initialState);

  return (
    <>
        <Row className="row-pass-card">
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
                        <div className="container-email">
                            <div className="text-email">
                                Se envió un correo a Homer@gmail.com
                            </div>
                        </div>
                        </Card.Text>
                    </Card.Body>
                </div>
            ))}
        </Row>
        <style jsx>
            {`
                .row-pass-card {
                    width: 70%;
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
                .container-email{
                    margin-top: 1.5rem;
                    border: 1px solid #3A487F;
                    border-radius: 30px;
                }
                .text-email{
                    font-size: 0.9rem;
                    font-family: 'neutra-text-bold';
                    padding: 0.5rem 0rem;
                    color: #3A487F;
                }
                @media (max-width: 768px) {
                    .card-pass {
                        width: 100%;
                        margin:1rem 0rem
                    }
                }
        `}
        </style>
    </>
    );
};

export default CardCorreo;
