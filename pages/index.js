import React, { Component, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AppLayout from "../components/AppLayout";
import { CardDeck, Carousel, Col, Container, Row } from "react-bootstrap";
import CardStep from '../components/Home/CardStep';
import BannerCounter from '../components/Home/BannerCounter'
import CardPreguntas from '../components/Home/CardPreguntas';

const index = () => {
  const initialState = [
    {
      id: 1,
      image: "/images/home/foto-banner1.svg",
    },
    {
      id: 2,
      image: "/images/home/foto-banner2.svg",
    },
    {
      id: 3,
      image: "/images/home/foto-banner3.svg",
    },
  ];

  const [banner, setBanner] = useState(initialState);

  return (
    <AppLayout>
      <div className="box-home">
        <div className="section-banner">
          <Carousel className="box-carousel">
            {banner.map((ban) => (
              <Carousel.Item className="carousel-item">
                <img src={ban.image} alt="" className="w-100" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="section-home">
          <Container>
            <Row className="step">
              <Col xs={12} sm={3} md={3} lg={3} xl={3}>
                <div className="text-comolobtengo">
                  <h3 className="title-lobtengo">¿Cómo Lobtengo?</h3>
                  <h6 className="subtitle-first">
                    Participar del sorteo es muy simple.
                  </h6>
                  <h6 className="subtitle-second">
                    ¡Solo son 3 pasos y listo!
                  </h6>
                  <button className="btn-participa">PARTICIPA AHORA</button>
                </div>
              </Col>
              <Col xs={12} sm={9} md={9} lg={9} xl={9}>
                <CardStep />
              </Col>
            </Row>
            <BannerCounter />
            <Row className="preguntas">
              <Col
                className="align-self-center"
                xs={12}
                sm={5}
                md={5}
                lg={5}
                xl={5}
              >
                <div className="text-preguntas">
                  <h5 className="subtitle-first-preguntas">
                    Preguntas Frecuentes
                  </h5>
                  <h3 className="title-preguntas">Informarte es importante</h3>
                  <h6 className="subtitle-first-preguntas">
                    Tómate unos minutos para revisar estas preguntas y aclarar
                    todas tus dudas.
                  </h6>
                  <div className="enlace-verMas">
                    <a href="/">
                      Ver más <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={7} md={7} lg={7} xl={7}>
                <CardPreguntas />
              </Col>
            </Row>
            <Row className="notaria">
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="text-notaria">
                  <h5 className="subtitle-second-notaria">
                    Tranquilo, tenemos total respaldo
                  </h5>
                  <h3 className="title-notaria">
                    Notaría Aramburú y asociados
                  </h3>
                  <h6 className="subtitle-first-notaria">
                    Nuestro sorteo cuenta con la supervisión de la Notaria
                    Aramburú y Asociados.
                  </h6>
                  <img src="./icons/home/notaria.svg" />
                  <h6 className="descripcion-notaria">
                    Todas las bases y términos legales son públicas y pueden
                    consultarlas <a href="/">aquí</a>, en todo momento.
                  </h6>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <style jsx>
        {`
          .section-banner {
            background-size: cover;
            justify-content: left;
            align-items: right;
            border-bottom: 1px solid #5a5a5a;
            position: relative;
          }
          .section-home {
            position: relative;
          }
          .text-comolobtengo {
            text-align: center;
            font-family: "mont-regular";
            margin-top: 10rem;
            padding: 10px 60px;
            text-align: start;
          }
          .title-lobtengo {
            font-family: "Baloo-Regular";
            font-weight: 700;
            font-size: 2.8rem;
            color: #3a487f;
          }
          .subtitle-first {
            font-family: "neutra-text-bold";
            color: #878787;
            font-size: 1rem;
          }
          .subtitle-second {
            font-family: "neutra-text-bold";
            color: #fc6625;
            font-size: 1rem;
          }
          .btn-participa {
            background-color: #3a487f;
            border: none;
            padding: 7px 10px;
            color: #ffffff;
            border-radius: 20px;
            margin-top: 10px;
            font-family: "neutra-text-bold";
          }
          .view-mobile {
            display: none;
          }
          .text-preguntas {
            text-align: center;
            font-family: "mont-regular";
            margin-top: 10rem;
            padding: 10px 60px;
            text-align: start;
          }
          .title-preguntas {
            font-family: "Baloo-Regular";
            font-weight: 700;
            font-size: 2.3rem;
            color: #3a487f;
          }
          .subtitle-first-preguntas {
            font-family: "neutra-text-bold";
            color: #878787;
            font-size: 1.5rem;
          }
          .subtitle-second-preguntas {
            font-family: "Baloo-Regular";
            color: #878787;
            font-size: 1.5rem;
          }
          .enlace-verMas a {
            color: #3a487f;
            font-family: "neutra-text-bold";
            text-decoration: none;
            margin-right: 5px;
          }
          .text-notaria {
            text-align: center;
            margin: 6rem auto;
          }
          .subtitle-second-notaria {
            font-family: "Baloo-Regular";
            color: #878787;
            font-size: 1.6rem;
          }
          .title-notaria {
            font-family: "Baloo-Regular";
            font-weight: 700;
            font-size: 2.5rem;
            color: #3a487f;
          }
          .subtitle-first-notaria {
            font-family: "Baloo-Regular";
            color: #878787;
            font-size: 1.5rem;
          }
          .text-notaria img {
            margin: 2rem auto;
          }
          .descripcion-notaria {
            font-family: "neutra-text-light";
            color: #878787;
            font-size: 1rem;
          }
          .descripcion-notaria a {
            color: #fc6625;
            text-decoration: none;
          }
          @media (max-width: 768px) {
            .view-mobile {
              display: block;
            }
            .title-lobtengo {
              font-size: 2rem;
            }
            .text-comolobtengo{
              margin-top:1rem;
              padding:2rem
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

export default index;
