import React, { Component, useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import AppLayout from "../components/AppLayout";
import { CardDeck, Carousel, Col, Container, Row } from "react-bootstrap";
import CardStep from '../components/CardStep';

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
        <Carousel className="box-carousel">
          {banner.map((ban) => (
            <Carousel.Item className="carousel-item">
              <img src={ban.image} alt="" className="w-100" />
            </Carousel.Item>
          ))}
        </Carousel>
        <CardStep/>
      </div>
      <style jsx>
        {`
          .box-banner {
            height: 50rem;
            width: auto;
            position: relative;
          }

          .view-mobile {
            display: none;
          }

          .box-home {
            background-size: cover;
            justify-content: left;
            align-items: right;
            border-bottom: 1px solid #5a5a5a;
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
