import React from 'react';

const TicketSummary = () => {
  return (
    <div style={{ position: 'absolute', top: '92px', left: '55%', width: '514px', height: '475px', height: '475px', background: '#F4F4F4FF', borderRadius: '6px', boxShadow: '0px 0px 1px #171a1f, 0px 0px 2px #171a1f'}}>

      <h2 style={{  position: 'relative',top: '20px', left: '27px',fontFamily: 'Epilogue',fontSize: '24px',lineHeight: '36px',fontWeight: 700, color: '#171A1FFF',}}>Resumen de compra</h2>
{/*   font-family: Epilogue; 
  font-size: 24px; 
  line-height: 36px; 
  font-weight: 700; 
  color: #171A1FFF;  }}>Resumen de compra</h2> */}
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ position: 'relative', top: '-22px', left: '7px', width: '92px', height: '129px', borderRadius: '6px',}}>
        <img
          src="https://i.imgur.com/MK3eW3Am.jpg"
          alt="Katherine Johnson"
          style={{ width: '100px', height: 'auto', marginRight: '20px' }}
        />
        </div>
        <div>
          <p>Película: Spider-Man Sin Camino a Casa ESP</p>
          <p>Complejo: Macro plaza del Mar</p>
          <p>Fecha: 07 de julio de 2023</p>
          <p>Función: 7:30 PM</p>
          <p>Se realizará un cargo por servicio por cada boleto dentro de la orden.</p>
          <p style={{ fontWeight: 'bold' }}>Total (IVA incluido): $0</p>
        </div>
      </div>
      <button style={{ backgroundColor: 'grey', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
        Continuar
      </button>
    </div>
  );
};

export default TicketSummary;