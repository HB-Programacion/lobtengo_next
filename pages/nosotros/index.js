import React from "react";
import Image from "next/image";
import AppLayout from "../../components/AppLayout";
import CardNosotros from "../../components/Nosotros/CardNosotros";
import SectionPreguntas from "../../components/Nosotros/SectionPreguntas";
import { Container } from "react-bootstrap";

const index = () => {
  return (
    <AppLayout>
      <Container>
        <div className="nosotros-home">
          <div className="subtitle-gray">¿Qué es Lobtengo?</div>
          <div className="title-lobtengo-blue pl-3 pr-3">
            La única manera de llevarse un depa por S/60 soles
          </div>
          <div className="nosotros-home--img">
            <img src="/icons/nosotros/nosotros-home.svg" alt="logo lobtengo" />
          </div>
         <Container>
         <p className="subtitle-gray text-left">
            Nuestra mecánica de sorteo limitado te ofrece{" "}
            <span className="cl-orange text-left">
              altísimas posibilidades de ganar en comparación a cualquier
              lotería del mercado.
            </span>
          </p>
          <p className="subtitle-gray text-left mt-2">
            Ideal para personas que desean acceder a una propiedad sin necesidad
            de iniciales, préstamos y demás trámites.
          </p>
         </Container>
        </div>
      </Container>
      <CardNosotros />
      <SectionPreguntas />
      <style jsx global>
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

          .pl-3{
            padding-left:1rem
          }
          .pr-3{
            padding-right:1rem
          }
          .nosotros-home {
            width: 90%;
            min-width: 320px;
            max-width: 470px;
            margin: 0 auto;
            text-align: center;
            position:relative;
            top: 2.5rem
          }

          .nosotros-home--img img {
            width: 16rem;
            height: 18rem;
          }
          
          .nosotros-home--descripcion2 {
            font-family: "neutra-text-bold";
            color: #878787;
            font-size: 20px;
            text-align: start;
          }

          @media (min-width: 320px) {
          }

          @media (min-width: 1800px) {
          }
          @media (min-width: 1024px) {
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
