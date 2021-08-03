import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AppLayout from '../../components/AppLayout';
import CardPreguntas from '../../components/Home/CardPreguntas';
import CollapsePregFrec from '../../components/PregFrecuentes/CollapsePregFrec';

const index = () => {

    return(
        <AppLayout>
            <Container>
                <div className="box-contactanos">
                    <div className="section-img">
                        <img src="./icons/contactanos/contactanos.svg" alt="" />
                    </div>
                    <div className="section-text">
                        <div className="text-description text-description-gray">¡Hola!</div>
                        <div className="text-title title-lobtengo-blue">¿Cómo podemos ayudarte?</div>
                        <div className="text-subtitle2 text-description-gray">Nuestro equipo estará encantado de contactarte y resolver cualquier consulta que tengas.<span> Recuerda que tambien puedes escribirnos a través de nuestras redes sociales.</span></div>
                    </div>
                    <div className="contactanos-form-container">
                        <form action="">
                            <div className="form-row">
                                <div className="form-group col-100">
                                    <input
                                        type="text"
                                        className="form-control styleInput"
                                        id="inputEmail4"
                                        placeholder="Nombre y Apellidos"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-100">
                                    <input
                                        type="email"
                                        className="form-control styleInput"
                                        id="inputEmail4"
                                        placeholder="Correo electrónico"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-100">
                                    <textarea
                                        rows="6"
                                        cols="50"
                                        type="text"
                                        className="form-control styleInput"
                                        id="inputEmail4"
                                        placeholder="Escribe tu consulta..."
                                    />
                                </div>
                            </div>
                            <div className="check-terminos">
                                <input
                                    type="checkbox"
                                    id="vehicle2"
                                    name="vehicle2"
                                    class="regular-checkbox"
                                    value="bikes"
                                />
                                <label for="vehicle2">
                                    He leído y acepto los{" "}
                                    <a href="">términos y condiciones</a>
                                </label>
                            </div>
                            <div className="contactanos-form">
                                <button type="submit" className="btn-participa">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <style jsx>
                    {`
                        .section-img{
                            text-align: center;
                            margin: 3rem auto;
                        }
                        .text-description{
                            margin: 0 2rem;
                        }
                        .text-title{
                            font-family: "Baloo-Regular";
                            font-weight: 400;
                            font-size: 1.8rem;
                            color: #3a487f;
                            margin: 0rem 2rem 2rem;
                            text-align: start;
                            line-height: 2rem;
                        }
                        .text-subtitle2{
                            margin: 0rem 2.5rem 1rem;
                            text-align: start;
                        }
                        .text-subtitle2 span {
                            color: #fc6625;
                        }
                        .contactanos-form-container {
                            text-align: -webkit-center;
                        }
                        contactanos-form-container form {
                            max-width: 90%;
                        }
                        .col-100 {
                            width: 100%;
                            margin-top: 6px;
                        }
                        .styleInput {
                            border-radius: 25px;
                            background-color: #e9ebf1;
                            border: none;
                            padding: 0.5rem 1rem;
                            margin: 0.5rem 0rem;
                            font-family: "neutra-text-bold";
                        }
                        .form-row{
                            margin: 0 1rem;
                        }
                    `}
                </style>
            </Container>
        </AppLayout>
    )
}

export default index;