import React, { useState } from 'react';
import AppLayout from '../../components/AppLayout';
import CardPreguntas from '../../components/Home/CardPreguntas';
import CollapsePregFrec from '../../components/PregFrecuentes/CollapsePregFrec';

const index = () => {

    return(
        <AppLayout>
            <div className="box-preg-frecuentes">
                <div className="section-img">
                    <img src="./icons/pregFrecuentes/preg.svg" alt="" />
                </div>
                <div className="section-text">
                    <div className="text-subtitle text-description-gray">Estamos para ayudarte</div>
                    <div className="text-title title-lobtengo-blue">Sabemos que parece demasiado bueno para ser verdad</div>
                    <div className="text-subtitle2 text-description-gray">Descuida, si aún te quedan dudas, <span>hemos hecho un listado</span> de las principales preguntas frecuentes.</div>
                </div>
                <CardPreguntas/>
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
                        margin: 0rem 2.5rem 5rem;
                        text-align: center;
                    }
                    .text-subtitle2 span {
                        color: #fc6625;
                    }
                `}
            </style>
        </AppLayout>
    )
}

export default index;