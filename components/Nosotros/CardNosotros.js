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
    <div className="container-nosotros">
      <Container>
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
                  <div className="subtitle-lobtengo">{pregunta.title}</div>
                </Card.Title>
              </Card.Body>
            </div>
          ))}
        </Row>
      </Container>
      <style jsx>
        {`
           {
            /* -------------------->   MOBILE FIRST  <-------------------*/
          }
           {
            /* -------------------->   MOBILE FIRST  <-------------------*/
          }
           {
            /* -------------------->   MOBILE FIRST  <-------------------*/
          }

          .container-nosotros {
            position:relative;
            top:3rem
          }
          .card-nosotros {
            text-align: center;
            padding: 1rem;
            background: #ffffff;
            box-shadow: 2px 2px 13px 2px rgb(0 0 0 / 20%);
            border-radius: 20px;
            font-family: "mont-regular" !important;
            width: 90%;
            height: auto;
            margin:1rem auto
          }
          .nosotros-card-img {
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 18%;
          }
          .subtitle-lobtengo{
            text-align:center
          }
  
        `}
      </style>
    </div>
  );
};

export default CardNosotros;
