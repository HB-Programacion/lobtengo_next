
import React from "react";

const SectionPreguntas = () => {

    return (
        <>
            <div className="nosotros-preguntas">
                <div className="nosotros-preguntas--title1">Preguntas frecuentes</div>
                <div className="nosotros-preguntas--img">
                    <img src="./icons/nosotros/preguntas-home.svg"/>
                </div>
                <div className="nosotros-preguntas--subtitle">¿Quiénes pueden participar?</div>
                <div className="nosotros-preguntas--title">Lobtengo es para todos</div>
                <div className="nosotros-home--descripcion1">Si eres alguien que está en búsqueda de una propiedad:</div>
                <ul className="nosotros-preguntas--lista">
                    <li><img src="./icons/nosotros/arrowRigth.svg"/> <span>Para mudarte</span> solo o con tu familia.</li>
                    <li><img src="./icons/nosotros/arrowRigth.svg"/> <span>Para comprar</span> un segundo inmueble.</li>
                    <li><img src="./icons/nosotros/arrowRigth.svg"/> <span>Para invertir</span> en bienes raíces.  </li>
                </ul>
                <div className="nosotros-home--descripcion2">O si tan solo deseas probar suerte y obtener un depa <span>por S/ 60 soles.</span></div>
                <div className="btn-participa">
                    <button>
                        PARTICIPA AHORA
                    </button>
                </div>
            </div>
            <style jsx>
                {`
                    .nosotros-preguntas--img{
                        text-align: center;
                    }

                    .nosotros-preguntas--title1{
                        font-size: 20px;
                        font-family: "neutra-text-bold";
                        color: #3A487F;
                        text-align: center;
                        margin: 1rem auto;
                        text-decoration: underline;
                        font-weight: 700;
                    }
                    .nosotros-preguntas--img img{
                        margin: 2rem auto;
                        width: 70%;
                    }
                    .nosotros-preguntas--subtitle{
                        color: #878787;
                        font-family: 'Baloo-Regular';
                        font-size: 20px;
                        font-weight: 600;
                        margin: 0rem auto;
                        text-align: center;
                    }
                    .nosotros-preguntas--title{
                        color: #3A487F;
                        font-family: 'Baloo-Regular';
                        font-size: 30px;
                        text-align: center;
                        font-weight: 800;
                        margin: 0rem 1rem;
                    }
                    .nosotros-home--descripcion1{
                        font-family: "neutra-text-bold";
                        color: #878787;
                        font-size: 20px;
                        text-align: start;
                        margin: 0rem 1rem;
                        text-align: start;
                    }
                    .nosotros-preguntas--lista ul{
                        padding-left: 1rem;
                    }
                    .nosotros-preguntas--lista li{
                        font-family: "neutra-text-bold";
                        color: #878787;
                        font-size: 18px;
                        text-align: start;
                        margin: 1rem 0rem;
                        list-style: none;
                    }
                    .nosotros-preguntas--lista span{
                        color: #FC6625;
                    }
                    .nosotros-home--descripcion2{
                        font-family: "neutra-text-bold";
                        color: #878787;
                        font-size: 20px;
                        text-align: start;
                        margin: 1.5rem 1rem;
                        text-align: start;
                    }
                    .nosotros-home--descripcion2 span{
                        color: #FC6625;
                    }
                    .btn-participa{
                        text-align: center;
                    }
                    .btn-participa button{
                        background-color: #3A487F;
                        font-size: 15px;
                        border: none;
                        padding: 7px 10px;
                        color: #ffffff;
                        border-radius: 20px;
                        margin: 10px 0px 100px 0px;
                        font-family: "neutra-text-bold";
                    }
                @media (min-width:1800px) {

                }
                @media (min-width:1024px) {

                }
                @media (min-width:768px) {
                    
                }
                @media (min-width:480px) {

                }
                @media (min-width:320px) {
                    
                }
                `}
            </style>
        </>
    )
}

export default SectionPreguntas;