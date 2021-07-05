import React, { useState } from 'react'
import { Card, Row } from 'react-bootstrap';


const CardTickets = () => {

    const initialState = [
        {
          id: 1,
          ticket: "089665"
        },
        {
          id: 2,
          ticket: "046665"
        },
        {
          id: 3,
          ticket: "078665"
        },
        {
          id: 4,
          ticket: "078665"
        },
        {
            id: 5,
            ticket: "089784"
        },
        {
            id: 6,
            ticket: "046665"
        },
        {
            id: 7,
            ticket: "046665"
        },
        {
            id: 8,
            ticket: "089665"
        },
      ];

    const [tickets, setTickets] = useState(initialState);

    return(
        <div className="container-tickets">
                <div className="card-tickets">
                    <Card.Body>
                        <Card.Title>
                        <div className="title-tickets">Tus tickets lobtengo</div>
                        </Card.Title>
                        <Card.Text>
                            <div className="tickets--subtitle">10 oportunidades</div>
                            <hr />
                            <div className="tickets--subtitle2">Revisa todos tus tickets</div>
                            <ul>
                                {tickets.map((ticket) => (
                                    <li className="tickets-codigo">#{ticket.ticket}</li>
                                ))}
                            </ul>
                            <hr />
                            <div className="tickets-total">
                                <div className="tickets-total-texto">Total pagar:</div>
                                <div className="tickets-total-precio"><span>S/</span>300</div>
                            </div>
                            <hr />
                        </Card.Text>
                    </Card.Body>
                </div>
        <style jsx>
            {`
            .container-tickets{
                margin: 2rem 0rem;
            }
            .card-tickets {
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
            .title-tickets{
                font-family: 'baloo-regular';
                color: #3A487F;
                text-align: start;
                font-size: 1rem;
            }  text-align: start;
            }
            hr{
                color: #3A487F;
                height: 0.2rem;
            }
            .tickets--subtitle{
                color: #878787;
                font-family: 'baloo-regular';
                font-size: 1rem;
                text-align: start;
            }
            .tickets--subtitle2{
                font-family: 'neutra-text-bold';
                color: #3A487F;
                font-size: 1rem;
                margin-bottom: 1rem;
                text-align: start;
            }
            .tickets-codigo{
                color: #3A487F;
                font-family: 'neutra-text-bold';
            }
            .card-tickets ul{
                list-style-type: none;
                padding: 0;
                text-align: start;
                max-height: 4.5em;
                overflow-y: auto;
            }
            .tickets-total{
                display: flex;
            }
            .tickets-total-texto{
                font-family: 'neutra-text-bold';
                color: #3A487F;
                font-size: 1rem;
                text-align: start;
                align-self: center;
            }
            .tickets-total-precio{
                color: #FC6625;
                font-size: 3rem;
                font-family: 'baloo-regular';
                margin-left: 2rem;
            }
            .tickets-total-precio span{
                font-size: 1rem;
            }
            @media (max-width: 768px) {
                .card-tickets {
                width: 100%;
                margin: 1rem 0rem;
                }
            }
            `}
        </style>
        </div>
    )
}

export default CardTickets;