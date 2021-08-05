import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../Header/Header";
import HeaderMobile from "../Header/HeaderMobile";
import Footer from "../Footer/Footer";

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
        <link rel="shortcut icon" href="/icons/home/lobtengo.svg" />
        <title>Lobtengo</title>
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
      <Footer />
      <style jsx global>
        {`
           {
            /* -------------------->   DESKTOP FIRST  <-------------------*/
          }
           {
            /* -------------------->   DESKTOP FIRST  <-------------------*/
          }
           {
            /* -------------------->   DESKTOP FIRST  <-------------------*/
          }
          html {
            font-family: 62.5%;
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
            padding: 0.6rem 0.9rem;
            color: #ffffff;
            border-radius: 20px;
            margin: 0 auto;
            margin-top: 10px;
            font-family: "neutra-text-bold";
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.75rem;
            text-transform: uppercase;
          }
          .title-lobtengo-blue {
            font-family: "Baloo-Regular";
            font-weight: 700;
            font-size: 1.8rem;
            color: #3a487f;
            margin: 1rem;
          }
          .title-lobtengo-blue-2 {
            font-family: "Baloo-Regular";
            font-weight: 700;
            font-size: 1.6rem;
            color: #3a487f;
            margin: 0rem 1rem;
          }
          .title-lobtengo-orange {
            font-family: "Baloo-Regular";
            font-weight: 700;
            font-size: 1.8rem;
            color: #fc6625;
          }
          .title-lobtengo-orange-2 {
            font-family: "Baloo-Regular";
            font-weight: 700;
            font-size: 1.6rem;
            color: #fc6625;
            margin: 0rem 1rem;
          }
          .title-lobtengo-orange-3 {
            font-family: "Baloo-Regular";
            font-weight: 500;
            font-size: 1rem;
            color: #fc6625;
            margin: 0rem 1rem;
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
          .centerText {
            text-align: center;
            margin: 0rem 0.8rem;
          }

          .text-description-blue {
            font-size: 1rem;
            font-family: "neutra-text-bold";
            color: #3a487f;
            font-weight: 400;
            text-align: start;
            line-height: 1rem;
            text-align: center;
            margin: 1rem;
          }
          .text-description-gray {
            font-size: 1rem;
            font-family: "neutra-text-bold";
            color: #878787;
            font-weight: 400;
            text-align: start;
            line-height: 1rem;
            text-align: justify;
            margin: 1rem;
          }
          .subtitle-gray {
            font-family: "neutra-text-bold";
            color: #878787;
            font-size: 1rem;
            text-align: center;
            margin: 0rem 3rem;
          }
          .subtitle-blue {
            font-family: "neutra-text-bold";
            color: #3a487f;
            font-size: 1rem;
            margin: 0rem 3rem;
            text-align: center;
          }
          .subtitle-orange {
            font-family: "neutra-text-bold";
            color: #fc6625;
            font-size: 1rem;
            margin: 0rem 3rem;
            text-align: center;
          }
          .subtitle-orange2 {
            font-family: "neutra-text-bold";
            color: #fc6625;
            font-size: 0.8rem;
            margin: 0rem 3rem;
          }
          .section-img {
            text-align: center;
            margin: 3rem auto;
          }
          @media (max-width: 768px) {
            .title-lobtengo-blue {
              font-size: 1.6rem;
              margin:0rem;
              text-align:center
            }
            .btn-participa {
              margin: 1rem auto;
            }
            .subtitle-gray,.subtitle-orange  {
              margin: 0rem
            }
          }
        `}
      </style>
    </div>
  );
};

export default index;
