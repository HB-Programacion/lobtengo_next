import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="box-mask-footer">
        <Image
          src="/images/footer/mask-footer.svg"
          alt="logo lobtengo"
          width={380}
          height={80}
        />
      </div>
      <div className="footer">
        <Link href="/" prefetch className="">
          <a>
            <Image
              src="/images/footer/logo-lobtengo-blanco.svg"
              alt="logo lobtengo"
              width={120}
              height={50}
            />
          </a>
        </Link>
        <div className="box-nav-footer">
          <div>
            <Image
              src="/images/footer/dot-circle.svg"
              alt="dot-circle"
              width={10}
              height={10}
            />
            <Link href="/">
              <a>NOSOTROS</a>
            </Link>
          </div>
          <div>
            <Image
              src="/images/footer/dot-circle.svg"
              alt="dot-circle"
              width={10}
              height={10}
            />
            <Link href="/">
              <a>¿COMO FUNCIONA?</a>
            </Link>
          </div>
          <div>
            <Image
              src="/images/footer/dot-circle.svg"
              alt="dot-circle"
              width={10}
              height={10}
            />
            <Link href="/">
              <a>PARTICIPA</a>
            </Link>
          </div>
        </div>
        <div className="box-nav-footer">
          <div>
            <Image
              src="/images/footer/dot-circle.svg"
              alt="dot-circle"
              width={10}
              height={10}
            />
            <Link href="/">
              <a>EL DEPA</a>
            </Link>
          </div>
          <div>
            <Image
              src="/images/footer/dot-circle.svg"
              alt="dot-circle"
              width={10}
              height={10}
            />
            <Link href="/">
              <a>PREGUNTAS FRECUENTES</a>
            </Link>
          </div>
          <div>
            <Image
              src="/images/footer/dot-circle.svg"
              alt="dot-circle"
              width={10}
              height={10}
            />
            <Link href="/">
              <a>BASES LEGALES</a>
            </Link>
          </div>
        </div>
        <div className="box-redes">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: #3a487f;
          text-align: center;
          padding: 2rem 1rem;
        }
        :global(.box-mask-footer div) {
          bottom: -1.5rem !important;
        }
        .dot-circle {
          color: orange;
        }
        .box-nav-footer a {
          color: #fff;
          text-decoration: none;
          font-family: "Baloo-Regular";
          font-weight: 700;
          font-size: 0.9rem;
          padding-left: 0.3rem;
        }
        .box-redes {
          color: #fff;
          padding: 1rem;
          font-size:1.3rem;
          display:flex;
          justify-content:center;
          align-items:center
        }
        :global(.box-redes svg){
          margin:.5rem
        }
        @media (min-width: 768px) {
          .footer {
            display: flex;
            justify-content: space-around;
            align-items:center;
            padding: 3rem 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
