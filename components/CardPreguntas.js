import React, {Component, useState} from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CardPreguntas = () => {

    const initialState = [
        {
          id: 1,
          image: "/icons/home/pago.svg",
          title: '¿Qué métodos de pago hay?',
          subtitle: 'Aceptamos todas las tarjetas de crédito y débito y también PayPal.'
        },
        {
          id: 2,
          image: "/icons/home/legal.svg",
          title: '¿Esto es legal?',
          subtitle: 'Por supuesto que sí. Nuestro proceso está supervisado por notarios públicos.'
        },
        {
          id: 3,
          image: "/icons/home/lobtengo.svg",
          title: '¿Por qué Lobtengo?',
          subtitle: 'Por las altas probabilidades de ganar.Tienes hasta 500 veces más oportunidades que con cualquier loteria del Perú.'
        },
        {
            id: 4,
            image: "/icons/home/inmueble.svg",
            title: '¿Cómo funciona el juego?',
            subtitle: 'Fácil, solo deberás comprar los tickets y ya estarás participando por el inmueble.'
          }
      ];
    
      const [preguntas, setPreguntas] = useState(initialState);

    return (
        <>
            <Row className="container-step">
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
                                    <div className="card-step-title">{pregunta.title}</div>
                                </Card.Title>
                                <Card.Text>
                                    <div className="card-step-description">
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
                    .container-step{
                        display: flex;
                    }
                    .card-step {
                    text-align: center;
                    padding: 2rem 3rem;
                    background: #ffffff;
                    box-shadow: 2px 2px 13px 2px rgba(0, 0, 0, 0.2);
                    border-radius: 20px;
                    font-family: "mont-regular" !important;
                    width: 40%;
                    height: auto;
                    margin: 2rem 2rem;
                    }
                    .card-img {
                        margin: auto;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 40%;
                    }
                    .card-step-title {
                        text-align-last: center;
                        font-size: 1.8rem;
                        font-weight: 700;
                        font-family: "neutra-text-bold";
                        color: #3A487F;
                        text-align: start;
                        letter-spacing:.01rem;
                        line-height:1.6rem
                    }
                    .card-step-description {
                        font-size: 1.0rem;
                        font-family: "neutra-text-bold";
                        color: #3A487F;
                        font-weight: 400;
                        text-align: start;
                        line-height:1.5rem;
                        text-align: center;
                    }
                `}
            </style>
        </>
    )
}

export default CardPreguntas;