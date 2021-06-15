import React from "react";
import Head from "next/head";
import Header from "../Header";

const index = ({ children }) => {
  return (
    <div>
      <Head>
        <title>lobtengo</title>
        <meta name="description" content="esto es descripcion"></meta>
      </Head>
      <Header></Header>
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
        `}
      </style>
    </div>
  );
};

export default index;
