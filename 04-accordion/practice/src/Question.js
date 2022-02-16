import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  return (
    <article className='question'>
      <header></header>
      <h4>{title}</h4>
      <button className='btn'>btn</button>
      <p>{info}</p>
    </article>
  )
}

export default Question
