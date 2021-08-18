import React from "react";

const Stepper = ({ active }) => {
  return (
    <div>
      <div className="box-stepper">
        <div
          className={`circle-stepper ${active === 1 ? "stepper-active" : ""}`}
        >
          1
        </div>
        <div
          className={`circle-stepper ${active === 2 ? "stepper-active" : ""}`}
        >
          2
        </div>
        <div
          className={`circle-stepper ${active === 3 ? "stepper-active" : ""}`}
        >
          3
        </div>
        <div
          className={`circle-stepper ${active === 4 ? "stepper-active" : ""}`}
        >
          4
        </div>
      </div>
      <style jsx>
        {`
          .box-stepper {
            display: flex;
            justify-content: space-around;
            width: 50%;
            margin: 0.5rem auto;
            max-width: 180px;
          }
          .circle-stepper {
            width: 1.8rem;
            height: 1.8rem;
            border-radius: 50%;
            border: 2px solid rgba(58, 72, 127, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: "Baloo-Regular";
            color: rgba(58, 72, 127, 0.5);
          }
          .stepper-active {
            color: #3a487f;
            border: 2px solid #3a487f;
          }
        `}
      </style>
    </div>
  );
};

export default Stepper;
