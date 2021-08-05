import React, { Component, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AppLayout from "../components/AppLayout";
import { CardDeck, Carousel, Col, Container, Row } from "react-bootstrap";
import CardStep from "../components/Home/CardStep";
import BannerCounter from "../components/Home/BannerCounter";
import CardPreguntas from "../components/Home/CardPreguntas";

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
        <div className="section-pasos">
          <Container>
            <Row className="step">
              <Col xs={12} sm={3} md={3} lg={3} xl={3}>
               
                  <div className="text-comolobtengo">
                    <h3 className="title-lobtengo-blue">¿Cómo Lobtengo?</h3>
                    <h6 className="subtitle-gray">
                      Participar del sorteo es muy simple.
                    </h6>
                    <h6 className="subtitle-orange">
                      ¡Solo son 3 pasos y listo!
                    </h6>
                    <button className="btn-participa">PARTICIPA AHORA</button>
                  </div>
              
              </Col>
              <Col xs={12} sm={9} md={9} lg={9} xl={9}>
                <CardStep />
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <BannerCounter />

          <div className="section-preguntas">
            <Container>
              <Row>
                <Col
                  className="align-self-center"
                  xs={12}
                  sm={5}
                  md={4}
                  lg={4}
                  xl={4}
                >
                  <div className="text-preguntas">
                    <h5 className="subtitle-gray">
                      Preguntas Frecuentes
                    </h5>
                    <h3 className="title-lobtengo-blue">Informarte es importante</h3>
                    <h6 className=" subtitle-gray">
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
                <Col xs={12} sm={7} md={8} lg={8} xl={8}>
                  <CardPreguntas />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="seccion-notaria">
            {" "}
            <Row className="notaria">
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="text-notaria">
                  <h5 className="subtitle-gray ">
                    Tranquilo, tenemos total respaldo
                  </h5>
                  <h3 className="title-lobtengo">
                    Notaría Aramburú y asociados
                  </h3>
                  <h6 className="subtitle-gray ">
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
          </div>
        </div>
      </div>
      <style jsx>
        {`
        {/* -------------------->   DESKTOP FIRST  <-------------------*/}
        {/* -------------------->   DESKTOP FIRST  <-------------------*/}
        {/* -------------------->   DESKTOP FIRST  <-------------------*/}
          .section-banner {
            background-size: cover;
            justify-content: left;
            align-items: right;
            border-bottom: 1px solid #5a5a5a;
            position: relative;
          }
          .section-pasos {
            position: relative;
          }

          :global(.step.row){
            display: flex;
            justify-content: center;
            align-items: center!important;
          }
          .text-comolobtengo {
            text-align: center;
            font-family: "mont-regular";
            padding: 10px 20px;
            text-align: start;
          }

          .view-mobile {
            display: none;
          }
          .text-preguntas {
            text-align: center;
            font-family: "mont-regular";
            padding: 1rem;
            text-align: start;
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
     
          .text-notaria img {
            margin: 2rem auto;
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
            .text-comolobtengo {
              margin-top: 1rem;
              padding: 1.5rem;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

export default index;
