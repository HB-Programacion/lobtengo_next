import React from "react";
import AppLayout from "../../components/AppLayout";
import CardNosotros from "../../components/Nosotros/CardNosotros";
import SectionPreguntas from "../../components/Nosotros/SectionPreguntas";

const index = () => {
  return (
    <AppLayout>
      <div className="nosotros-home">
        <div className="nosotros-home--subtitle">¿Qué es Lobtengo?</div>
        <div className="nosotros-home--title">
          La única manera de llevarse un depa por S/60 soles
        </div>
        <div className="nosotros-home--img">
          <img src="./icons/nosotros/nosotros-home.svg" />
        </div>
        <div className="nosotros-home--descripcion1">
          Nuestra mecánica de sorteo limitado te ofrece{" "}
          <span>
            altísimas posibilidades de ganar en comparación a cualquier lotería
            del mercado.
          </span>
        </div>
        <div className="nosotros-home--descripcion2">
          Ideal para personas que desean acceder a una propiedad sin necesidad
          de iniciales, préstamos y demás trámites.
        </div>
      </div>
      <CardNosotros />
      <SectionPreguntas />
      <style jsx>
        {`
          body {
            margin-top: 5rem;
          }

          @media (min-width: 320px) {
            .nosotros-home {
              width: 80%;
              min-width: 320px;
              max-width: 470px;
              margin: 0 auto;
              text-align: center;
            }
            .nosotros-home--subtitle {
              color: #878787;
              font-family: "Baloo-Regular";
              font-size: 15px;
              font-weight: 600;
              margin: 1rem 0rem;
            }
            .nosotros-home--title {
              color: #3a487f;
              font-family: "Baloo-Regular";
              font-size: 25px;
              text-align: center;
              font-weight: 800;
              margin: 1rem 3rem;
            }
            .nosotros-home--img img {
              margin: 10rem auto;
              width: 60%;
            }
            .nosotros-home--descripcion1 {
              font-family: "neutra-text-bold";
              color: #878787;
              font-size: 15px;
              text-align: start;
              margin-bottom: 6rem;
            }
            .nosotros-home--descripcion1 span {
              color: #fc6625;
            }
            .nosotros-home--descripcion2 {
              font-family: "neutra-text-bold";
              color: #878787;
              font-size: 15px;
              text-align: start;
            }
          }

          @media (min-width: 1800px) {
          }
          @media (min-width: 1024px) {
            .nosotros-home--subtitle {
              margin: 2rem auto 0rem !important;
            }
          }
          @media (min-width: 768px) {
            .nosotros-home--subtitle {
              margin: 5rem auto 0rem;
            }
            .nosotros-home--img img {
              margin: 3rem auto;
            }
            .nosotros-home--descripcion1 {
              margin-bottom: 3rem !important;
            }
          }
          @media (min-width: 480px) {
            .nosotros-home--descripcion1 {
              margin-bottom: 3rem;
            }
          }
         
        `}
      </style>
    </AppLayout>
  );
};

export default index;
