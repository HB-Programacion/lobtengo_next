import React, { useState } from 'react';
import AppLayout from "../../components/AppLayout";

const index = () => {

    return (
        <AppLayout>
            <div className="box-sorteo-ant">
                <div className="section-text title-lobtengo-blue">
                    ¡Ellos cumplieron su sueño!
                </div>
                <div className="section-img1">
                    <img src="./icons/sorteosAnterior/img-principal.svg" alt="" />
                </div>
                <div className="section-img2">
                    <img src="./icons/sorteosAnterior/img-1.svg" alt="" />
                    <img src="./icons/sorteosAnterior/img-2.svg" alt="" />
                    <img src="./icons/sorteosAnterior/img-3.svg" alt="" />
                </div>
            </div>
            <style jsx>
                {`
                    .section-text{
                        text-align: center;
                        margin: 3rem 1rem;
                    }
                    .section-img1{
                        text-align: center;
                        margin: 1.5rem auto;
                    }
                    .section-img2{
                        text-align: center;
                    }
                    .section-img2 img{
                        margin: 1rem auto;
                    }
                `}
            </style>
        </AppLayout>
    )
}

export default index;
