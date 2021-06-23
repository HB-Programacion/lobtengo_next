import React from "react";

const SectionPreguntas = () => {
  return (
    <>
      <div className="nosotros-preguntas">
        <div className="nosotros-preguntas--title1">Preguntas frecuentes</div>
        <div className="nosotros-preguntas--img">
          <img src="./icons/nosotros/preguntas-home.svg" />
        </div>
        <div className="nosotros-preguntas--subtitle">
          ¿Quiénes pueden participar?
        </div>
        <div className="nosotros-preguntas--title">Lobtengo es para todos</div>
        <div className="nosotros-home--descripcion1">
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
        <div className="nosotros-home--descripcion2">
          O si tan solo deseas probar suerte y obtener un depa{" "}
          <span>por S/ 60 soles.</span>
        </div>
        <div className="btn-participa">
          <button>PARTICIPA AHORA</button>
        </div>
      </div>
      <style jsx>
        {`
          .nosotros-preguntas--img {
            text-align: center;
          }

          body {
            margin-top: 5rem;
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
            .nosotros-preguntas--title1 {
              font-size: 20px;
              font-family: "neutra-text-bold";
              color: #3a487f;
              text-align: center;
              margin: 5rem auto;
              text-decoration: underline;
              font-weight: 700;
            }
            .nosotros-preguntas--img img {
              margin: 10rem auto;
              width: 60%;
            }
            .nosotros-preguntas--subtitle {
              color: #878787;
              font-family: "Baloo-Regular";
              font-size: 15px;
              font-weight: 600;
              margin: 0rem auto;
              text-align: center;
            }
            .nosotros-preguntas--title {
              color: #3a487f;
              font-family: "Baloo-Regular";
              font-size: 25px;
              text-align: center;
              font-weight: 800;
              margin: 0rem 8rem;
            }
            .nosotros-home--descripcion1 {
              font-family: "neutra-text-bold";
              color: #878787;
              font-size: 15px;
              text-align: start;
              margin: 25px 50px;
              text-align: start;
            }
            .nosotros-preguntas--lista li {
              font-family: "neutra-text-bold";
              color: #878787;
              font-size: 18px;
              text-align: start;
              margin: 20px 40px;
              list-style: none;
            }
            .nosotros-preguntas--lista span {
              color: #fc6625;
            }
            .nosotros-home--descripcion2 {
              font-family: "neutra-text-bold";
              color: #878787;
              font-size: 15px;
              text-align: start;
              margin: 25px 50px;
              text-align: start;
            }
            .nosotros-home--descripcion2 span {
              color: #fc6625;
            }
            .btn-participa {
              text-align: center;
            }
            .btn-participa button {
              background-color: #3a487f;
              font-size: 15px;
              border: none;
              padding: 7px 10px;
              color: #ffffff;
              border-radius: 20px;
              margin: 10px 0px 100px 0px;
              font-family: "neutra-text-bold";
            }
          }
        `}
      </style>
    </>
  );
};

export default SectionPreguntas;
