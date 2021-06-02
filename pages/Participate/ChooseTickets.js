import React from 'react';
import Image from 'next/image'

const ChooseTickets = () => {
  return (
    <>
      <section className="block-choose-tickets">
        <h4 className="block-choose-tickets__title">Escoge tus tickets</h4>
        <p className="block-choose-tickets__phrase">¡Mientras más compres, más posibilidades tendrás de ganar
        el premio!</p>
        <div className="block-choose-tickets__buttons">
          <button className="block-choose-tickets__button">1 ticket</button>
          <button className="block-choose-tickets__button">2 tickets</button>
          <button className="block-choose-tickets__button">3 tickets</button>
          <button className="block-choose-tickets__button">5 tickets</button>
          <button className="block-choose-tickets__button">10 tickets</button>
          <button className="block-choose-tickets__button">Tú eliges</button>
        </div>

      </section>
      <section className="block-total-pay">
        <div className='block-total-pay__departament-logo'>
          <Image
            src='/images/icon-departament.png'
            alt='icono de departamento'
            width={200}
            height={200}
          />
        </div>
        <p className="block-total-pay__phrase">¡Estas así de cerca
        de ganar!</p>
      </section>
      <style jsx>
        {`
         .block-choose-tickets{
           padding:1rem;
         }
          .block-choose-tickets__title{
            font-weight: 700;
            font-size: 1.2rem;
            text-align: center;
            letter-spacing: -0.019em;
            color: #FC6625;
            margin-bottom:0rem
          }
          .block-choose-tickets__phrase{
            font-style: normal;
            font-weight: 600;
            font-size: 1.2rem;
            text-align: center;
            letter-spacing: -0.019em;
            color: #878787;
             margin-top:0rem

          }
          .block-choose-tickets__button{
            font-family: 'Baloo 2';
            width: 120px;
            height: 100px;
            background: #FFFFFF;
            box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
            border-radius: 30px;
            padding:1.2rem;
            margin:1rem;
            border-color:transparent;
            font-weight: 800;
            font-size: 1.6rem;
            line-height: 115%;
            text-align: center;
            letter-spacing: -0.019em;
            color: #3A487F;
          }
          .block-total-pay__phrase{
            font-weight:700;
            font-size: 30px;
            line-height: 115%;
            text-align: center;
            letter-spacing: -0.019em;
            color: #3A487F;

          }
          .block-total-pay__departament-logo{
           margin:auto
          }
        `}
      </style>
    </>
  )
}

export default ChooseTickets
