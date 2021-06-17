import React from "react";

const HeaderMobile = (props) => {
  let drawerClasses = "side__drawer";
  if (props.menuBurgerOpen) {
    drawerClasses = "side__drawer open";
  }
  return (
    <>
      <div className={drawerClasses}>
        hola soy menu mobile
        <p onClick={props.ocultarMenuMobile}>x</p>
      </div>
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
          }
          .side__drawer.open {
            transform: translateX(0%);
          }
        `}
      </style>
    </>
  );
};

export default HeaderMobile;
