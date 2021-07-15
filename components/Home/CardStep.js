import React, { Component, useState } from "react";
import { Card, Container } from "react-bootstrap";

const CardStep = () => {
  const initialState = [
    {
      id: 1,
      image: "/icons/home/step1.svg",
      title: "Regístrate",
      subtitle:
        "Crea tu perfil y llena tus datos Solo los usaremos para avisarte que has ganado.",
    },
    {
      id: 2,
      image: "/icons/home/step2.svg",
      title: "Compra tus tickets",
      subtitle:
        "Consigue tus opciones desde S/ 60. A más tickets, más opciones de ganar.",
    },
    {
      id: 3,
      image: "/icons/home/step3.svg",
      title: "Espera el sorteo",
      subtitle:
        "Síguelo en vivo a través de nuestras redes sociales. El primer sorteo se realizará este 15 de junio.",
    },
  ];

  const [banner, setBanner] = useState(initialState);

  return (
    <Container>
      <div className="container-step">
        {banner.map((ban) => (
          <div className="card-step">
            <div className="card-img">
              <Card.Img
                variant="top"
                src={ban.image}
                className="card-img-step"
              />
            </div>
            <Card.Body>
              <Card.Title>
                <div className="subtitle-lobtengo">{ban.title}</div>
              </Card.Title>
              <Card.Text>
                <div className="text-description-blue">{ban.subtitle}</div>
              </Card.Text>
            </Card.Body>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .container-step {
            display: flex;
          }
          .card-step {
            text-align: center;
            padding: 2rem 1rem;
            background: #ffffff;
            box-shadow: 2px 2px 13px 2px rgba(0, 0, 0, 0.2);
            border-radius: 20px;
            font-family: "mont-regular" !important;
            width: 18rem;
            height: auto;
            margin-bottom: 30px;
            margin: 6rem 0.5rem;
          }
          .card-img {
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30%;
          }

          @media (max-width: 768px) {
            .container-step {
              flex-direction: column;
            }

            .card-step {
              margin: 1rem 0rem;
            }
            .subtitle-lobtengo {
              font-size: 1rem;
              line-height: 1rem;
            }
          }
        `}
      </style>
    </Container>
  );
};

export default CardStep;
