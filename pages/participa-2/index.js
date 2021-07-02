import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import AppLayout from "../../components/AppLayout";
import FormSignup from "../../components/CrearUsuario/FormSignup";
import CardParticipa from "../../components/Participa-2/CardParticipa";

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
            <div className="participa-home">
                <div className="participa-home--subtitle">
                    Escoge tus tickets
                </div>
                <div className="participa-home--title">
                    ¡Mientras más compres, más posibilidades tendrás de ganar el premio!
                </div>
                <div className="container-card">
                    <CardParticipa />
                </div>
                <div className="participa-ganar">
                    <img src="/icons/participa/cerca-ganar.svg" alt="" />
                    <div className="participa-ganar--texto">
                        ¡Estas así de cerca de ganar!
                    </div>
                </div>
                <div className="participa-pagar">
                    <div className="participa-pagar--text1">Pagarás:</div>
                    <div className="participa-pagar--costo">S/0</div>
                    <div className="participa-pagar--text2">¡Tu puedes ser el próximo ganador!</div>
                    <div className="btn-comprar">
                        <button>COMPRAR</button>
                    </div>
                </div>
                <div className="participa-seguro">
                    <img src="/icons/participa/mayor.svg" alt="18" />
                    <img src="/icons/participa/candado.svg" alt="seguro" />
                    <div className="participa-seguro---text">PAGO SEGURO</div>
                    <img src="/icons/participa/tarjeta.svg" alt="tarjetas" />
                </div>
            </div>
            <style jsx global>
                {`
                    .participa-home {
                        width: 90%;
                        min-width: 320px;
                        margin: 0 auto;
                        text-align: center;
                    }
                    .participa-home--subtitle {
                        color: #fc6625;
                        font-family: "Baloo-Regular";
                        font-size: 25px;
                        font-weight: 600;
                        margin: 0.5rem 0rem;
                    }
                    .participa-home--title {
                        color: #878787;
                        font-family: "Baloo-Regular";
                        font-size: 25px;
                        text-align: center;
                        font-weight: 800;
                        margin: 0.5rem 1.5rem 1.5rem;
                        text-transform: uppercase;
                    }
                    .participa-ganar img{
                        margin: 2rem auto;
                        width: 52%;
                    }
                    .participa-ganar--texto {
                        color: #3A487F;
                        font-family: "Baloo-Regular";
                        font-size: 25px;
                        text-align: center;
                        font-weight: 800;
                        margin: 0.5rem 1.5rem 1.5rem;
                    }
                    .container-card{
                        display: flex;
                    }
                    .participa-home--descripcion2 {
                        color: #878787;
                        font-family: "neutra-text-bold";
                        font-size: 25px;
                        text-align: center;
                        font-weight: 700;
                        margin: 0.5rem 2rem 1.5rem;
                        text-align: start;
                    }
                    .participa-pagar--text1{
                        text-align: start;
                        font-family: 'baloo-regular';
                        color: #FC6625;
                        font-size: 1.2rem;
                        margin: 0 2rem;
                    }
                    .participa-pagar--costo{
                        font-family: 'baloo-regular';
                        color: #FC6625;
                        font-size: 4.5rem;
                    }
                    .participa-pagar--text2{
                        color: #3A487F;
                        font-family: "Baloo-Regular";
                        font-size: 1rem;
                        text-align: center;
                        font-weight: 800;
                        margin: 0.5rem 1.5rem 1.5rem;
                    }
                    .btn-comprar {
                        text-align: center;
                    }
                    .btn-comprar button {
                        background-color: #3a487f;
                        font-size: 1rem;
                        border: none;
                        padding: 0.8rem 2.2rem;
                        color: #ffffff;
                        border-radius: 40px;
                        margin: 10px 0px 100px 0px;
                        font-family: "neutra-text-bold";
                    }
                    .participa-seguro{
                        display: flex;
                        justify-content: center;
                        place-content: space-between;
                        margin: 0rem 1.5rem 5rem;
                        align-items: center;
                    }
                    participa-seguro---text{
                        color: #808080;
                        font-family: 'Baloo 2';
                        font-size: 0.8rem;
                    }
                    @media (min-width: 768px) {
                        .participa-home--title{
                            font-size: 1.3rem;
                        }
                        .participa-home--subtitle{
                            font-size: 1.3rem;
                        }
                        .participa-seguro{
                            place-content: center;
                        }
                        .participa-ganar img{
                            width: 15%;
                        }
                `}
            </style>
        </AppLayout>
    );
};

export default index;
