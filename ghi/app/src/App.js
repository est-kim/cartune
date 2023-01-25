import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentsList from './AppointmentsList';
import { useState, useEffect } from 'react';

function App() {
  const[appointments, setAppointments] = useState([])

  const getAppointments = async () => {
    const url = "http://localhost:8080/api/appointments"
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const appointments = data.appointments
      setAppointments(appointments)
    }
  }

  useEffect( () => {
    getAppointments();
  }, [
    setAppointments,
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
              {/* <Route path="new" element={<AppointmentForm getAppointmnets={getAppointments} />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
