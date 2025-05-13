import { useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import List from './components/List'
import Bounce from './components/Buonce'
import Button from './components/Button'
import Logo from './espressif.svg'
import Manage from './Manage'
import espressif from './back.jpg'


function App() {
  return (
    <>
      <div className="flex flex-wrap justify-between">
        <img src={Logo} className='w-48'/>
        <Button text="Manage your files" ahref={"/storage"} color="red" wid="60"></Button>
        </div>
        <div style={{backgroundImage: `url(${espressif})`}} className='text-left bg-cover bg-center mt-6 mb-10 '>
            <Heading prop="Find more about ESP32" ></Heading>
      </div>
        <Bounce></Bounce>
        <p className='mt-16 text-lg'>ESP32 is a series of low-cost, low-power system on a chip microcontrollers with integrated Wi-Fi and 
                dual-mode Bluetooth. The ESP32 series employs either a Tensilica Xtensa LX6 microprocessor in both 
                dual-core and single-core variations, Xtensa LX7 dual-core microprocessor or a single-core RISC-V 
                microprocessor and includes built-in antenna switches, RF balun, power amplifier, 
                low-noise receive amplifier, filters, and power-management modules. 
                ESP32 is created and developed by Espressif Systems, a Chinese company based in Shanghai, 
                and is manufactured by TSMC using their 40 nm process. 
                It is a successor to the ESP8266 microcontroller.</p>
        <List></List>
    </>
  )
}

export default App
