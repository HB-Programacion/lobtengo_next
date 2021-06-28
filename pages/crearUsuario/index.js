import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import AppLayout from "../../components/AppLayout";
import FormSignup from "../../components/CrearUsuario/FormSignup";

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
            <div className="signup-home">
                <div className="signup-home--subtitle">
                    Regístrate o inicia sesión
                </div>
                <div className="signup-home--title">
                    ¡Aquí inicia la posibilidad de hacer tu sueño realidad!
                </div>
                <div className="container-desktop">
					<div className="signup-home--img">
						<Carousel className="box-carousel">
							{banner.map((ban) => (
								<Carousel.Item className="carousel-item">
									<img src={ban.image} alt="" className="w-100" />
								</Carousel.Item>
							))}
						</Carousel>
					</div>
					<div className="desktop-text">
						<div className="signup-home--bienvenida">Hola, bienvenido</div>
						<div className="signup-home--title2">
							Comienza tu participación creando un perfil o ingresando a
							tu cuenta.
						</div>
						<div className="btn-signup">
							<button>Crear usuario</button>
							<button>Iniciar sesión</button>
						</div>
					</div>
				</div>
                <div className="signup-home--descripcion2">
                    Te pedimos el registro para poder contactarte si te toca.
                </div>
                <FormSignup />
            </div>
            <style jsx global>
                {`
                    .signup-home {
                        width: 90%;
                        min-width: 320px;
                        margin: 0 auto;
                        text-align: center;
                    }
                    .signup-home--subtitle {
                        color: #fc6625;
                        font-family: "Baloo-Regular";
                        font-size: 25px;
                        font-weight: 600;
                        margin: 0.5rem 0rem;
                    }
                    .signup-home--title {
                        color: #878787;
                        font-family: "Baloo-Regular";
                        font-size: 25px;
                        text-align: center;
                        font-weight: 800;
                        margin: 0.5rem 1.5rem 1.5rem;
                    }
                    .signup-home--bienvenida {
                        font-family: "Baloo-Regular";
                        color: #3a487f;
                        font-size: 30px;
                        font-weight: 600;
                        margin: 1.5rem 0rem 0.5rem;
                    }
                    .signup-home--title2 {
                        color: #3a487f;
                        font-family: "neutra-text-bold";
                        font-size: 25px;
                        text-align: center;
                        font-weight: 800;
                        margin: 0.5rem 1.5rem 1.5rem;
                    }
                    .signup-home--img img {
                        width: 100%;
                        height: auto;
                    }
                    .btn-signup button {
                        background-color: #3a487f;
                        font-size: 15px;
                        border: none;
                        padding: 1rem 1rem;
                        color: #ffffff;
                        border-radius: 40px;
                        margin: 0rem 0.5rem 1rem 1rem;
                        font-family: "neutra-text-bold";
                        text-transform: uppercase;
                    }
                    .signup-home--descripcion2 {
                        color: #878787;
                        font-family: "neutra-text-bold";
                        font-size: 25px;
                        text-align: center;
                        font-weight: 700;
                        margin: 0.5rem 2rem 1.5rem;
                        text-align: start;
                    }
                    @media (min-width: 768px) {
						.container-desktop{
							display:flex;
							flex-flow: row-reverse;
						}
						.desktop-text{
							min-width: 25rem;
						}
						.btn-signup {
							text-align: start;
						}
						.btn-signup button:first-child{
							background-color: #fc6625;
						}
						.btn-signup button {
							background-color: #3a487f;
							font-size: 0.8rem;
							border: none;
							padding: 0.5rem 5rem;
							color: #ffffff;
							border-radius: 40px;
							margin: 0rem 0.5rem 1rem 1rem;
							font-family: "neutra-text-bold";
							text-transform: uppercase;
                    	}
						.signup-home{
							margin: 3rem 0rem 5rem;
						}
						.signup-home--title2 {
							font-size: 1.2rem;
							text-align: start;
						}
						.signup-home--bienvenida {
							font-size: 2rem;
							text-align: start;
							margin-left: 1.5rem;
						}
						.signup-home--descripcion2{
							display:none;
						}
						.signup-form-container{
							display: none;
						}
						.signup-home--img img {
							border-radius: 15px;
						}
                `}
            </style>
        </AppLayout>
    );
};

export default index;
