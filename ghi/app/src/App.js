import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentsList from './AppointmentsList';
import ServiceHistory from './ServiceHistory';
import AppointmentForm from './AppointmentForm';
import TechniciansList from './TechniciansList';
import TechnicianForm from './TechnicianForm';
import ManufacturersList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import VehiclesList from './VehiclesList';


function App() {
  const[appointments, setAppointments] = useState([]);
  const[technicians, setTechnicians] = useState([]);
  const[manufacturers, setManufacturers] = useState([]);
  const[vehicles, setVehicles] = useState([]);


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

  const getManufacturers = async () => {
    const url = "http://localhost:8100/api/manufacturers"
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json()
      const manufacturers = data.manufacturers
      setManufacturers(manufacturers)
    }
  }

  const getVehicles = async () => {
    const url = "http://localhost:8100/api/models"
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json()
      const vehicles = data.models
      setVehicles(vehicles)
    }
  }


  useEffect( () => {
    getAppointments();
    getTechnicians();
    getManufacturers();
    getVehicles();
  }, [
    setAppointments,
    setTechnicians,
    setManufacturers,
    setVehicles,
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
              <Route path="history" element={<ServiceHistory appointments={appointments} setAppointments={setAppointments} />} />
              <Route path="new" element={<AppointmentForm getAppointments={getAppointments} />} />
          </Route>
          <Route path="technicians">
              <Route path="" element={<TechniciansList technicians={technicians} getTechnicians={getTechnicians} />} />
              <Route path="new" element={<TechnicianForm getTechnicians={getTechnicians} />} />
          </Route>
          <Route path="manufacturers">
              <Route path="" element={<ManufacturersList manufacturers={manufacturers} getManufacturers={getManufacturers} />} />
              <Route path="new" element={<ManufacturerForm getManufacturers={getManufacturers} />} />
          </Route>
          <Route path="vehicles">
              <Route path="" element={<VehiclesList vehicles={vehicles} getVehicles={getVehicles} />} />
              {/* <Route path="new" element={<VehicleForm getVehicles={getVehicles} />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
