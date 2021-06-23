import React, { Component, useState } from "react";
import Image from "next/image";
import { Card, Col, Container, Row } from "react-bootstrap";

const CardNosotros = () => {
  const initialState = [
    {
      id: 1,
      image: "/icons/nosotros/corazon.svg",
      title:
        "Estaremos contigo en cada etapa, porque queremos ayudarte a ganar.",
    },
    {
      id: 2,
      image: "/icons/nosotros/edificios.svg",
      title:
        "Nuestro propósito es darle una oportunidad a todos de tener una casa propia.",
    },
    {
      id: 3,
      image: "/icons/nosotros/personas.svg",
      title: " Transparencia por encima de todo, 100% auditados por la SBS.",
    },
  ];

  const [preguntas, setPreguntas] = useState(initialState);

  return (
    <>
      <Row className="container-nosotros">
        {preguntas.map((pregunta) => (
          <div className="card-nosotros">
            <div className="nosotros-card-img">
              <Card.Img
                variant="top"
                src={pregunta.image}
                alt="imagen nosotros"
              />
            </div>
            <Card.Body>
              <Card.Title>
                <div className="card-nosotros-title">{pregunta.title}</div>
              </Card.Title>
            </Card.Body>
          </div>
        ))}
      </Row>
      <style jsx>
        {`
          .container-nosotros{
            display: flex;
            place-content: center;
          }
          .card-nosotros {
            text-align: center;
            padding: 1rem 1.5rem;
            background: #ffffff;
            box-shadow: 2px 2px 13px 2px rgb(0 0 0 / 20%);
            border-radius: 20px;
            font-family: "mont-regular" !important;
            width: 73%;
            height: auto;
            margin: 2rem 2rem;
          }
          .nosotros-card-img {
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 15%;
          }
          .card-nosotros-title {
            font-size: 22px;
            font-weight: 700;
            font-family: "neutra-text-bold";
            color: #3a487f;
          }
        `}
      </style>
    </>
  );
};

export default CardNosotros;
