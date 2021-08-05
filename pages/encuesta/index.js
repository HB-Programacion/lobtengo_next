import React, { useState } from 'react';
import AppLayout from '../../components/AppLayout';

const index = () => {
    const [expandTipo, setExpandTipo] = useState(false);
    const [expandUbigeo, setExpandUbigeo] = useState(false);

    return(
        <AppLayout>
            <div className="box-encuesta">
                <div className="section-banner">
                    <div className="section-img">
                        <img src="./icons/encuesta/encuesta.svg" alt="" />
                    </div>
                    <div className="section-text">
                        <div className="text-title title-lobtengo-blue-2">¡Necesitamos tu ayuda!</div>
                        <div className="text-subtitle title-lobtengo-orange-3">Queremos saber más sobre ti</div>
                        <div className="text-subtitle2 text-description-gray">¿Qué tipo de inmueble te gustaría quesortiemos la próxima vez? ¿Un depa o una casa? ¿Dentro o fuera de Lima? Responde la encuesta y lo haremos posible.</div>
                    </div>
                    <form className="section-form">
                        <div className="select-btn-container">
                            <div className="select-btn" onClick={() => setExpandTipo((expandTipo) => !expandTipo)}>
                                <div className="select-btn-text">
                                    TIPO DE INMUEBLE
                                </div>
                                <img src="./icons/encuesta/arrow-down.svg" alt="" />
                            </div>
                        </div>
                        {
                            expandTipo && (
                                <div className="box-encuesta-check">
                                    <div className="msg-info">
                                        <img src="./icons/encuesta/arrow-right.svg" alt="" />
                                        <div className="text-msg text-description-gray">
                                            Elige solo una opción:
                                        </div>
                                    </div>
                                    <div className="box-checkGroup">
                                        <div className="checkgroup">
                                            <input type="radio" id="casa" name="tipoDepa" value="casa"/>
                                            <label for="casa" className="text-check text-description-gray">Casa</label>
                                            <input type="radio" id="terreno" name="tipoDepa" value="terreno"/>
                                            <label for="terreno" className="text-check text-description-gray">Terreno</label>
                                        </div>
                                        <div className="checkGroup">
                                            <input type="radio" id="departamento" name="tipoDepa" value="departamento"/>
                                            <label for="departamento" className="text-check text-description-gray">Departamento</label>
                                            <input type="radio" id="deposito" name="tipoDepa" value="deposito"/>
                                            <label for="deposito" className="text-check text-description-gray">Depósito</label>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className="select-btn-container">
                            <div className="select-btn" onClick={() => setExpandUbigeo((expandUbigeo) => !expandUbigeo)}>
                                <div className="select-btn-text">
                                    UBICACIONES
                                </div>
                                <img src="./icons/encuesta/arrow-down.svg" alt="" />
                            </div>
                        </div>
                        {
                            expandUbigeo && (
                                <div className="box-encuesta-ubigeo">
                                    <div className="ubigeo-info">
                                        <select className="select-ubigeo">
                                            <option>PROVINCIA</option>
                                            <option>La segunda opción</option>
                                            <option>La tercera opción</option>
                                        </select>
                                        <select className="select-ubigeo">
                                            <option>CIUDAD</option>
                                            <option>La segunda opción</option>
                                            <option>La tercera opción</option>
                                        </select>
                                        <select className="select-ubigeo">
                                            <option>DISTRITO</option>
                                            <option>La segunda opción</option>
                                            <option>La tercera opción</option>
                                        </select>
                                    </div>
                                </div>
                            )
                        }
                        <div className="msg-info">
                            <img src="./icons/encuesta/arrow-right.svg" alt="" />
                            <div className="text-msg text-description-gray">
                                Esta información nos ayudará a seguir mejorando y planificar el próximo sorteo.
                            </div>
                        </div>
                        <div className="encuesta-form">
                            <button type="submit" className="btn-participa">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <style jsx>
                {`
                    .section-text{
                        margin: 1rem;
                    }
                    .msg-info img{
                        align-self: start;
                    }
                    .msg-info{
                        display:flex;
                        margin: 2rem;
                    }
                    .ubigeo-info{
                        margin: 2rem;
                    }
                    .text-msg{
                        margin: 0rem 1rem !important;
                    }
                    .arrow-down {
                        margin-left: 0.5rem;
                    }
                    .box-checkGroup{
                        margin: 0rem 4.5rem 4rem 4.5rem
                    }
                    .text-check{
                        margin: 0rem 0.5rem;
                    }
                `}
            </style>
        </AppLayout>
    )
}

export default index;