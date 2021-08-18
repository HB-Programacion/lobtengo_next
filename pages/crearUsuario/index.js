import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import AppLayout from "../../components/AppLayout";
import FormSignup from "../../components/CrearUsuario/FormSignup";
import Stepper from "../../components/Stepper/Stepper";

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
        <Stepper />
        <div className="box-title-signup">
          <div className=" subtitle-gray cl-orange">
            Regístrate o inicia sesión
          </div>
          <div className="signup-home--title subtitle-gray">
            ¡Aquí inicia la posibilidad de hacer tu sueño realidad!
          </div>
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
            <div className="title-lobtengo-blue ">Hola, bienvenido</div>
            <div className=" subtitle-gray signup-home--title2">
              Comienza tu participación creando un perfil o ingresando a tu
              cuenta.
            </div>
            <div className="btn-signup">
              <button>Crear usuario</button>
              <button>Iniciar sesión</button>
            </div>
          </div>
        </div>

        <FormSignup />
      </div>
      <style jsx>
        {`
           {
            /* -------------------->   MOBILE FIRST  <-------------------*/
          }
           {
            /* -------------------->   MOBILE FIRST  <-------------------*/
          }
           {
            /* -------------------->   MOBILE FIRST  <-------------------*/
          }

          .signup-home {
            width: 90%;
            min-width: 320px;
            margin: 2rem auto;
            text-align: center;
          }

          .signup-home--title2 {
            color: #3a487f;
          }
          .signup-home--img img {
            width: 100%;
            height: auto;
          }
          .btn-signup {
            position: relative;
            top: 1rem;
            bottom: 1rem;
            display: flex;
            justify-content: center;
          }
          .btn-signup button {
            background-color: #3a487f;
            font-size: 0.8rem;
            border: none;
            padding: 1rem 1rem;
            color: #ffffff;
            border-radius: 40px;
            margin: 0.5rem;
            font-family: "neutra-text-bold";
            text-transform: uppercase;
          }

          .desktop-text {
            position: relative;
            top: 1rem;
          }
          @media (min-width: 768px) {
            .box-title-signup .subtitle-gray{
              text-align:center!important
            }
            .container-desktop {
              display: flex;
              flex-flow: row-reverse;
              margin:0 auto
            }
            .desktop-text {
              min-width: 25rem;
            }
            .btn-signup {
              text-align: start;
            }
            .btn-signup button:first-child {
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
            .signup-home {
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

            .signup-form-container {
              display: none;
            }
            .signup-home--img img {
              border-radius: 15px;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

export default index;
