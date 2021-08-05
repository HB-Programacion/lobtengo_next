import React, { Component, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const BannerCounter = () => {
  return (
    <>
      <Container >
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
                  <div>5 días</div>
                </div>
                <div className="count-time">
                  <Row>
                    <Col>
                      <div className="box-number">18h</div>
                    </Col>
                    <Col>
                      <div className="box-number">15m</div>
                    </Col>
                    <Col>
                      <div className="box-number">6s</div>
                    </Col>
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
        <div className="box-btn-right">
          <button className="btn-participa">PARTICIPA AHORA</button>
        </div>
      </Container>
      <style jsx>
        {`
        {
            /* -------------------->   DESKTOP FIRST  <-------------------*/
          }
           {
            /* -------------------->   DESKTOP FIRST  <-------------------*/
          }
           {
            /* -------------------->   DESKTOP FIRST  <-------------------*/
          }
          .section-counter {
            display: flex;
            padding: 3rem;
            width: 100%;
            background-color: #fc6625;
            margin: 0rem auto;
            border-radius: 1rem;
          }
          .title-counter {
            font-family: "Baloo-Regular";
            font-weight: 900;
            font-size: 3.1rem;
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
          .count-days {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1rem auto;
            background: #3a487f;
            width: 7rem;
            height: 7rem;
            border-radius: 50%;
          }
          .count-days div {
            padding: 1rem;
            width: 6rem;
            height: 6rem;
            background: #ffff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            font-size: 1.7rem;
            line-height: 1.7rem;
            text-align: center;
            font-family: "Baloo-Regular";
            color: #3a487f;
          }
          .count-time {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .box-number {
            background: #ffff;
            padding: 0.5rem;
            width: 3rem;
            height: 3rem;
            border-radius: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-family: "Baloo-Regular";
            color: #3a487f;
          }
          .box-btn-right{
            display:flex;
            justify-content:flex-end;
            margin:1rem 0rem;
            position: relative
          }

          @media (max-width: 768px) {
            .section-counter {
              margin: 2rem auto;
              flex-direction: column;
              padding: 3.5rem 2rem;
            }
            .title-counter{
              font-size:1.6rem;
              text-align:center
            }
            .text-title {
              font-size:1.3rem
            }
            .card-texto{
              margin:1rem auto
            }
          }
        `}
      </style>
    </>
  );
};

export default BannerCounter;
