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

    const InitialDetalles =[
        {
            id: 1,
            image: "/icons/elDepa/carbon_area.svg",
            texto: "80 m2"
        },
        {
            id: 2,
            image: "/icons/elDepa/mdi_elevator.svg",
            texto: "Ascensor"
        },
        {
            id: 3,
            image: "/icons/elDepa/fluent_bed-24-regular.svg",
            texto: "3 dormitorios"
        },
        {
            id: 4,
            image: "/icons/elDepa/cil_couch.svg",
            texto: "Amueblada"
        },
        {
            id: 5,
            image: "/icons/elDepa/cil_bathroom.svg",
            texto: "2 baños"
        },
        {
            id: 6,
            image: "/icons/elDepa/fluent_building-multiple-24-regular.svg",
            texto: "Edificio privado"
        },
    ]

    const [detalles, setDetalles] = useState(InitialDetalles);

    const InitialExtras =[
        {
            id: 1,
            image: "/icons/elDepa/fa-solid_swimming-pool.svg",
            texto: "Piscina"
        },
        {
            id: 2,
            image: "/icons/elDepa/cil_garage.svg",
            texto: "Garaje privado"
        },
        {
            id: 3,
            image: "/icons/elDepa/bi_box-seam.svg",
            texto: "Depósito"
        }
    ]

    const [extras, setExtras] = useState(InitialExtras);

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
                        <div className="depa-detalles">
                            {
                                detalles.map((detalle) => (
                                    <div className="container-detalles">
                                        <div className="detalles-img">
                                            <img src={detalle.image} alt="" />
                                        </div>
                                        <div className="detalles-text">{detalle.texto}</div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="subtitle-orange2 subtitle-depa" >
                            El Depa cuenta además con:
                        </div>
                        <div className="depa-detalles">
                            {
                                extras.map((extra) => (
                                    <div className="container-detalles">
                                        <div className="detalles-img">
                                            <img src={extra.image} alt="" />
                                        </div>
                                        <div className="detalles-text">{extra.texto}</div>
                                    </div>
                                ))
                            }
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
                <div className="section-imagen-banner">
                    <img src="./icons/elDepa/img-banner-principal.svg" alt="" />
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
                    .depa-detalles{
                        display: grid;
                        grid-template-columns: 50% auto;
                        margin: 1rem;
                    }
                    .container-detalles{
                        display: flex;
                        padding: 1rem 0rem;
                    }
                    .detalles-img{
                        margin-right: 0.8rem;
                    }
                    .detalles-img img{
                        width: 130%;
                    }
                    .detalles-text{
                        font-family: 'neutra-text-bold';
                        color: #878787;
                    }
                    .section-imagen-banner{
                        text-align: center;
                        margin: 2rem auto;
                    }
                    @media (min-width: 768px) {
                    }
                `}
            </style>
        </AppLayout>
    );
};

export default index;
