import React, { Component, useState } from "react";
import { Card, Row } from "react-bootstrap";

const CardSms = () => {
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
                        <div className="container-email">
                            <div className="text-email">
                                Se envió un SMS al XXXXXX958
                            </div>
                        </div>
                        <div className="container-btn">
                            <button type="submit" className="btn-siguiente">
                                Siguiente
                            </button>
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
                .container-btn{
                        margin-top: 1.2rem;
                    }
                .btn-siguiente {
                    background-color: #3A487F;
                    font-size: 15px;
                    border: none;
                    padding: 1rem 2.5rem;
                    color: #ffffff;
                    border-radius: 40px;
                    margin: 0rem 0.5rem 0rem 1rem;
                    font-family: "neutra-text-bold";
                    text-transform: uppercase;
                }
                .container-email{
                    margin-top: 1.5rem;
                    border: 0.1rem solid #3A487F;
                    border-radius: 30px;
                }
                .text-email{
                    font-size: 0.9rem;
                    font-family: 'neutra-text-bold';
                    padding: 0.5rem 0rem;
                    color: #3A487F;
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

export default CardSms;
