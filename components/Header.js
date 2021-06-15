import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header__item">
          <Image
            src="/images/logo-lobtengo.svg"
            alt="logo lobtengo"
            width={100}
            height={40}
          />
        </div>

        <div className="header__item">inicio</div>
        <div className="header__item">nosotros</div>
        <div className="header__item">cómo funciona</div>
        <div className="header__item">participa</div>
        <div className="header__rigth">
          <div className="header__item">ayuda</div>
          <div className="header__item header__rigth-login">login</div>
        </div>
      </div>
      <style jsx>
        {`
          .header {
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #ffffff;
            /* SOMBRA */
            box-shadow: 0px 30px 60px rgba(138, 149, 158, 0.25);
          }

          .header__item {
            text-transform: upperCase;
            font-family: "neutra-text-ligth-demi";
          }
          .header__rigth {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .header__rigth-login {
            background: #fc6625;
            border-radius: .5rem;
            color:#ffff;
            padding:.5rem;
          
          }
        `}
      </style>
    </div>
  );
};

export default Header;
