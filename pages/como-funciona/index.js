import React, { useState } from 'react';
import AppLayout from '../../components/AppLayout';
import CardPreguntas from '../../components/Home/CardPreguntas';
import CollapsePregFrec from '../../components/PregFrecuentes/CollapsePregFrec';

const index = () => {

    return(
        <AppLayout>
            <div className="box-como-funciona">
                <div className="section-img">
                    <img src="./icons/comoFunciona/como-funciona.svg" alt="" />
                </div>
                <div className="section-text">
                    <div className="text-subtitle text-description-gray">Lobtengo es como una lotería</div>
                    <div className="text-title title-lobtengo-blue">¡Pero mucho mejor!</div>
                    <div className="text-subtitle2">Con el sistema de sorteo limitado, solo estarán disponibles 15.000 tickets. De esta forma aseguramos un número limitado de participantes y <span> solo dependerá de ti aumentar tus posibilidades de ganar.</span></div>
                </div>
                <div className="section-comolobtengo">
                    <div className="title-lobtengo-blue">¿Cómo Lobtengo?</div>
                    <div className="extra-title title-lobtengo-orange">Te enseñamos cómo en 3 simples pasos</div>
                    <div className="step-one">
                        <div className="number">
                            <img src="./icons/comoFunciona/como-funciona.svg" alt=""/>
                        </div>
                        <div className="registrate">
                            <div className="registrate-title">Regístrate en lobtengo</div>
                            <div className="registrate-subtitle">
                                <img src="./icons/comoFunciona/como-funciona.svg" alt="" />
                                <div className="text-subtitle-step">Llena el formulario y crea tu cuenta</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sin-trucos">
                    <div className="text-trucos title-lobtengo-blanco">¡Sin trucos ni, letras chiquitas!
                        <div className="transparente">
                            <div className="card-subtitle">Totalmente transparente</div>
                            <div className="card-title">100% seguro y confiable</div>
                            <div className="card-description">El sorteo se realiza en colaboración de la inmobiliaria Asturias, con más de 30 años en el mercado. Además nuestro proceso es supervisado por la notaría Aramburú y Asociados. </div>
                            <div className="card-link">
                                <a href="">Leer bases legales</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-preguntas">
                    <div className="pregFrecuentes">
                        <div className="title-lobtengo-blue">Las preguntas más frecuentes</div>
                    </div>
                    <CardPreguntas/>
                </div>
                <div className="text-notaria">
                    <h5 className="subtitle-gray ">
                        Tranquilo, tenemos total respaldo
                    </h5>
                    <h3 className="title-lobtengo-blue">
                        Notaría Aramburú y asociados
                    </h3>
                    <h6 className="subtitle-gray ">
                        Nuestro sorteo cuenta con la supervisión de la Notaria
                        Aramburú y Asociados.
                    </h6>
                    <img src="./icons/home/notaria.svg" />
                    <h6 className="descripcion-notaria">
                        Todas las bases y términos legales son públicas y pueden
                        consultarlas <a href="/">aquí</a>, en todo momento.
                    </h6>
                </div>
                {/* <CollapsePregFrec/> */}
            </div>
            <style jsx>
                {`
                    .section-img{
                        text-align: center;
                        margin: 3rem auto;
                    }
                    .text-subtitle{
                        font-family: 'baloo-regular';
                        text-align: center;
                        margin: 0rem auto;
                    }
                    .text-title{
                        font-family: "Baloo-Regular";
                        font-weight: 400;
                        font-size: 1.8rem;
                        color: #3a487f;
                        margin: 0rem 2rem 2rem;
                        text-align: center;
                        line-height: 2rem;
                    }
                    .text-subtitle2{
                        margin: 2rem;
                        text-align: start;
                        font-family: 'neutra-text-bold';
                        font-weight: 700;
                        font-size: 1.3rem;
                        line-height: 25.3px;
                        color: #878787;
                    }
                    .text-subtitle2 span {
                        color: #fc6625;
                    }
                    .section-comolobtengo{
                        min-height: 10rem;
                        background: aquamarine;
                        padding: 4rem 0rem 9rem;
                    }
                    .extra-title{
                        text-align: center;
                        line-height: 37.95px;
                    }
                    .number img{
                        width: 20%;
                    }
                    .registrate-subtitle{
                        display: flex;
                    }
                    .registrate-subtitle img{
                        width: 20%;
                    }
                    .step-one {
                        display: flex;
                    }
                    .pregFrecuentes{
                        margin: 6rem 2rem 2rem;
                    }
                    .sin-trucos{
                        background: #fc6625;
                    }
                    .text-trucos{
                        padding: 9rem 1rem 3rem;
                        text-align: center;
                    }
                    .transparente{
                        background: #ffffff;
                        padding: 2rem 0rem;
                        margin: 4rem 0rem 1rem;
                        border-radius: 25px;
                    }
                    .card-link a{
                        color: #3a487f;
                        font-family: 'neutra-text-bold';
                        font-weight: 700;
                        font-size: 1.2rem;
                        text-decoration: underline;
                        line-height: 25.3px;
                    }
                    .text-notaria {
                        text-align: center;
                        margin: 6rem 2rem;
                    }
                    .text-notaria img {
                        margin: 2rem auto;
                    }
                    .descripcion-notaria {
                        font-family: 'neutra-text-ligth';
                        margin: 0rem 4rem;
                        font-size: 0.8rem;
                        color: #878787;
                    }
                    .descripcion-notaria a {
                        color: #fc6625;
                        text-decoration: none;
                    }
                `}
            </style>
        </AppLayout>
    )
}

export default index;