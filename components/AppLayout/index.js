import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../Header/Header";
import HeaderMobile from "../Header/HeaderMobile";

const index = ({ children }) => {
  const [menuBurgerOpen, setmenuBurgerOpen] = useState(false);
  const mostrarMenuMobile = () => {
    console.log("abrir");
    setmenuBurgerOpen(true);
  };
  const ocultarMenuMobile = () => {
    console.log("cerrar");
    setmenuBurgerOpen(false);
  };

  return (
    <div>
      <Head>
        <title>lobtengo</title>
        <meta name="description" content="esto es descripcion"></meta>
      </Head>
      <Header
        mostrarMenuMobile={mostrarMenuMobile}
        ocultarMenuMobile={ocultarMenuMobile}
      />
      <HeaderMobile
        menuBurgerOpen={menuBurgerOpen}
        ocultarMenuMobile={ocultarMenuMobile}
      />
      <main>{children}</main>
      <style jsx global>
        {`
          html {
            font-family:62.5%;
            font-family: "mont-heavy";
          }
          @font-face {
            font-family: "baloo-regular";
            src: url(/fonts/Baloo-Regular.ttf);
          }

          @font-face {
            font-family: "neutra-text-bold";
            src: url(/fonts/neutra-text-bold-5871e1605afa2.otf);
          }

          @font-face {
            font-family: "neutra-text-ligth";
            src: url(/fonts/neutra-text-light-5872613aeda5b.otf);
          }
          @font-face {
            font-family: "neutra-text-ligth-demi";
            src: url(/fonts/Neutra-Text-Light-Demi.ttf);
          }

          .cl-plomo {
            color: #878787;
          }

          .btn-participa {
            background-color: #3a487f;
            border: none;
            padding:.6rem .9rem;
            color: #ffffff;
            border-radius: 20px;
            margin-top: 10px;
            font-family: "neutra-text-bold";
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:.75rem
          }
          .title-lobtengo {
            font-family: "Baloo-Regular";
            font-weight: 700;
            font-size: 2rem;
            color: #3a487f;
          }
          .subtitle-lobtengo {
            text-align-last: center;
            font-size: 1.3rem;
            font-weight: 700;
            font-family: "neutra-text-bold";
            color: #3a487f;
            text-align: start;
            letter-spacing: 0.01rem;
            line-height: 1.6rem;
          }

          .text-description-blue {
            font-size: 0.8rem;
            font-family: "neutra-text-bold";
            color: #3a487f;
            font-weight: 400;
            text-align: start;
            line-height: 1rem;
            text-align: center;
          }
           .subtitle-gray {
            font-family: "neutra-text-bold";
            color: #878787;
            font-size: 1.3rem;
          }

          .subtitle-orange {
            font-family: "neutra-text-bold";
            color: #fc6625;
            font-size: 1.3rem;
          }

          @media (max-width: 768px) {
            html {
              font-size: 4.6vw !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default index;
