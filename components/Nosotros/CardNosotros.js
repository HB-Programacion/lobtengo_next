import React, {Component, useState} from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const CardNosotros = () => {

    const initialState = [
        {
          id: 1,
          image: "/icons/nosotros/corazon.svg",
          title: 'Estaremos contigo en cada etapa, porque queremos ayudarte a ganar.'
        },
        {
          id: 2,
          image: "/icons/nosotros/edificios.svg",
          title: 'Nuestro propósito es darle una oportunidad a todos de tener una casa propia.'
        },
        {
          id: 3,
          image: "/icons/nosotros/personas.svg",
          title: ' Transparencia por encima de todo, 100% auditados por la SBS.'
        }
      ];
    
      const [preguntas, setPreguntas] = useState(initialState);

    return (
        <>
            <div className="nosotros-card">
                {preguntas.map((pregunta) => (
                    <div className="card-nosotros">
                        <div className="card-img">
                            <Card.Img
                                variant="top"
                                src={pregunta.image}
                            />
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <div className="card-nosotros-title">{pregunta.title}</div>
                            </Card.Title>
                        </Card.Body>
                    </div>
                ))}
            </div>
            <style jsx>
                {`
                .nosotros-card{
                    margin: 10rem auto;
                    text-align: -webkit-center;
                }

                body {
                margin-top: 5rem;
                }

                @media (min-width:1800px) {

                }
                @media (min-width:1024px) {

                }
                @media (min-width:768px) {

                }
                @media (min-width:480px) {

                }
                @media (min-width:320px) {
                    .card-nosotros {
                        padding: 2rem 9rem;
                        background: #ffffff;
                        box-shadow: 2px 2px 13px 2px rgba(0, 0, 0, 0.2);
                        border-radius: 20px;
                        font-family: "mont-regular" !important;
                        width: 70%;
                        height: auto;
                        margin: 8rem auto;
                        padding: 10rem 10rem;
                        min-height: 180px;
                    }
                    .card-img {
                        margin: auto;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 20%;
                    }
                    .card-nosotros-title {
                        font-size: 20px;
                        font-weight: 700;
                        font-family: "neutra-text-bold";
                        color: #3A487F;
                    }
                }
                `}
            </style>
        </>
    )
}

export default CardNosotros;