import React from 'react'
import Led from './Led'

const r = 4.25

const range = (start, end, step) => {
  return Array.from(
    { length: Math.ceil((end - start) / step) },
    (e, x) => start + x * step
  )
}

const regexFilter = (pattern, json) => {
  const regex = new RegExp(pattern)
  return Object.keys(json)
    .filter((key) => regex.test(key))
    .reduce((obj, key) => {
      return Object.assign(obj, {
        [key]: json[key],
      })
    }, {})
}

const returnTimeDigits = (tData, dataLength) => {
  let timeDigits
  if (dataLength === 3) {
    // if bitsData contains 3 elements for 'binary' - H:M:S
    timeDigits = [tData.hour, tData.minute, tData.seconds]
  } else {
    // if bitsData contains 6 elements for 'bcd' - HH:MM:SS
    timeDigits = [
      ...tData.hour.split(''),
      ...tData.minute.split(''),
      ...tData.seconds.split(''),
    ]
  }
  return timeDigits
}

const Screen = ({ timeData, colour }) => {
  const tData = regexFilter('^hour|^minute|^seconds', timeData)
  const bData = regexFilter('^H|^M|^S', timeData)
  const dataLength = Object.keys(bData).length
  const timeDigits = returnTimeDigits(tData, dataLength)
  // console.log(timeData);
  // console.log(dataLength);
  const width = 100
  const height = 88

  // if bcd is selected need 6 columns (keys) HH:MM:SS
  let numCirclesX = 6
  let numCirclesY = 4
  // if binary is selected only need three columns (keys) H:M:S
  if (dataLength === 3) {
    numCirclesX = 3
    numCirclesY = 7
  }
  const XSpacing = width / (numCirclesX + 1)
  const YSpacing = height / (numCirclesY + 1)
  const arrayColumns = range(
    YSpacing,
    YSpacing + numCirclesY * YSpacing,
    YSpacing
  )
  const arrayRows = range(XSpacing, XSpacing + numCirclesX * XSpacing, XSpacing)
  // console.log(arrayColumns);
  // console.log(arrayRows);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      version='1.1'
      viewBox='0 0 100 100'
    >
      <defs>
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
      </defs>
      <rect
        y='1.5'
        x='1'
        rx='9'
        ry='9'
        width='98%'
        height='97%'
        fill='url(#radialGradient1576)'
        fillOpacity='1'
        stroke='#1b1b1b'
        strokeWidth='3'
      />
      <>
        {/* bit data */}
        {Object.values(bData).map((bits, i) => {
          // 3 or 6 keys
          return (
            <React.Fragment key={`bit_frag_${i}`}>
              {bits.map((bit, j) => {
                // 4 or 7 elements
                return (
                  <Led
                    key={`led_${i}${j}`}
                    colour={bit === 1 ? colour : '#BCBCBC'}
                    x={arrayRows[i]}
                    y={arrayColumns[j]}
                    r={r}
                  />
                )
              })}
            </React.Fragment>
          )
        })}
        {/* time units */}
        {timeDigits.map((digit, j) => {
          return (
            <React.Fragment key={`digit_frag_${j}`}>
              <text
                x={arrayRows[j]}
                y={arrayColumns[timeDigits.length === 6 ? 3 : 6] + 18}
                textAnchor='middle'
                fill={colour}
                className={'clock-class'}
              >
                {digit}
              </text>
            </React.Fragment>
          )
        })}
      </>
    </svg>
  )
}

export default Screen
