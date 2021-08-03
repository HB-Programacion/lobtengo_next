import React from "react";
import Image from "next/image";

const HeaderMobile = (props) => {
  let drawerClasses = "side__drawer";
  if (props.menuBurgerOpen) {
    drawerClasses = "side__drawer open";
  }
  return (
    <>
      <nav className={drawerClasses}>
        <p className="cerrar" onClick={props.ocultarMenuMobile}>
          cerrar menú X
        </p>

        <ul className="header__mobile">
          <div className="box-user">
            <div className="user-lobtengo">
              <Image
                src="/images/header/user.png"
                alt="user lobtengo"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="header__mobile-item ">
            <div>
              <li className="header__mobile-nombre">Sebastian de la Guarda</li>
              <p className="header__mobile-correo">hola@gmail.com</p>
            </div>
          </div>
          <li>
            <img src="/images/header/perfil.svg" />
            Mi perfil
          </li>
          <li>
            <img src="/images/header/compras.svg" />
            Mis compras
          </li>
          <hr/>
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Como Funciona</li>
          <li>Participa</li>
          <li>El depa</li>
          <li>Ayuda</li>
        </ul>
      </nav>
      <style jsx>
        {`
          .side__drawer {
            height: 100%;
            background-color: #3a487f;
            background-image: url(images/trama-background.png);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
            position: fixed;
            top: 0;
            right: 0%;
            width: 80%;
            z-index: 9999;
            transition: transform 0.3s ease-out;
            transform: translateX(120%);
            padding: 2rem 1.5rem;
          }
          .side__drawer.open {
            transform: translateX(0%);
          }

          .header__mobile {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            color: #ffff;
            font-size: 1.2rem;
            list-style: none;
          }
          .cerrar {
            font-size: 1rem;
            color: #ffff;
            opacity: 0.5;
            font-family: "neutra-text-ligth";
            text-align: end;
          }
          .header__mobile-item {
            display: flex;
            align-items: center;
          }

          .header__mobile-nombre {
            font-family: "neutra-text-bold";
          }
          .header__mobile-correo {
            font-family: "neutra-text-ligth";
            font-size: 0.8rem;
            margin-top: -0.3rem;
          }

          .box-user {
            background-color: #3a487f;
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            position: absolute;
            top: 3.46rem;
            left: -1.5rem;
          }
          .user-lobtengo {
            position: relative;
            left: 1rem;
            top: 0.9rem;
          }
        `}
      </style>
    </>
  );
};

export default HeaderMobile;
