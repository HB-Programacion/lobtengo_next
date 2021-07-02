import React, { Component, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const CardParticipa = () => {
    const initialState = [
        {
          id: 1,
          title: "1",
          subtitle:
            "ticket",
        },
        {
          id: 2,
          title: "2",
          subtitle:
            "tickets",
        },
        {
          id: 3,
          title: "3",
          subtitle:
            "tickets",
        },
        {
          id: 4,
          title: "4",
          subtitle:
            "tickets",
        },
      ];
    
      const [preguntas, setPreguntas] = useState(initialState);

    return (
        <>
            {preguntas.map((pregunta) => (
                <div className="card-step">
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
            ))}
            <style jsx>
                {`
                .card-step {
                    text-align: center;
                    padding: 0.5rem;
                    background: #ffffff;
                    box-shadow: 2px 2px 13px 2px rgba(0, 0, 0, 0.2);
                    border-radius: 20px;
                    font-family: "mont-regular" !important;
                    height: auto;
                    margin: 1rem;
                    max-width: 100%;
                }
                .subtitle-lobtengo{
                    font-size: 1.5rem;
                    font-family: "baloo-regular";
                }
                .text-description-blue{
                    font-size: 1.2rem;
                    font-family: "baloo-regular";
                }

                @media (min-width: 768px) {
                }
                `}
            </style>
        </>
    )
}

export default CardParticipa;