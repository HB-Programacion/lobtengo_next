import React from "react";

const HeaderMobile = (props) => {
  let drawerClasses = "side__drawer";
  if (props.menuBurgerOpen) {
    drawerClasses = "side__drawer open";
  }
  return (
    <>
      <nav className={drawerClasses}>
        <p className="cerrar" onClick={props.ocultarMenuMobile}>
          x
        </p>

        <ul className="header__mobile">
          <li>Nombre</li>
          <li>Mi perfil</li>
          <li>Mis compras</li>
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
            transform: translateX(100%);
            padding:2rem 3rem
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
          }
          .cerrar {
            font-size: 2rem;
            color:#ffff
          }
        `}
      </style>
    </>
  );
};

export default HeaderMobile;
