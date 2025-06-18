import React from 'react'
import TicketNum from './TicketNum'
import './css/ticket.css'

const Ticket = ({ticket}) => {
    return (
        <div className='ticket'>
            {ticket.map((num, idx) => (
                <TicketNum num={num} key={idx} />
            ))}
        </div>
    )
}

export default Ticket