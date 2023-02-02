import { useState, useEffect } from 'react';
import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonForm from './SalesPersonForm';
import NewCustomerForm from './NewCustomerForm';
import SalesRecordForm from './SalesRecordForm';
import SalesRecordsList from './SalesRecordsList';
import SalesPersonsList from './SalesPersonsList';
import SalesPersonSales from './SalesPersonSales';
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
import AutomobileForm from './AutomobileForm';
import Footer from './Footer';

function App() {
  const [salesPersons, setSalesPersons] = useState([])
  const [salesRecords, setSalesRecords] = useState([])
  const [customers, setCustomers] = useState([])
  const [appointments, setAppointments] = useState([]);
  const [technicians, setTechnicians] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [vehicleModels, setVehicleModels] = useState([]);
  const [automobiles, setAutomobiles] = useState([]);
  const [mode, setMode] = useState('light');

  const getSalesPersons = async () => {
    const url = 'http://localhost:8090/api/salespersons/'
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const salesPersons = data.sales_persons
      setSalesPersons(salesPersons)
    }
  }

  const getAppointments = async () => {
    const url = "http://localhost:8080/api/appointments"
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json()
      const appointments = data.appointments
      setAppointments(appointments)
    }
  }

  const getSalesRecords = async () => {
    const url = 'http://localhost:8090/api/sales/'
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const salesRecords = data.sales_records
      setSalesRecords(salesRecords)
    }
  }

  const getCustomers = async () => {
    const url = 'http://localhost:8090/api/customers/'
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const customers = data.customers
      setCustomers(customers)
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
      const automobiles = data.automobiles
      setAutomobiles(automobiles)
    }
  }

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };


  useEffect( () => {
    getAppointments();
    getTechnicians();
    getManufacturers();
    getVehicleModels();
    getAutomobiles();
    getSalesPersons();
    getSalesRecords();
    getCustomers();
  }, [
    setAppointments,
    setTechnicians,
    setManufacturers,
    setVehicleModels,
    setAutomobiles,
    setSalesPersons,
    setSalesRecords,
    setCustomers,
  ]
  )


  return (
    <BrowserRouter>
      <Nav />
        <div className="main-app">
        <div className={`App ${mode}`}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="customers">
            <Route path="new" element={<NewCustomerForm/>} />
          </Route>
          <Route path="sales">
            <Route path="" element={<SalesRecordsList salesRecords={salesRecords}/>} />
            <Route path="new" element={<SalesRecordForm salesRecords={salesRecords} getSalesRecords={getSalesRecords}/>} />
          </Route>
          <Route path="salespersons">
            <Route path="" element={<SalesPersonsList salesPersons={salesPersons} getSalesPersons={getSalesPersons} />} />
            <Route path="new" element={<SalesPersonForm salesPersons={salesPersons} getSalesPersons={getSalesPersons} />} />
            <Route path="sales" element={<SalesPersonSales salesPersons={salesPersons} getSalesPersons={getSalesPersons} salesRecords={salesRecords} getSalesRecords={getSalesRecords} />} />
          </Route>
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
              <Route path="new" element={<AutomobileForm getAutomobiles={getAutomobiles} />} />
          </Route>
        </Routes>
        </div>
          <button className="mode-toggle" onClick={toggleMode}>
            <i className={`${mode === 'light' ? 'fas fa-moon' : 'fas fa-sun'}`} />
          </button>
        </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
