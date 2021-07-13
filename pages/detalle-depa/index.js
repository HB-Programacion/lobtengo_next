import React, { Component, useEffect, useState } from "react";

import AppLayout from "../../components/AppLayout";
import { Carousel } from "react-bootstrap";

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
            image: "/icons/elDepa/carbon_area.svg"
        },
        {
            id: 2,
            image: "/icons/elDepa/mdi_elevator.svg"
        },
        {
            id: 3,
            image: "/icons/elDepa/fluent_bed-24-regular.svg"
        },
        {
            id: 4,
            image: "/icons/elDepa/cil_couch.svg"
        },
        {
            id: 5,
            image: "/icons/elDepa/cil_bathroom.svg"
        },
        {
            id: 6,
            image: "/icons/elDepa/fluent_building-multiple-24-regular.svg"
        },
        {
            id: 7,
            image: "/icons/elDepa/carbon_area.svg"
        },
        {
            id: 8,
            image: "/icons/elDepa/mdi_elevator.svg"
        },
        {
            id: 9,
            image: "/icons/elDepa/fluent_bed-24-regular.svg"
        },
        {
            id: 10,
            image: "/icons/elDepa/cil_couch.svg"
        },
        {
            id: 11,
            image: "/icons/elDepa/cil_bathroom.svg"
        },
        {
            id: 12,
            image: "/icons/elDepa/fluent_building-multiple-24-regular.svg"
        }
    ]

    const [detalles, setDetalles] = useState(InitialDetalles);

    return (
        <AppLayout>
            <div className="box-detalle-depa">
                <div className="section-text">
                    <div className="title-lobtengo-blue">Nombre del proyecto</div>
                    <div className="subtitle-gray">Lorem ipsum dolor sit amet</div>
                </div>
                <div className="section-banner">
                    <Carousel className="box-carousel">
                        {banner.map((ban) => (
                            <Carousel.Item className="carousel-item">
                                <img src={ban.image} alt="" className="w-100" />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                <div className="text-description-blue">
                    "Ubicado en la esquina de Ugarte y Moscoso con Javier Prado, en una zona céntrica de Lima para encontrar lo que quieras, incluso caminando: sp centros comerciales, tiendas, teatros, cines, restaurantes y más”.
                </div>
                <div className="fecha-sorteo">
                    <div className="img-sorteo">
                        <img src="./icons/detalleDepa/bi_calendar-check.svg" alt="" />
                    </div>
                    <div className="text-sorteo">Fecha de sorteo: xx/xx</div>
                </div>
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
                <div className="detalle-fotos">
                    <div className="detalle-fotos--img">
                        <img src="./icons/detalleDepa/img-1.svg" alt="" />
                    </div>
                    <div className="subtitle-gray texto-extra">
                        La casa cuenta con dos habitaciones y dos baños, además de dos amplias terrazas de más de 18 m2 cada una. <span>La vivienda es totalmente exterior y muy luminosa y por supuesto con vistas al mar.</span><br/><br/>La vivienda está completamente amueblada y equipada con todo lo necesario para que te puedas mudar hoy mismo, desde electrodomésticos en la cocina hasta TV en el salón. <span>Hemos pensado en todo para que asi tu no te preocupes por nada.</span>
                    </div>
                    <div className="detalle-fotos--img">
                        <img src="./icons/detalleDepa/img-2.svg" alt="" />
                    </div>
                    <div className="detalle-fotos--img">
                        <img src="./icons/detalleDepa/img-3.svg" alt="" />
                    </div>
                    <div className="depa-container-button">
                        <button className="btn-participa">
                                Participa ahora
                        </button>
                    </div>
                </div>
                <div className="section-map">
                    <div className="title-lobtengo-blue extra-maps">¡Mira la ubicación estratégica del inmueble!</div>
                    <div className="detalle-fotos--img">
                        <img src="./icons/detalleDepa/mapa.svg" alt="" />
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .title-lobtengo-blue{
                        font-size: 1.5rem;
                        text-align: center;
                        margin-top: 2rem;
                        font-weight: 100;
                    }
                    .subtitle-gray{
                        margin-bottom: 1.5rem;
                    }
                    .text-description-blue{
                        margin: 2rem 1rem;
                        font-style: oblique;
                    }
                    .fecha-sorteo{
                        display: flex;
                        margin: 1rem;
                        justify-content: center;
                    }
                    .text-sorteo{
                        font-family: 'neutra-text-bold';
                        margin-left: 0.8rem;
                        place-self: center;
                        color: #fc6625;
                    }
                    .depa-detalles{
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                        margin: 2rem 1rem;
                    }
                    .container-detalles{
                        padding: 0.2rem 1.5rem;
                        border: 1px solid #fc6625;
                    }
                    .texto-extra{
                        text-align: start;
                        margin: 0rem 1.5rem;
                    }
                    .texto-extra span{
                        color: #fc6625;
                    }
                    .detalle-fotos--img{
                        text-align: center;
                        margin: 1.5rem auto;
                    }
                    .detalle-fotos--img img{
                        width: 85%;
                    }
                    .depa-container-button{
                        text-align: -webkit-center;
                    }
                    .extra-maps{
                        margin: 3rem 2rem;
                    }
                    @media (min-width: 768px) {
                        .w-100{
                            width: 80% !important;
                        }
                        .text-description-blue{
                            margin: 2rem 4rem;
                            text-align: center;
                        }
                        .container-detalles{
                            border: none;
                        }
                        .depa-detalles{
                            margin: 2rem 5rem;
                        }
                        .detalle-fotos{
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            margin: 2rem 1rem;
                        }
                    }
                `}
            </style>
        </AppLayout>
    )
}

export default index;