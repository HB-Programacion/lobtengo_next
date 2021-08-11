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
        }
    ]



    const [compras, setCompras] = useState(initialState);

    return(
        <AppLayout>
            <div className="box-compras">
                <div className="section-title">
                    <div className="section-text">
                        <div className="text-title title-lobtengo-blue-2">¿No se realizó el sorteo?</div>
                        <div className="text-subtitle text-description-gray">No te preocupes, aquí lo resolvemos</div>
                    </div>
                </div>
                <div className="compras-section">
                    {compras.map((compra) => (
                        <>
                            <div className="sorteo-programado">
                                El sorteo programado para el día {compra.fechaCompra} no se realizó porque no se llegó al mínimo de participantes. Revisa nuestros<a href=""> términos y condiciones.</a>
                            </div>
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
                            </div>
                            <br />
                            <div className="banner-noRealizado">
                                Recuerda que en caso no se realice un sorteo, el sistema Lobtengo reservará tu compra, dándote prioridad para que puedas participar del siguiente sorteo de manera automática.
                            </div>
                            <div className="devolucion-sorteo">
                                ¿Deseas tramitar la devolución de tu dinero?
                            </div>
                            <div className="btn-devolucion">
                                <button className="btn-participa">CONTÁCTANOS</button>
                            </div>
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
                    .sorteo-programado{
                        margin: 2rem;
                        text-align: center;
                        font-family: 'neutra-text-bold';
                        font-weight: 700;
                        line-height: 23px;
                        font-size: 1rem;
                    }
                    .sorteo-programado a{
                        color:#FC6625 !important;
                    }
                    .banner-noRealizado{
                        padding: 1rem 2rem;
                        background: #FC6625;
                        font-size: 0.9rem;
                        font-family: 'neutra-text-bold';
                        color: #ffffff;
                        text-align: center;
                        font-weight: 700;
                        line-height: 20.7px;
                        margin-bottom: 3rem;
                    }
                    .devolucion-sorteo{
                        text-align: center;
                        font-family: 'neutra-text-bold';
                        color: #878787;
                        font-style: normal;
                        line-height: 20.7px;
                        font-weight: 700;
                    }
                `}
            </style>
        </AppLayout>
    )
}

export default index;