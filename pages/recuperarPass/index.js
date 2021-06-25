import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import AppLayout from "../../components/AppLayout";
import CardPass from '../../components/RecuperarPass/CardPass'
import CardCorreo from "../../components/RecuperarPass/CardCorreo";
import CardSms from "../../components/RecuperarPass/CardSms";
import CardNewPass from "../../components/RecuperarPass/CardNewPass";
import CardGracias from "../../components/RecuperarPass/CardGracias";


const index = () => {

    return (
        <AppLayout>
            <div className="pass-home">
                <div className="avatar">
                    <img src="/icons/recuperarPass/avatar.svg" alt="" />
                </div>
                <div className="container-card">
                    <CardPass/>
                    {/* <CardCorreo/>
                    <CardSms/>
                    <CardNewPass/>
                    <CardGracias/> */}
                </div>
            </div>
            <style jsx>
            {`
                .pass-home{
                    text-align: -webkit-center;
                    height: 40rem;
                }
                .container-card{
                    width: 80%;
                }
                .avatar{
                    margin: 6rem 0rem 1.5rem 0rem
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
        </AppLayout>
    );
  };
  
  export default index;