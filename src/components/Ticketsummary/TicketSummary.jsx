import React from 'react';
import {Titl, Imash, Info, Info2, Conti} from "./Styledsummary"

const TicketSummary = ({ resultado }) => {
  
  return (
    <div style={{ position: 'absolute', top: '92px', left: '55%', width: '530px', height: '500px', background: '#F4F4F4FF', borderRadius: '6px', boxShadow: '0px 0px 1px #171a1f, 0px 0px 2px #171a1f'}}>

      <Titl>Resumen de compra</Titl>
{/*   font-family: Epilogue; 
  font-size: 24px; 
  line-height: 36px; 
  font-weight: 700; 
  color: #171A1FFF;  }}>Resumen de compra</h2> */}
      
      <div>
        <div>
        <Imash src="https://i.imgur.com/MK3eW3Am.jpg"/>
        </div>
        <Info style={{ alignItems: 'center', marginBottom: '10px' }}>
          <p><strong>Película:</strong>Spider-Man Sin Camino a Casa ESP</p>
          <p><strong>Complejo:</strong> Macro plaza del Mar</p>
          <p><strong>Fecha:</strong> 07 de julio de 2023</p>
          <p><strong>Función:</strong> 7:30 PM</p>
        </Info>
        <Info2>
        <p>Se realizará un cargo por servicio por cada boleto dentro de la orden.</p>
          <p><strong>Total(IVA incluido):</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>${resultado}</strong></p>
        </Info2>
      </div>
      <Conti>
        Continuar
      </Conti>
    </div>
  );
};

export default TicketSummary;