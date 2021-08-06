import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";
// import ActiveLink from "./../ActiveLink";

const Header = (props) => {
  const router = useRouter();
  return (
    <div>
      <nav className="header">
        <Link href="/" prefetch className="header__item logo">
          <a>
            <Image
              src="/images/logo-lobtengo.svg"
              alt="logo lobtengo"
              width={120}
              height={50}
            />
          </a>
        </Link>

        <div className="box-nav">
          <Link href="/">
            <a className="header__item cl-plomo">inicio</a>
          </Link>
          <Link href="/">
            <a className="header__item cl-plomo">nosotros</a>
          </Link>
          <Link href="/">
            <a className="header__item cl-plomo">cómo funciona</a>
          </Link>
          <Link href="/">
            <a className="header__item cl-plomo">participa</a>
          </Link>
        </div>
        <div className="burger" onClick={props.mostrarMenuMobile}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className="header__rigth header__desktop">
          <Link href="/" ><a className="header__item cl-plomo">ayuda</a></Link>
          <Link href="/"><a  className="header__item header__rigth-login">login</a></Link>
        </div>
      </nav>
      <style jsx>
        {`
        {
            /* -------------------->   DESKTOP FIRST  <-------------------*/
          }
           {
            /* -------------------->   DESKTOP FIRST  <-------------------*/
          }
           {
            /* -------------------->   DESKTOP FIRST  <-------------------*/
          }
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
            margin: 0rem 1rem;
            text-decoration:none;
            
          }
          .header__rigth {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .header__rigth-login {
            background: #fc6625;
            border-radius: 0.5rem;
            color: #ffff;
            padding: 0.5rem;
          }

          .box-nav{
            display:flex
          }

          .header__desktop {
          }

          .burger{
            display:none
          }

          @media (max-width: 768px) {

            .header {
              padding:1rem 1rem 0rem 1rem;
              align-items:end
            }
            .header__desktop {
              display: none;
            }
            .burger{
            display:block;
            font-size:1.6rem;
            color: #FC6625
          }
          .box-nav{
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
