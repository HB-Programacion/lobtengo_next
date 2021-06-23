
import React from 'react'
import { Row, Col } from 'react-bootstrap'

const FormSignup = () => {
    return (
        <div className="signup-form-container">
                <form action="">
                    <div className="form-row">
                        <div className="form-group col-100">
                            <input type="text" className="form-control styleInput" id="inputEmail4" placeholder="Nombre y Apellidos"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-25">
                            <input type="text" className="form-control styleInput" id="inputPassword4" placeholder="+51"/>
                            {/* <select className="styleInput">
                                <option value="0">Pe +51</option>
                                <option value="1">Colombia +54</option>
                                <option value="2">mexico +52</option>
                            </select> */}
                        </div>
                        <div className="form-group col-75">
                            <input type="text" className="form-control styleInput" id="inputPassword4" placeholder="Teléfono"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-100">
                            <input type="email" className="form-control styleInput" id="inputEmail4" placeholder="Correo electrónico"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-25">
                            <input type="text" className="form-control styleInput" id="inputPassword4" placeholder="DNI"/>
                        </div>
                        <div className="form-group col-75">
                            <input type="text" className="form-control styleInput" id="inputPassword4" placeholder="Número de documento"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-100">
                            <input type="password" className="form-control styleInput" id="inputEmail4" placeholder="Contraseña"/>
                        </div>
                    </div>
                    <div className="check-mayor">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label for="vehicle1"> Soy mayor de edad.
                        </label>
                    </div>
                    <div className="check-terminos">
                        <input type="checkbox" id="vehicle2" name="vehicle2" class="regular-checkbox" value="bikes"/>
                        <label for="vehicle2"> 
                            He leído y acepto los <a href="">términos y condiciones</a> 
                        </label>
                    </div>
                    <div className="signup-form">
                        <button type="submit" className="btn-crear">
                            Crear usuario
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
                    font-family: inherit;
                    font-size: inherit;
                    line-height: inherit;
                    margin: 0.5rem 0.5rem;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    border: none;
                    background-color: #dfdbdb;
                }
                .form-row{
                    display:flex;
                }
                .col-25{
                    width: 25%;
                    margin-top: 6px;
                }
                .col-75{
                    width: 75%;
                    margin-top: 6px;
                }
                .col-100{
                    width: 100%;
                    margin-top: 6px;
                }
                .styleInput{
                    border-radius: 25px;
                    background-color: #E9EBF1;
                    border: none;
                    padding: 0.5rem 1rem;
                    margin: 0.5rem 0rem;
                    font-family: 'neutra-text-bold';
                }
                .check-mayor{
                    text-align: start;
                    margin: 0rem 0.5rem;
                }
                .check-mayor label{
                    font-family: 'neutra-text-bold';
                    color: #878787;
                    margin-left: 0.5rem;
                    font-size: 1rem;
                }
                .check-terminos{
                    display: flex;
                    text-align: start;
                    align-items: center;
                    margin: 0rem 0.5rem;
                }
                .check-terminos a{
                    color: #FC6625;
                    text-decoration: none;
                }
                .check-terminos label{
                    font-family: 'neutra-text-bold';
                    color: #878787;
                    margin-left: 0.5rem;
                    margin-top: 0.5rem;
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
                    .signup-form-container form{
                        max-width: 50%;
                    }
                    .styleInput{
                        font-size: 2.5rem;
                    }
                    .check-mayor, .check-terminos {
                        font-size: 2.5rem;
                    }
                    .signup-home--descripcion2{
                        text-align-last: center;
                    }
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