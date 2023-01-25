import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentsList from './AppointmentsList';
import AppointmentForm from './AppointmentForm';
import TechniciansList from './TechniciansList';
import TechnicianForm from './TechnicianForm';
import ServiceHistory from './ServiceHistory';

function App() {
  const[appointments, setAppointments] = useState([])
  const[technicians, setTechnicians] = useState([])

  const getAppointments = async () => {
    const url = "http://localhost:8080/api/appointments"
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const appointments = data.appointments
      setAppointments(appointments)
    }
  }

  const getTechnicians = async () => {
    const url = "http://localhost:8080/api/technicians"
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json()
      const technicians = data.technicians
      setTechnicians(technicians)
    }
  }

  useEffect( () => {
    getAppointments();
    getTechnicians();
  }, [
    setAppointments,
    setTechnicians,
  ]
  )

  if (appointments === undefined) {
    return null;
  }

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="appointments">
              <Route path="" element={<AppointmentsList appointments={appointments} getAppointments={getAppointments} />} />
              <Route path="new" element={<AppointmentForm getAppointments={getAppointments} />} />
          </Route>
          <Route path="technicians">
              <Route path="" element={<TechniciansList technicians={technicians} getTechnicians={getTechnicians} />} />
              <Route path="new" element={<TechnicianForm getTechnicians={getTechnicians} />} />
          </Route>
          <Route path="history" element={<ServiceHistory appointments={appointments} setAppointments={setAppointments} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
