import React, { useState } from "react";
import AppLayout from "../../components/AppLayout";
import { Card } from 'react-bootstrap';

const index = () => {

    return (
        <AppLayout>
            <div className="container-confirmacion">
                <div className="confirmacion-pago">
                    <Card.Body>
                        <Card.Title>
                            <div className="title-confirmacion">Homer</div>
                            <div className="title2-confirmacion">¡Muchas gracias por tu compra!</div>
                        </Card.Title>
                        <Card.Text>
                            <div className="confirmacion--subtitle1">Acabamos de enviar una confirmación, con los datos de tu compra y la fecha y hora del sorteo, a la dirección de correo que proporcionaste.<span> Mucha suerte.</span></div>
                            <hr />
                            <div className="confirmacion--subtitle2">*Recuerda que en caso no se realice un sorteo, el sistema Lobtengo reservará tu compra, dándote prioridad para que puedas participar del siguiente sorteo de manera automática.</div>
                        </Card.Text>
                    </Card.Body>
                </div>
                <div className="link-navegando">
                    <a href="#">Seguir navegando</a>
                </div>
            </div>
            <style jsx>
                {`
                .container-confirmacion{
                    text-align: -webkit-center;
                }
                .confirmacion-pago {
                    text-align: center;
                    padding: 1rem;
                    background: #ffffff;
                    border-radius: 20px;
                    font-family: "mont-regular" !important;
                    width: 90%;
                    height: auto;
                    margin: 2rem 1rem;
                    background-color: rgba(58, 72, 127, 0.11);
                }
                .title-confirmacion{
                    color: #3A487F;
                    font-family: 'baloo-regular';
                    font-size: 1.5rem;
                }
                .title2-confirmacion{
                    color: #FC6625;
                    font-family: 'baloo-regular';
                    font-size: 1.5rem;
                }
                .confirmacion--subtitle1{
                    color: #878787;
                    margin-bottom: 2rem;
                    font-family: 'neutra-text-bold';
                }
                .confirmacion--subtitle1 span{
                    color: #FC6625;
                }
                .confirmacion--subtitle2{
                    font-family: 'neutra-text-ligth-demi';
                    color: rgba(58, 72, 127, 0.6);
                    margin-top: 2rem;
                    font-size: 0.7rem;
                }
                .link-navegando{
                    text-align: center;
                    margin: 3rem;
                }
                .link-navegando a{
                    color: #3A487F;
                    font-family: 'neutra-text-bold';
                }
                @media (min-width: 768px) {
                    .confirmacion-pago{
                        max-width: 50%;
                    }
                }
                `}
            </style>
        </AppLayout>
    )
}

export default index;
