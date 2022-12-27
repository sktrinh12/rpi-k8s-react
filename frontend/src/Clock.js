import React, { useEffect, useState, useRef } from 'react'
import Screen from './Screen'
import ClockType from './ClockType'
import Timezone from './Timezone'
import Tempdata from './Tempdata'
import { BlockPicker } from 'react-color'

const baseURL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8000'
const wsURL = `ws${baseURL.substring(4, baseURL.length)}/ctime`
const tzoneURL = `${baseURL}/tzones`
const paletteColours = [
  '#EA3221',
  '#EA8B21',
  '#EAEA21',
  '#21EA26',
  '#21EAE3',
  '#2199EA',
  '#2135EA',
  '#6021EA',
  '#E521EA',
  '#EA2168',
]
let timeZones = ['Asia/Ho_Chi_Minh']
let timer

const Clock = () => {
  const [tzone, setTzone] = useState('Asia/Ho_Chi_Minh')
  const [timeData, setTimeData] = useState(Tempdata)
  const [clockType, setClockType] = useState('bcd')
  const [colour, setColour] = useState(paletteColours[5])
  const ws = useRef(null)

  const handleChangeColour = (color) => {
    setColour(color.hex)
  }

  let getDiffTime = async () => {
    const backendURL = `${baseURL}/binary-clock?clock_type=${clockType}&tzone=${tzone}`
    // console.log(backendURL);
    try {
      let fetched = await fetch(backendURL)
      if (fetched) {
        let json = await fetched.json()
        setTimeData(json)
        // console.log(tData);
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const initWebSocket = (socket) => {
    socket.onopen = (event) => {
      console.log('websocket open')
    }

    socket.onmessage = (event) => {
      const json = JSON.parse(event.data)
      setTimeData(json)
    }

    socket.onclose = (event) => {
      console.log('websocket closed')
    }

    socket.onerror = (err) => {
      console.error(`Socket encountered error: ${err.message}; closing socket`)
      socket.close()
    }
  }

  // time zone input box
  const searchTimeZone = (event) => {
    let input = event.target.value
    let matches = [],
      i

    if (input.length > 1) {
      for (i = 0; i < timeZones.length; i++) {
        if (timeZones[i].match(input)) {
          matches.push(timeZones[i])
        }
      }
    }
    setTzone(matches[0]) // should always be one element
    // console.log(matches);
  }

  // get time zone data
  const getTzones = async () => {
    try {
      let fetched = await fetch(tzoneURL)
      if (fetched) {
        timeZones = await fetched.json()
        // console.log(timeZones);
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }

  // time zone submit button
  const onClickSubmit = () => {
    if (timer) {
      clearInterval(timer)
    }
    console.log(`tzone: ${tzone}`)
    getDiffTime()
    console.log(`clock: ${clockType}`)
    timer = setInterval(() => {
      ws.current.send(clockType)
    }, 1000)
  }

  const handleClockDropdownChange = (e) => {
    setClockType(e.target.value)
  }

  // initialise websocket on mount
  useEffect(() => {
    const socket = new WebSocket(wsURL)
    getTzones()
    ws.current = socket
    initWebSocket(socket)
    return () => {
      socket.close()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Screen timeData={timeData} colour={colour} />

      <div className='wrapper'>
        <div className='colourpicker'>
          <BlockPicker
            color={colour}
            onChangeComplete={handleChangeColour}
            colors={paletteColours}
          />
        </div>
        <div className='dropdown-style'>
          <Timezone
            timeZones={timeZones}
            tzone={tzone}
            searchTimeZone={searchTimeZone}
          />
          <ClockType
            clockType={clockType}
            handleClockDropdownChange={handleClockDropdownChange}
          />
          <button onClick={onClickSubmit}>Get Time!</button>
        </div>
      </div>
    </>
  )
}

export default Clock
