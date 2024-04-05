import React, {useState } from 'react'
import TicketSelector from '../components/Tikets-selection/Tickets-selection'
import TicketSummary from '../components/Ticketsummary/TicketSummary';


const Tickets = () => {
  const [resultado, setResultado] = useState(0);

  const handleActualizarResultado = (nuevoResultado) => {
    setResultado(nuevoResultado);
  };
  return (
    <div>
        <TicketSelector  actualizarResultado={handleActualizarResultado} />
        <TicketSummary resultado={resultado}/>
    </div>
  )
}

export default Tickets