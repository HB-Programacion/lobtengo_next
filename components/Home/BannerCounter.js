import React, { Component, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const BannerCounter = () => {
  return (
    <>
      <Container fluid="true">
        <Row className="justify-content-center">
          <div className="section-counter">
            <Col
              xs={12}
              sm={2}
              md={2}
              lg={2}
              xl={2}
              className="align-self-center"
            >
              <h3 className="title-counter">¡Cada vez MÁS cerca!</h3>
            </Col>
            <Col
              xs={12}
              sm={3}
              md={3}
              lg={3}
              xl={3}
              className="align-self-center"
            >
              <div className="graphic-count">
                <div className="count-days">
                  <h3>5 días</h3>
                </div>
                <div className="count-time">
                  <Row>
                    <Col>18h</Col>
                    <Col>15m</Col>
                    <Col>6s</Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={7} md={7} lg={7} xl={7}>
              <div className="card-texto">
                <Card.Body>
                  <div className="text-cabecera">Llévate un departamento</div>
                  <div className="text-title">¡Desde S/60 soles!</div>
                  <div className="text-subtitle">
                    Al tener un número limitado de tickets a la venta{" "}
                    <span>tus posibilidades de ganar nunca disminuirán</span>,
                    pero sí podrás aumentarlas. ¡Tú decides cuánto! Regístrate
                    AHORA
                  </div>
                </Card.Body>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
      <style jsx>
        {`
          .section-counter {
            display: flex;
            padding: 3rem;
            width: 80%;
            background-color: #fc6625;
            margin: 8rem auto;
            border-radius: 1rem;
          }
          .title-counter {
            font-family: "Baloo-Regular";
            font-weight: 900;
            font-size: 40px;
            color: #ffffff;
          }
          .card-texto {
            text-align: center;
            background: #ffffff;
            border-radius: 15px;
            font-family: "mont-regular" !important;
            padding: 1.5rem;
          }
          .text-cabecera {
            color: #878787;
            font-family: "Baloo-Regular";
            font-size: 18px;
            text-align: start;
          }
          .text-title {
            color: #3a487f;
            font-family: "Baloo-Regular";
            font-size: 30px;
            font-weight: 900;
            text-align: start;
          }
          .text-subtitle {
            color: #878787;
            font-family: "neutra-text-bold";
            font-size: 15px;
            font-weight: 300;
            text-align: start;
          }
          .text-subtitle span {
            color: #fc6625;
          }

          @media (max-width: 768px) {
            .section-counter {
            margin: 2rem auto;
            flex-direction:column
          }
          }
        `}
      </style>
    </>
  );
};

export default BannerCounter;
