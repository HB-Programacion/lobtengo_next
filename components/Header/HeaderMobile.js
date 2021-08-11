import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const HeaderMobile = (props) => {
  const [expand, setExpand] = useState(false);

  let drawerClasses = "side__drawer";
  if (props.menuBurgerOpen) {
    drawerClasses = "side__drawer open";
  }
  return (
    <>
      <nav className={drawerClasses}>
        <p className="cerrar" onClick={props.ocultarMenuMobile}>
          cerrar menú &#10006;
        </p>

        <ul className="header__mobile">
          <div className="box-user">
            <div className="user-lobtengo">
              <Image
                src="/images/header/user.png"
                alt="user lobtengo"
                width={55}
                height={55}
              />
            </div>
          </div>
          <div className="header__mobile-item ">
            <div>
              <li className="header__mobile-nombre">Sebastian</li>
              <p className="header__mobile-correo">hola@gmail.com</p>
            </div>
          </div>
          <Link href="/perfil">
            <a>
              <li className="center-item">
                <img
                  src="/images/header/perfil.svg"
                  className="mr-1 img-item"
                />
                Mi perfil
              </li>
            </a>
          </Link>
          <Link href="/mis-compras">
            <a>
              <li className="center-item">
                <img
                  src="/images/header/compras.svg"
                  className="mr-1 img-item"
                />
                Mis compras
              </li>
            </a>
          </Link>
          <hr />
          <div className="box-items">
            <Link href="/">
              <a>
                {" "}
                <li>
                  <img
                    src="/images/header/dot-circle.svg"
                    className="mr-1 img-item"
                  />
                  Inicio
                </li>
              </a>
            </Link>
            <Link href="nosotros">
              <a>
                <li>
                  <img
                    src="/images/header/dot-circle.svg"
                    className="mr-1 img-item"
                  />
                  Nosotros
                </li>
              </a>
            </Link>
            <Link href="como-funciona">
              <a>
                <li>
                  <img
                    src="/images/header/dot-circle.svg"
                    className="mr-1 img-item"
                  />
                  Como Funciona
                </li>
              </a>
            </Link>
            <Link href="participa-2">
              <a>
                <li>
                  <img
                    src="/images/header/dot-circle.svg"
                    className="mr-1 img-item"
                  />
                  Participa
                </li>
              </a>
            </Link>
            <Link href="/elDepa">
              <a>
                <li>
                  <img
                    src="/images/header/dot-circle.svg"
                    className="mr-1 img-item"
                  />
                  El depa
                </li>
              </a>
            </Link>
            <div className="box-ayuda">
              <li>
                <img
                  src="/images/header/dot-circle.svg"
                  className="mr-1 img-item"
                />
                Ayuda
                <span onClick={() => setExpand((expand) => !expand)}>
                  <img
                    src="/images/header/arrow-down.svg"
                    className="arrow-down"
                  />
                </span>
              </li>

              {expand && (
                <div className="box-ayuda-items">
                  <Link href="/preg-frecuentes">
                    <a>
                      <p>Preguntas frecuentes</p>
                    </a>
                  </Link>
                  <Link href="/contactanos">
                    <a>
                      <p>Cóntactanos</p>
                    </a>
                  </Link>
                  <Link href="/encuesta">
                    <a>
                      <p>Encuesta</p>
                    </a>
                  </Link>
                </div>
              )}
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </div>
          </div>
          <hr />
          <li>
            <img
              src="/images/header/cerrar-sesion.svg"
              className="mr-1 img-item"
            />
            Cerrar sesión
          </li>
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
            width: 70%;
            z-index: 9999;
            transition: transform 0.3s ease-out;
            transform: translateX(120%);
            padding: 1.5rem 2rem;
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
            font-size: 1rem;
            list-style: none;
            font-family: "neutra-text-bold";
          }
          .header__mobile li {
            display: flex;
            align-items: center;
          }
          .header__mobile a {
            color: #ffff;
            text-decoration: none;
          }
          .center-item {
            display: flex;
            align-items: center;
            padding: 0.2rem 0;
          }
          .box-items li {
            padding: 0.5rem 0;
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
            font-size: 1.3rem;
          }
          .header__mobile-correo {
            font-family: "neutra-text-ligth";
            font-size: 0.8rem;
            margin-top: -0.3rem;
          }

          .box-user {
            background-color: #3a487f;
            width: 5.2rem;
            height: 5.2rem;
            border-radius: 50%;
            position: absolute;
            top: 3rem;
            left: -2.3rem;
          }
          .user-lobtengo {
            position: relative;
            left: 1rem;
            top: 0.9rem;
          }

          hr {
            width: 150%;
            margin-left: -3.5rem;
            background-color: #ffff !important;
            opacity: 1;
            height: 0.2px !important;
            color: #ffff;
          }
          .mr-1 {
            margin-right: 0.5rem;
          }
          .img-item {
            width: 1rem;
          }
          .box-ayuda {
            position: relative;
          }

          .box-ayuda-items {
            margin-left: 1.4rem;
            font-family: "neutra-text-ligth";
            font-size: 0.9rem;
            transition: transform 0.3s ease-out;
            position: fixed;
          }
          .box-ayuda-items p {
            margin-bottom: 0.2rem;
          }
          .arrow-down {
            margin-left: 0.5rem;
          }
        `}
      </style>
    </>
  );
};

export default HeaderMobile;
