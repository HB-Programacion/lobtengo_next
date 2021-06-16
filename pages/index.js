import React, { Component, useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import AppLayout from "../components/AppLayout";
import { CardDeck, Carousel, Col, Container, Row } from "react-bootstrap";
import CardStep from '../components/CardStep';
import BannerCounter from '../components/BannerCounter'

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
        <div className="section-step">
          <Container fluid="true">
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
                    <button className="btn-participa">
                      PARTICIPA AHORA
                    </button>
                  </div>
                </Col>
                <Col xs={12} sm={9} md={9} lg={9} xl={9}>
                  <CardStep/>
                </Col>
              </Row>
          </Container>
        </div>
        <BannerCounter/>
      </div>
      <style jsx>
        {`
        .section-banner {
            background-size: cover;
            justify-content: left;
            align-items: right;
            border-bottom: 1px solid #5a5a5a;
          }
          .text-comolobtengo {
            text-align: center;
            font-family: "mont-regular";
            margin-top: 10rem;
            padding: 10px 60px;
            text-align: start;
          }
          .title-lobtengo{
            font-family: "Baloo-Regular";
            font-weight: 700;
            font-size: 38px;
            color: #3A487F;
          }
          .subtitle-first{
            font-family: "neutra-text-bold";
            color: #878787;
            font-size: 20px;
          }
          .subtitle-second{
            font-family: "neutra-text-bold";
            color: #FC6625;
            font-size: 15px;
          }
          .btn-participa{
            background-color: #3A487F;
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
        @media (max-width: 768px) {
            .view-mobile {
              display: block;
            }
          }
        `}
      </style>
    </AppLayout>
  )
}

export default index
