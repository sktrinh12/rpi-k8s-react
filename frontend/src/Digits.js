import React from 'react'

const Digits = ({ x, y, colour, digit }) => {
  return (
    <>
      <text
        x={x}
        y={y}
        textAnchor='middle'
        fill={colour}
        className={'clock-class'}
      >
        {digit}
      </text>
      <text
        x={x}
        y={y}
        textAnchor='middle'
        fill={colour}
        filter='url(#text-glow)'
        className={'clock-class'}
      >
        {digit}
      </text>
    </>
  )
}

export default Digits
