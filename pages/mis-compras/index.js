import React, { useState } from 'react';
import AppLayout from '../../components/AppLayout';

const index = () => {

    const initialState = [
        {
            id: 1,
            codCompra: 1245678,
            total: '60.00',
            fechaCompra: '12/12/2021',
            ticketAsignado: 51315421
        },
        {
            id: 2,
            codCompra: 4545678,
            total: '12.00',
            fechaCompra: '02/12/2021',
            ticketAsignado: 78915421
        },
        {
            id: 3,
            codCompra: 3845315,
            total: '50.00',
            fechaCompra: '02/08/2021',
            ticketAsignado: 3574521
        }
    ]



    const [compras, setCompras] = useState(initialState);

    return(
        <AppLayout>
            <div className="box-compras">
                <div className="section-title">
                    <div className="section-text">
                        <div className="text-title title-lobtengo-blue-2">¡Hola Sebastian!</div>
                        <div className="text-subtitle text-description-gray">Bienvenido a tus compras</div>
                    </div>
                </div>
                <div className="compras-section">
                    {compras.map((compra) => (
                        <>
                            <div className="compras-item">
                                <div className="title-compra">
                                    <img src="./icons/encuesta/arrow-right.svg" alt="" />
                                    <div className="text-description">Código de compra</div>
                                </div>
                                <div className="compra-number">{compra.codCompra}</div>
                                <hr />
                                <div className="total-compra">
                                    Total: S/{compra.total}
                                </div>
                                <div className="fecha-compra">
                                    Fecha de compra: {compra.fechaCompra}
                                </div>
                                <hr />
                                <div className="tickets-compra">
                                    <div className="ticket-title">tickets asignados:</div>
                                    <div className="ticket-number">#{compra.ticketAsignado}</div>
                                </div>
                                <div className="no-sorteo">
                                    ¿No se realizó el sorteo?
                                </div>
                            </div>
                            <br />
                        </>
                    ))
                    }
                </div>
            </div>
            <style jsx>
                {`
                    .text-title{
                        text-align: center;
                    }
                    .text-subtitle{
                        margin: 0rem 1rem 3rem !important;
                        text-align: center;
                    }
                    .section-text{
                        margin: 3rem auto;
                    }
                    .compras-item{
                        padding: 1rem 2rem;
                        background-color: #E9EBF1;
                    }
                    hr{
                        border-top:1px dotted #000;
                    }
                    .title-compra{
                        display: flex;
                        margin-bottom: 0.6rem;
                    }
                    .text-description{
                        margin-left: 0.5rem;
                        font-family: 'neutra-text-bold';
                        color: #3a487f;
                    }
                    .compra-number{
                        font-family: 'baloo-regular';
                        font-size: 1.2rem;
                        color: #000000;
                    }
                    .total-compra{
                        font-family: 'baloo-regular';
                        color: #fc6625;
                        font-size: 1rem;
                    }
                    .fecha-compra{
                        font-family: 'neutra-text-bold';
                        color: #3a487f;
                        font-size: 1rem;
                    }
                    .ticket-title{
                        font-family: 'neutra-text-bold';
                        color: #3a487f;
                        font-size: 0.9rem;
                    }
                    .ticket-number{
                        font-family: 'baloo-regular';
                        font-size: 0.9rem;
                        color: #000000;
                    }
                    .no-sorteo{
                        text-align: center;
                        margin: 2rem auto 0rem;
                        font-family: 'neutra-text-bold';
                        font-size: 1rem;
                    }
                `}
            </style>
        </AppLayout>
    )
}

export default index;