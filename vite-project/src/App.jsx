import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './helper/data.jsx'
import './components/Doctors'
import Doctors from './components/Doctors'
import AppointmentList from './components/AppointmentList'




function App() {
  const [count, setCount] = useState(0)

 const [appointments, setAppointments] = useState([]);

  const addAppointment = (data) => {
    setAppointments([...appointments, data]);
  };
  return (
    <>
     <Doctors/>
     <AppointmentList appointments={appointments} />
    </>
  )
}

export default App
