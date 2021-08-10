import React, { useState } from 'react';
import AppLayout from '../../components/AppLayout';

const index = () => {
    const [expandInfo, setExpandInfo] = useState(false);
    const [expandPass, setExpandPass] = useState(false);
    const [expandCloseAccount, setExpandCloseAccount] = useState(false);

    return(
        <AppLayout>
            <div className="box-perfil">
                <div className="section-title">
                    <div className="section-img">
                        <img src="./images/perfil/avatar-default.svg" alt="" />
                    </div>
                    <div className="section-text">
                        <div className="text-title title-lobtengo-blue-2">¡Hola Sebastian!</div>
                        <div className="text-subtitle text-description-gray">Bienvenido a tu perfil</div>
                    </div>
                </div>
                <div className="expand-section">
                    <div className="title-expand" onClick={() => setExpandInfo((expandInfo) => !expandInfo)}>
                        <div className="icon-text">
                            <img src="./images/perfil/perfil.svg" alt="" />
                            <div className="text-expand text-description-blue">
                                Información del perfil
                            </div>
                        </div>
                        <div className="icon">
                            <img src="./icons/perfil/flecha-down.svg" alt="" />
                        </div>
                    </div>
                    {
                    expandInfo && (
                        <div className="box-encuesta-check">
                            expandido perfil
                        </div>
                    )
                    }
                    <div className="title-expand" onClick={() => setExpandPass((expandPass) => !expandPass)}>
                        <div className="icon-text">
                            <img src="./images/perfil/key.svg" alt="" />
                            <div className="text-expand text-description-blue">
                                Contraseña
                            </div>
                        </div>
                        <div className="icon">
                            <img src="./icons/perfil/flecha-down.svg" alt="" />
                        </div>
                    </div>
                    {
                    expandPass && (
                        <div className="box-encuesta-check">
                            expandido pass
                        </div>
                    )
                    }
                    <div className="title-expand" onClick={() => setExpandCloseAccount((expandCloseAccount) => !expandCloseAccount)}>
                        <div className="icon-text">
                            <img src="./images/perfil/close-account.svg" alt="" />
                            <div className="text-expand text-description-blue">
                                Desactivar cuenta
                            </div>
                        </div>
                        <div className="icon">
                            <img src="./icons/perfil/flecha-down.svg" alt="" />
                        </div>
                    </div>
                    {
                    expandCloseAccount && (
                        <div className="box-encuesta-check">
                            expandido closeAcc
                        </div>
                    )
                    }
                    <div className="title-expand" onClick={() => setExpandInfo((expandInfo) => !expandInfo)}>
                        <div className="icon-text">
                            <img src="./images/perfil/sign-out.svg" alt="" />
                            <div className="text-expand text-description-blue">
                                Cerrar sesión
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .title-expand{
                        display: flex;
                        justify-content: space-between;
                        margin: 0rem 2rem;
                        border-top: 1px solid #3a487f;
                        padding: 0.5rem 0rem;
                    }
                    .text-expand{
                        margin-left: 0.6rem;
                    }
                    .icon-text{
                        display: flex;
                    }
                    .text-title{
                        text-align: center;
                    }
                    .text-subtitle{
                        margin: 0rem 1rem 3rem !important;
                        text-align: center;
                    }
                    .expand-section{
                        margin-bottom: 5rem;
                    }
                    .icon{
                        align-self: center;
                    }
                `}
            </style>
        </AppLayout>
    )
}

export default index;