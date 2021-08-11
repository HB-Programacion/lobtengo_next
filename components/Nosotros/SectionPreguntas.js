import React from "react";
import { Container } from "react-bootstrap";

const SectionPreguntas = () => {
  return (
    <>
      <Container>
        <div className="nosotros-preguntas">
          <div className="nosotros-preguntas--title1">Preguntas frecuentes</div>
          <div className="nosotros-preguntas--img">
            <img src="./icons/nosotros/preguntas-home.svg" />
          </div>
          <div className="subtitle-gray">¿Quiénes pueden participar?</div>
          <div className="title-lobtengo-blue">Lobtengo es para todos</div>

         <Container>
         <div className="subtitle-gray-nosotros">
            Si eres alguien que está en búsqueda de una propiedad:
          </div>
          <ul className="nosotros-preguntas--lista">
            <li>
              <img src="./icons/nosotros/arrowRigth.svg" />{" "}
              <span>Para mudarte</span> solo o con tu familia.
            </li>
            <li>
              <img src="./icons/nosotros/arrowRigth.svg" />{" "}
              <span>Para comprar</span> un segundo inmueble.
            </li>
            <li>
              <img src="./icons/nosotros/arrowRigth.svg" />{" "}
              <span>Para invertir</span> en bienes raíces.{" "}
            </li>
          </ul>
          <div className="subtitle-gray text-left">
            O si tan solo deseas probar suerte y obtener un depa{" "}
            <span className="cl-orange">por S/ 60 soles.</span>
          </div>
         </Container>
          <div className="btn-participa btn-participa-nosotros">
            PARTICIPA AHORA
          </div>
        </div>
      </Container>
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

  
            .nosotros-preguntas {
              position: relative;
              top: 3rem;
              bottom:3rem
            }
            .nosotros-preguntas--title1 {
              font-size: 1.2rem;
              font-family: "neutra-text-bold";
              color: #3a487f;
              text-align: center;
              margin: 1rem auto;
              text-decoration: underline;
              font-weight: 700;
            }
            .subtitle-gray-nosotros{
              font-family: "neutra-text-bold";
              color: #878787;
              font-size: 1rem;
              text-align: start;
              list-style: none;
              margin-top: 1rem;
              
            }
            .nosotros-preguntas--img {
              margin: 2rem auto;
              width: 60%;
            }
            .nosotros-preguntas--img img {
              width: 100%;
            }
            .nosotros-preguntas--lista{
              padding-left: 0rem !important;
            }
            .nosotros-preguntas--lista li {
              font-family: "neutra-text-bold";
              color: #878787;
              font-size: 1rem;
              text-align: start;
              list-style: none;
              margin-top: 1rem;
              
            }

            .nosotros-preguntas--lista span {
              color: #fc6625;
            }

            .btn-participa {
              text-align: center;
            }
            .btn-participa-nosotros{
              width:60%;
              margin: 4rem auto;
              margin-bottom:10rem
            }
           
          @media (min-width: 1800px) {
          }
          @media (min-width: 1024px) {
          }
          @media (min-width: 768px) {
          }
          @media (min-width: 480px) {
          }
        `}
      </style>
    </>
  );
};

export default SectionPreguntas;
