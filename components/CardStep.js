import React, {Component, useState} from "react";
import { Card } from "react-bootstrap";

const CardStep = () => {

    const initialState = [
        {
          id: 1,
          image: "/icons/home/step1.svg",
          title: 'Regístrate',
          subtitle: 'Crea tu perfil y llena tus datos Solo los usaremos para avisarte que has ganado.'
        },
        {
          id: 2,
          image: "/icons/home/step2.svg",
          title: 'Compra tus tickets',
          subtitle: 'Consigue tus opciones desde S/ 60. A más tickets, más opciones de ganar.'
        },
        {
          id: 3,
          image: "/icons/home/step3.svg",
          title: 'Espera el sorteo',
          subtitle: 'Síguelo en vivo a través de nuestras redes sociales. El primer sorteo se realizará este 15 de junio.'
        },
      ];
    
      const [banner, setBanner] = useState(initialState);

    return(
    <>      
        <div className="container-step">
            {banner.map((ban) => (
                <div className="card-step">
                    <div className="card-img">
                        <Card.Img
                            variant="top"
                            src={ban.image}
                            className="card-img-step"
                        />
                    </div>
                    <Card.Body>
                        <Card.Title>
                            <div className="card-step-title">{ban.title}</div>
                        </Card.Title>
                        <Card.Text>
                            <div className="card-step-description">
                                {ban.subtitle}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </div>
            ))}
        </div>
        <style jsx>
            {`
                .container-step{
                    display: flex;
                    place-content: flex-end;
                }
                .card-step {
                text-align: center;
                padding: 4rem 1rem;
                background: #ffffff;
                box-shadow: 2px 2px 13px 2px rgba(0, 0, 0, 0.2);
                border-radius: 20px;
                font-family: "mont-regular" !important;
                width: 260px;
                height: auto;
                margin-bottom: 30px;
                margin: 8rem 2rem;
                }
                .card-img {
                    margin: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 60%;
                }
                .card-step-title {
                    text-align-last: center;
                    font-size: 1.5rem;
                    font-weight: 600;
                    font-family: "mont-regular" !important;
                    text-align: start;
                    letter-spacing:.01rem;
                    line-height:1.6rem
                }
                .card-step-description {
                    font-size: 1.2rem;
                    font-family: "mont-regular" !important;
                    font-weight: 300;
                    text-align: start;
                    line-height:1.5rem;
                    text-align-last: center;
                }
            `}
        </style>
    </>
    )
}

export default CardStep;