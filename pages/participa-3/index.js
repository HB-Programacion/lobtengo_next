import React, { useState } from "react";
import Image from "next/image";
import AppLayout from "../../components/AppLayout";
import CardTickets from "../../components/Participa-3/CardTickets";

const index = () => {

    return (
        <AppLayout>
            <div className="participa3-home">
                <div className="participa3-home--subtitle">
                    Confirmar
                </div>
                <div className="participa3-home--title">
                    Asegúrate que la información sea, reservaremos tus tickets mientras realizas el pago
                </div>
                <div className="participa-time-container">
                    <div className="participa3-time">
                        <div className="participa3-time--minutes">13m</div>
                        <div className="participa3-time--seconds">6s</div>
                    </div>
                </div>
                <div className="participa3-tickets">
                    <div className="participa3-tickets--texto">
                        Guardamos tus tickets durante 15 minutos.
                    </div>
                </div>
                <div className="participa3-tickets">
                    <CardTickets/>
                </div>
                <div className="participa3-seguro">
                    <img src="/icons/participa/mayor.svg" alt="18" />
                    <img src="/icons/participa/candado.svg" alt="seguro" />
                    <div className="participa3-seguro---text">PAGO SEGURO</div>
                    <img src="/icons/participa/tarjeta.svg" alt="tarjetas" />
                </div>
            </div>
            <style jsx global>
                {`
                    .participa3-home {
                        width: 90%;
                        min-width: 320px;
                        margin: 0 auto;
                        text-align: center;
                    }
                    .participa3-home--subtitle {
                        color: #fc6625;
                        font-family: "Baloo-Regular";
                        font-size: 1.5rem;
                        font-weight: 300;
                        margin: 0.5rem 0rem;
                    }
                    .participa3-home--title {
                        color: #878787;
                        font-family: "Baloo-Regular";
                        font-size: 1.2rem;
                        text-align: center;
                        font-weight: 200;
                        margin: 0rem 1rem;
                    }
                    .participa3-ganar img{
                        margin: 2rem auto;
                        width: 52%;
                    }
                    .container-card{
                        display: flex;
                    }
                    .participa3-home--descripcion2 {
                        color: #878787;
                        font-family: "neutra-text-bold";
                        font-size: 25px;
                        text-align: center;
                        font-weight: 700;
                        margin: 0.5rem 2rem 1.5rem;
                        text-align: start;
                    }argin: 0 2rem;
                    }
                    .participa3-seguro{
                        display: flex;
                        justify-content: center;
                        place-content: space-between;
                        margin: 0rem 1.5rem 5rem;
                        align-items: center;
                    }
                    .participa3-seguro---text{
                        color: #808080;
                        font-family: 'Baloo 2';
                        font-size: 0.8rem;
                    }
                    .participa-time-container{
                        text-align: -webkit-center;
                    }
                    .participa3-time{
                        display: flex;
                        width: 40%;
                        background: #3A487F;
                        padding: 1rem 1rem;
                        border-radius: 1rem;
                        justify-content: center;
                        margin: 1rem auto;
                    }
                    .participa3-time--minutes{
                        background-color: #ffffff;
                        border-radius: 0.2rem;
                        margin: 0rem 0.1rem;
                        padding: 0.3rem 0.5rem;
                        min-width: 3rem;
                        color: #3A487F;
                        font-family: 'neutra-text-bold';
                    }
                    .participa3-time--seconds{
                        background-color: #ffffff;
                        border-radius: 0.2rem;
                        margin: 0rem 0.1rem;
                        padding: 0.3rem 0.5rem;
                        min-width: 3rem;
                        color: #3A487F;
                        font-family: 'neutra-text-bold';
                    }
                    .participa3-tickets--texto{
                        font-family: 'neutra-text-bold';
                        color: #3A487F;
                        font-size: 1rem;
                        margin: 1rem 4rem;
                    }
                    @media (min-width: 768px) {
                        .participa3-home--title{
                            font-size: 1.3rem;
                        }
                        .participa3-home--subtitle{
                            font-size: 1.3rem;
                        }
                        .participa3-seguro{
                            place-content: center;
                        }
                        .participa3-ganar img{
                            width: 15%;
                        }
                `}
            </style>
        </AppLayout>
    );
};

export default index;
