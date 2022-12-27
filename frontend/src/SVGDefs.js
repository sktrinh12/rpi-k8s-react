import React from 'react'

const SVGDefs = ({ colour }) => {
  return (
    <>
      {/* SCREEN SURFACE GRADIENT */}
      <linearGradient id='linearGradient1582'>
        <stop stopColor='#191919' stopOpacity='0.95' offset='0' />
        <stop stopColor='#323232' stopOpacity='1' offset='1' />
      </linearGradient>
      <radialGradient
        xlinkHref='#linearGradient1582'
        id='radialGradient1576'
        cx='50%'
        cy='50%'
        fx='50%'
        fy='50%'
        r='50%'
      />
      {/* ELLIPSE GRADIENT FOR LEDS */}
      <radialGradient
        id='radialGradient1078'
        cx='5%'
        cy='5%'
        fx='2%'
        fy='2%'
        r='4%'
      >
        <stop stopColor='#EAEAEA' stopOpacity='0' offset='1' />
        <stop stopColor='#EAEAEA' stopOpacity='0.18' offset='0' />
      </radialGradient>
      {/* CLOCK DIGITS GLOW EFFECT */}
      <filter id='text-glow' x='-30%' y='-30%' width='170%' height='120%'>
        <feGaussianBlur stdDeviation='0.7 0.7' result='glow' />
        <feMerge>
          <feMergeNode in='glow' />
        </feMerge>
      </filter>
      {/* LED GLOW EFFECT */}
      <filter id='led-glow' height='250%' width='250%' x='-75%' y='-75%'>
        <feMorphology
          operator='dilate'
          radius='0.5'
          in='SourceAlpha'
          result='thicken'
        />
        <feGaussianBlur in='thicken' stdDeviation='1.2' result='blurred' />
        <feFlood floodColor={colour} result='glowColor' />
        <feComposite
          in='glowColor'
          in2='blurred'
          operator='in'
          result='glow_colored'
        />
        <feMerge>
          <feMergeNode in='glow_colored' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
    </>
  )
}
export default SVGDefs
