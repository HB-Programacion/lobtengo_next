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
