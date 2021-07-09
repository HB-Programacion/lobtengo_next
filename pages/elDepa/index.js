import React, { Component, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AppLayout from "../../components/AppLayout";
import { CardDeck, Carousel, Col, Container, Row } from "react-bootstrap";

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
            <div className="box-depa">
                <div className="section-banner">
                    <Carousel className="box-carousel">
                        {banner.map((ban) => (
                            <Carousel.Item className="carousel-item">
                                <img src={ban.image} alt="" className="w-100" />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                <div className="section-texto">
                    <div className="text-comolobtengo">
                        <h3 className="title-lobtengo-blue depa-title">
                            Tu nuevo depa
                        </h3>
                        <h6 className="subtitle-orange depa-subtitle1">
                            ¡Descúbrelo!
                        </h6>
                        <h6 className="text-description-gray depa-description">
                        Ubicado en la esquina de Ugarte y Moscoso con Javier Prado, en una zona céntrica de Lima para encontrar lo que quieras, incluso caminando: sp centros comerciales, tiendas, teatros, cines, restaurantes y más”.
                        </h6>
                        <div className="subtitle-orange2 subtitle-depa" >
                            El Depa cuenta además con:
                        </div>
                    </div>
                    <div className="depa-container-button">
                        <button className="btn-participa">
                                Mira los detalles
                        </button>
                    </div>
                </div>
                <div className="section-participa">
                    <div className="title-lobtengo-orange centerText">
                        Tú puedes ser el próximo ganador
                    </div>
                    <div className="depa-container-button">
                        <button className="btn-participa">
                                Participa ahora
                        </button>
                    </div>
                </div>
                <div className="section-more-info">
                    <div className="title-lobtengo-blue centerText">
                        Conócelo un poco más
                    </div>
                    <div className="subtitle-gray">
                        Este depa tiene <span>los mejores alrededores</span> para que te sientas cómodo y seguro.
                    </div>
                </div>
                <div className="section-ganadores">
                    <div className="title-lobtengo-blue centerText">
                        ¡Ellos ya ganaron!
                    </div>
                    <div className="subtitle-gray subtitle-gray-extra">
                        Conoce aqui a los ganadores de nuestros sorteos anteriores que ya disfrutan de su depa soñado. Participa que <span>tu también puedes ser uno de los afortunados.</span>
                    </div>
                    <div className="depa-container-button">
                        <button className="btn-participa">
                                ver sorteos anteriores
                        </button>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .depa-title{
                        text-align: center;
                        margin: 2rem auto 0rem;
                    }
                    .depa-subtitle1{
                        text-align: center;
                        font-family: 'baloo-regular' !important;
                    }
                    .depa-container-button{
                        text-align: -webkit-center;
                    }
                    .section-participa{
                        margin: 6rem auto;
                    }
                    .subtitle-gray span{
                        color: #fc6625;
                    }
                    .subtitle-depa{
                        font-size: 1rem !important;
                        margin: 0rem 1rem !important;
                    }
                    .subtitle-gray-extra{
                        margin: 0rem 2rem !important;
                    }
                    .section-ganadores{
                        margin-bottom: 5rem;
                    }

                    @media (min-width: 768px) {
                    }
                `}
            </style>
        </AppLayout>
    );
};

export default index;
