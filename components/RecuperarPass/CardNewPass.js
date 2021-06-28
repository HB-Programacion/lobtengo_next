import React, { Component, useState } from "react";
import { Card, Row } from "react-bootstrap";

const CardNewPass = () => {

    const initialState = [
        {
        id: 1,
        title: "Por favor ingresa una nueva contraseña"
    }
    ];

    const [preguntas, setPreguntas] = useState(initialState);

    return (
        <>
            <div className="row-pass-card">
                {preguntas.map((pregunta) => (
                    <div className="card-pass">
                        <Card.Body>
                            <Card.Title>
                                <div className="card-pass-title">{pregunta.title}</div>
                            </Card.Title>
                            <Card.Text>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <input type="password" className="form-control styleInput" id="inputpass1" placeholder="Nueva contraseña"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <input type="password" className="form-control styleInput" id="inputpass2" placeholder="Confirmar contraseña"/>
                                        </div>
                                    </div>
                                    <div className="container-btn">
                                        <button type="submit" className="btn-restablecer">
                                            Reestablecer
                                        </button>
                                    </div>
                                </form>
                            </Card.Text>
                        </Card.Body>
                    </div>
                ))}
            </div>
            <style jsx>
                {`
                    .row-pass-card {
                        width: 95%;
                    }
                    .card-pass {
                        background: #ffffff;
                        box-shadow: 2px 2px 13px 2px rgb(0 0 0 / 20%);
                        border-radius: 20px;
                        min-height: 10rem;
                        margin: 2rem 0rem;
                        padding: 1.5rem 0rem 1rem;
                    }
                    .card-pass-title {
                        font-size: 1rem;
                        font-weight: 700;
                        font-family: "neutra-text-bold";
                        color: #3a487f;
                        margin: 0rem 0rem 1.2rem;
                    }
                    .container-btn{
                        margin-top: 1.2rem;
                    }
                    .btn-restablecer {
                        background-color: #3A487F;
                        font-size: 1rem;
                        border: none;
                        padding: 1rem 2.5rem;
                        color: #ffffff;
                        border-radius: 40px;
                        margin: 0rem 0.5rem 0rem 1rem;
                        font-family: "neutra-text-bold";
                        text-transform: uppercase;
                    }
                    .styleInput{
                        border-radius: 25px;
                        background-color: #E9EBF1;
                        border: none;
                        padding: 0.5rem 1rem;
                        margin: 0.5rem 0rem;
                        font-family: 'neutra-text-bold';
                    }
                    @media (min-width: 768px) {
                        .card-pass {
                            max-width: 25rem;
                        }
                        .row-pass-card {
                            justify-content: center;
                    }
                    }
            `}
            </style>
        </>
        );

}

export default CardNewPass;