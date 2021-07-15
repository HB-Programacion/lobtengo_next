import React, { Component, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CardPregFrecuentes = () => {
  const initialState = [
    {
      id: 1,
      image: "/icons/home/pago.svg",
      title: "¿Qué métodos de pago hay?",
      subtitle:
        "Aceptamos todas las tarjetas de crédito y débito y también PayPal.",
    },
    {
      id: 2,
      image: "/icons/home/legal.svg",
      title: "¿Esto es legal?",
      subtitle:
        "Por supuesto que sí. Nuestro proceso está supervisado por notarios públicos.",
    },
    {
      id: 3,
      image: "/icons/home/lobtengo.svg",
      title: "¿Por qué Lobtengo?",
      subtitle:
        "Por las altas probabilidades de ganar.Tienes hasta 500 veces más oportunidades que con cualquier loteria del Perú.",
    },
    {
      id: 4,
      image: "/icons/home/inmueble.svg",
      title: "¿Cómo funciona el juego?",
      subtitle:
        "Fácil, solo deberás comprar los tickets y ya estarás participando por el inmueble.",
    },
  ];

  const [preguntas, setPreguntas] = useState(initialState);

  return (
    <div>
      <Row>
        {preguntas.map((pregunta) => (
          <>
            <div className="card-step">
              <div className="card-img">
                <Card.Img
                  variant="top"
                  src={pregunta.image}
                  className="card-img-step"
                />
              </div>
              <Card.Body>
                <Card.Title>
                  <div className="subtitle-lobtengo">{pregunta.title}</div>
                </Card.Title>
                <Card.Text>
                  <div className="text-description-blue">
                    {pregunta.subtitle}
                  </div>
                </Card.Text>
              </Card.Body>
            </div>
          </>
        ))}
      </Row>
      <style jsx>
        {`
          .card-step {
            text-align: center;
            padding: 1rem;
            background: #ffffff;
            box-shadow: 2px 2px 13px 2px rgba(0, 0, 0, 0.2);
            border-radius: 20px;
            font-family: "mont-regular" !important;
            width: 40%;
            height: auto;
            margin: 1rem;
          }
          .card-img {
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 4rem;
            height: 4rem;
          }
          .card-img img {
            width: 100%;
          }

          @media (max-width: 768px) {
            .card-step {
              width: 100%;
              margin: 1rem 0rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CardPregFrecuentes;
