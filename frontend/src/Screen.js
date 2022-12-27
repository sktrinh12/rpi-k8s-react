import React from 'react'
import Led from './Led'
import Digits from './Digits'
import SVGDefs from './SVGDefs'

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
        <SVGDefs colour={colour} />
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
              <Digits
                x={arrayRows[j]}
                y={arrayColumns[timeDigits.length === 6 ? 3 : 6] + 18}
                colour={colour}
                digit={digit}
              />
            </React.Fragment>
          )
        })}
      </>
    </svg>
  )
}

export default Screen
