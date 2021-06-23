
import React from 'react'
import { Row, Col } from 'react-bootstrap'

const FormSignup = () => {
    return (
        <div className="signup-form-container">
                <form action="">
                    <div className="form-row">
                        <div className="form-group col-100">
                            <input type="text" className="form-control styleInput" id="inputEmail4" placeholder="Correo electrónico"/>
                        </div>
                        <div className="form-group col-100">
                            <input type="password" className="form-control styleInput" id="inputEmail4" placeholder="Contraseña"/>
                        </div>
                    </div>
                    <div className="check-mayor">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label for="vehicle1"> Recuérdame
                        </label>
                    </div>
                    <div className="check-forget">
                        <a href="">¿Has olvidado tu contraseña?</a>
                    </div>
                    <div className="signup-form">
                        <button type="submit" className="btn-crear">
                            Ingresar
                        </button>
                    </div>
                </form>
            <style jsx global>
            {`
                .signup-form-container{
                    text-align:-webkit-center;
                }
                signup-form-container form{
                    max-width: 90%;
                }
                .signup-form input{
                    width: 100%;
                    font-family: inherit;
                    font-size: inherit;
                    line-height: inherit;
                    margin: 0.5rem 0.5rem;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    border: none;
                    background-color: #dfdbdb;
                }
                .styleInput{
                    border-radius: 25px;
                    background-color: #E9EBF1;
                    border: none;
                    padding: 0.5rem 1rem;
                    margin: 1rem 0rem;
                    font-family: 'neutra-text-bold';
                }
                .check-mayor{
                    text-align: start;
                    margin: 0rem 0.5rem;
                }
                .check-mayor label{
                    font-family: 'neutra-text-bold';
                    color: #878787;
                    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
                    font-size: 1rem;
                }
                .check-forget{
                    text-align: start;
                    align-items: center;
                    margin: 0rem 0.5rem;
                }
                .check-forget a{
                    color: #FC6625;
                    text-decoration: none;
                    font-weight: 500;
                    font-family: 'neutra-text-bold';
                }
                .btn-crear {
                    background-color: #3A487F;
                    font-size: 15px;
                    border: none;
                    padding: 1rem 2.5rem;
                    color: #ffffff;
                    border-radius: 40px;
                    margin: 2rem 0.5rem 5rem 1rem;
                    font-family: "neutra-text-bold";
                    text-transform: uppercase;
                }
                @media (min-width: 1800px) {
                }
                @media (min-width: 1024px) {
                }
                @media (min-width: 768px) {
                }
                @media (min-width: 480px) {
                }
                @media (min-width: 320px) {
                }
            `}
            </style>
        </div>
    )
}

export default FormSignup;