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
            font-size: 0.98vw !important;
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
            padding:.7rem .9rem;
            color: #ffffff;
            border-radius: 20px;
            margin-top: 10px;
            font-family: "neutra-text-bold";
            display:flex;
            justify-content:center;
            align-items:center
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
