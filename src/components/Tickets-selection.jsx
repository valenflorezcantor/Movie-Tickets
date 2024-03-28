import React, { useState } from 'react';

const TicketSelector = () => {
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);
  const [seniorTickets, setSeniorTickets] = useState(0);
  const [numerodetickets, setnumerodetickets] = useState(0);
  
  const handleSearchChange = () => {
    setnumerodetickets(numerodetickets +1);
  };

  const handleChange = () => {
    setnumerodetickets(numerodetickets -1);
  };

  return (
    <div>
         <div>
                <div>
                    <h1>Selecciona tus boletos</h1>
                    <p>puedes comprar 10 boletos maxiomo por tansaccion.</p>
                </div>

            </div>
      {['ADULTO', 'NIÑOS', '3 ERA EDAD'].map((label, index) => {
        const price = label === 'ADULTO' ? '$71' : '$56';
        const countSetter =
          label === 'ADULTO'
            ? setAdultTickets
            : label === 'NIÑOS'
            ? setChildTickets
            : setSeniorTickets;
        const count =
          label === 'ADULTO'
            ? adultTickets
            : label === 'NIÑOS'
            ? childTickets
            : seniorTickets;
        
            const isDisabled = numerodetickets >= 10;
            const isDisable = numerodetickets <= 0;
        return (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ marginRight: 20 }}>{label}</span>
            <span style={{ marginRight: 20 }}>{price}</span>
            <button onClick={() => { countSetter(count - 1); handleChange(); }} disabled={count === 0 || isDisable}>-</button>
            <input type="text" value={count} readOnly style={{ width: 30, textAlign: "center" }} />
            
            <button onClick={() => { countSetter(count + 1); handleSearchChange(); }} disabled={count === 10 || isDisabled}>+</button>
            {console.log("cambio ", numerodetickets)}
          </div>
        );
      })}
    </div>
    
  );
};

export default TicketSelector;