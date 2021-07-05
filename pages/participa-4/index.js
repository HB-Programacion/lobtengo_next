import React, { useState } from "react";
import AppLayout from "../../components/AppLayout";
import CardTickets from "../../components/Participa-3/CardTickets";

const index = () => {
    return (
        <AppLayout>
            <div className="participa4-home">
                <div className="participa4-home--subtitle">
                    Escoge tu método de pago
                </div>
                <div className="participa4-home--title">
                    Si tienes un cupón de descuento, este es el lugar para usarlo
                </div>
                <div className="participa-time-container">
                    <div className="participa4-time">
                        <div className="participa4-time--minutes">10m</div>
                        <div className="participa4-time--seconds">5s</div>
                    </div>
                </div>
                <div className="participa4-tickets">
                    <div className="participa4-tickets--texto">
                        Guardamos tus tickets durante 15 minutos.
                    </div>
                </div>
                <div className="participa4-tickets">
                    <CardTickets/>
                </div>
                <div className="participa4-seguro">
                    <img src="/icons/participa/mayor.svg" alt="18" />
                    <img src="/icons/participa/candado.svg" alt="seguro" />
                    <div className="participa4-seguro---text">PAGO SEGURO</div>
                    <img src="/icons/participa/tarjeta.svg" alt="tarjetas" />
                </div>
            </div>
            <style jsx global>
                {`
                    .participa4-home {
                        width: 90%;
                        min-width: 320px;
                        margin: 0 auto;
                        text-align: center;
                    }
                    .participa4-home--subtitle {
                        color: #fc6625;
                        font-family: "Baloo-Regular";
                        font-size: 1.5rem;
                        font-weight: 300;
                        margin: 0.5rem 0rem;
                    }
                    .participa4-home--title {
                        color: #878787;
                        font-family: "Baloo-Regular";
                        font-size: 1.2rem;
                        text-align: center;
                        font-weight: 200;
                        margin: 0rem 1rem;
                    }
                    .participa4-ganar img{
                        margin: 2rem auto;
                        width: 52%;
                    }
                    .container-card{
                        display: flex;
                    }
                    .participa4-home--descripcion2 {
                        color: #878787;
                        font-family: "neutra-text-bold";
                        font-size: 25px;
                        text-align: center;
                        font-weight: 700;
                        margin: 0.5rem 2rem 1.5rem;
                        text-align: start;
                    }argin: 0 2rem;
                    }
                    .participa4-seguro{
                        display: flex;
                        justify-content: center;
                        place-content: space-between;
                        margin: 0rem 1.5rem 5rem;
                        align-items: center;
                    }
                    .participa4-seguro---text{
                        color: #808080;
                        font-family: 'Baloo 2';
                        font-size: 0.8rem;
                    }
                    .participa-time-container{
                        text-align: -webkit-center;
                    }
                    .participa4-time{
                        display: flex;
                        width: 40%;
                        background: #3A487F;
                        padding: 1rem 1rem;
                        border-radius: 1rem;
                        justify-content: center;
                        margin: 1rem auto;
                    }
                    .participa4-time--minutes{
                        background-color: #ffffff;
                        border-radius: 0.2rem;
                        margin: 0rem 0.1rem;
                        padding: 0.3rem 0.5rem;
                        min-width: 3rem;
                        color: #3A487F;
                        font-family: 'neutra-text-bold';
                    }
                    .participa4-time--seconds{
                        background-color: #ffffff;
                        border-radius: 0.2rem;
                        margin: 0rem 0.1rem;
                        padding: 0.3rem 0.5rem;
                        min-width: 3rem;
                        color: #3A487F;
                        font-family: 'neutra-text-bold';
                    }
                    .participa4-tickets--texto{
                        font-family: 'neutra-text-bold';
                        color: #3A487F;
                        font-size: 1rem;
                        margin: 1rem 4rem;
                    }
                    @media (min-width: 768px) {
                        .participa4-home--title{
                            font-size: 1.3rem;
                        }
                        .participa4-home--subtitle{
                            font-size: 1.3rem;
                        }
                        .participa4-seguro{
                            place-content: center;
                        }
                        .participa4-ganar img{
                            width: 15%;
                        }
                `}
            </style>
        </AppLayout>
    );
};

export default index;
