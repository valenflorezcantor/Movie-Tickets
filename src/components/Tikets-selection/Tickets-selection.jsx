import React, { useState } from 'react';
import {Botones, Icon, Icon2, Botonmen, Entrada, Divi} from "./StyledTiket-Selection"

const TicketSelector = ({ actualizarResultado }) => {
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);
  const [seniorTickets, setSeniorTickets] = useState(0);
  const [numerodetickets, setnumerodetickets] = useState(0);

  const handleChangeAdul= () => {
    setAdultTickets(adultTickets -1);
    setnumerodetickets(numerodetickets -1);
 
  };

  const handleChangeAdulto = () => {
    setAdultTickets(adultTickets +1);
    setnumerodetickets(numerodetickets +1);
 
  };

  const handleChangeChild= () => {
    setChildTickets(childTickets -1);
    setnumerodetickets(numerodetickets -1);
  
  };

  const handleChangeChildren = () => {
    setChildTickets(childTickets +1);
    setnumerodetickets(numerodetickets +1);

  };

  const handleChangeSen= () => {
    setSeniorTickets(seniorTickets -1);
    setnumerodetickets(numerodetickets -1);
    
  };

  const handleChangeSeñor = () => {
    setSeniorTickets(seniorTickets +1);
    setnumerodetickets(numerodetickets +1);
  };


  const isDisabled = numerodetickets >= 10;
  const isDisable = numerodetickets <= 0; 


 
  const total = (71 * adultTickets) + (56 * seniorTickets) + (56 * childTickets);
  actualizarResultado(total);

  return (
    <Divi>
         <div>
                <div>
                    <h2>Selecciona tus boletos</h2>
                    <p>puedes comprar 10 boletos maximo por tansaccion.</p>
                </div>

          </div>     

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ marginRight: 243 }}>ADULTO </span>
            <span style={{ marginRight: 20 }}>$71</span>
            <Botonmen onClick={() => handleChangeAdul()} disabled={adultTickets === 0 || isDisable}> <Icon2>-</Icon2></Botonmen>
            <Entrada type="text" value={adultTickets}  onch readOnly style={{ width: 80, textAlign: "center" }} />
            <Botones onClick={() => handleChangeAdulto()} disabled={numerodetickets === 10 || isDisabled}> <Icon> +</Icon></Botones>
            
          </div>


          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ marginRight: 267 }}>NIÑO  </span>
            <span style={{ marginRight: 20 }}>$56</span>
            <Botonmen onClick={() => handleChangeChild()} disabled={childTickets === 0 || isDisable}>-</Botonmen>
            <Entrada type="text" value={childTickets}  onch readOnly style={{ width: 80, textAlign: "center" }} />
            <Botones onClick={() =>handleChangeChildren()} disabled={numerodetickets === 10 || isDisabled}>+</Botones>
          </div>

          
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ marginRight: 215 }}>3 ERA EDAD </span>
            <span style={{ marginRight: 20 }}>$56</span>
            <Botonmen onClick={() =>handleChangeSen()} disabled={seniorTickets === 0 || isDisable}>-</Botonmen>
            <Entrada type="text" value={seniorTickets}  onch readOnly style={{ width: 80, textAlign: "center" }} />
            <Botones onClick={() => handleChangeSeñor()} disabled={numerodetickets === 10 || isDisabled}>+</Botones>
          </div>
        
      
    </Divi>

  );
};

export default TicketSelector;