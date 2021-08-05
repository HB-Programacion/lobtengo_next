import React, { useState } from 'react';
import AppLayout from '../../components/AppLayout';

const index = () => {

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
                </div>
            </div>
            <style jsx>
                {`
                    .section-text{
                        margin: 1rem;
                    }
                `}
            </style>
        </AppLayout>
    )
}

export default index;