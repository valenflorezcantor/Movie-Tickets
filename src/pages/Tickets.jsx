import React from 'react'
import TicketSelector from '../components/Tickets-selection'
import TicketSummary from '../components/TicketSummary'

const Tickets = () => {
  return (
    <div>
        <TicketSelector />
        <TicketSummary />
    </div>
  )
}

export default Tickets