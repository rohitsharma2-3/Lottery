import React, { useState } from 'react'
import './css/lottery.css'
import { genRandomNumber, sum } from './js/logic'
import Ticket from './Ticket'

const Lotry = ({ n, winingSum }) => {

  const [ticket, setTicket] = useState(genRandomNumber(n))

  function genrateTicket() {
    setTicket(genRandomNumber(n))
  }

  let checkResult = sum(ticket) === winingSum

  return (
    <div>
      <h1>Lottery</h1>
      <Ticket ticket={ticket} />
      <br />
      <button onClick={genrateTicket}>Genrate Ticket</button>
      <p>{checkResult && 'Congratulations You Won!'}</p>
    </div>
  )
}

export default Lotry