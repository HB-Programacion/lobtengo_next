import React from 'react'
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const index = () => {
  return (
    <>
      <div className="fade-in animated">
        <section fluid="true" className="box-banner">
          <div className="banner view-desktop tilt-in-fwd-tr">
            <div className="h-100">
              <Image
                src="/images/home/foto_casa.png"
                alt="Picture of the author"
                layout="responsive"
                width={500}
                height={245}
              />
            </div>
          </div>
          <div className="banner view-mobile">
            <Image
              src="/images/home/foto_casa-mobile.png"
              layout="fill"
              alt="Picture of the author"
            />
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .box-banner {
            height: 50rem;
            width: auto;
            position: relative;
          }

          .view-mobile {
            display: none;
          }

          @media (max-width: 768px) {
            .view-mobile {
              display: block;
            }
          }
        `}
      </style>
    </>
  );
}

export default index
