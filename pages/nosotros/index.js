import React from "react";
import Image from "next/image";
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
          <img
            src="/icons/nosotros/nosotros-home.svg"
            alt="logo lobtengo"
          />
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
      <style jsx global>
        {`
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
          .nosotros-home--img img{
            width: 16rem;
            height: 18rem;
          }
          .nosotros-home--descripcion1 {
            font-family: "neutra-text-bold";
            color: #878787;
            font-size: 20px;
            text-align: start;
            margin: 2rem auto;
          }
          .nosotros-home--descripcion1 span {
            color: #fc6625;
          }
          .nosotros-home--descripcion2 {
            font-family: "neutra-text-bold";
            color: #878787;
            font-size: 20px;
            text-align: start;
          }

          @media (min-width: 1800px) {
          }
          @media (min-width: 1024px) {
          }
          @media (min-width: 768px) {
          }
          @media (min-width: 480px) {
          }
          @media (min-width: 320px) {
          }
        `}
      </style>
    </AppLayout>
  );
};

export default index;
