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
import VehicleModelsList from './VehicleModelsList';
import VehicleModelForm from './VehicleModelForm';
import AutomobilesList from './AutomobilesList';


function App() {
  const[appointments, setAppointments] = useState([]);
  const[technicians, setTechnicians] = useState([]);
  const[manufacturers, setManufacturers] = useState([]);
  const[vehicleModels, setVehicleModels] = useState([]);
  const[automobiles, setAutomobiles] = useState([]);


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

  const getVehicleModels = async () => {
    const url = "http://localhost:8100/api/models"
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json()
      const vehicleModels = data.models
      setVehicleModels(vehicleModels)
    }
  }

  const getAutomobiles = async () => {
    const url = "http://localhost:8100/api/automobiles/"
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json()
      const automobiles = data.autos
      setAutomobiles(automobiles)
    }
  }



  useEffect( () => {
    getAppointments();
    getTechnicians();
    getManufacturers();
    getVehicleModels();
    getAutomobiles();
  }, [
    setAppointments,
    setTechnicians,
    setManufacturers,
    setVehicleModels,
    setAutomobiles,
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
          <Route path="models">
              <Route path="" element={<VehicleModelsList vehicleModels={vehicleModels} getVehicleModels={getVehicleModels} />} />
              <Route path="new" element={<VehicleModelForm getVehicleModels={getVehicleModels} />} />
          </Route>
          <Route path="automobiles">
              <Route path="" element={<AutomobilesList automobiles={automobiles} getAutomobiles={getAutomobiles} />} />
              {/* <Route path="new" element={<VehicleModelForm getAutomobiles={getAutomobiles} />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
