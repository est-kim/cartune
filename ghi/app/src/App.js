import { useState, useEffect } from 'react';
import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonForm from './SalesPersonForm';
import NewCustomerForm from './NewCustomerForm';
import SalesRecordForm from './SalesRecordForm';
import SalesRecordsList from './SalesRecordsList';
import SalesPersonSales from './SalesPersonSales';

function App() {
  const [salesPersons, setSalesPersons] = useState([])
  const [salesRecords, setSalesRecords] = useState([])
  const [customers, setCustomers] = useState([])

  const getSalesPersons = async () => {
    const url = 'http://localhost:8090/api/salespersons/'
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const salesPersons = data.sales_persons
      setSalesPersons(salesPersons)
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

  useEffect( () => {
    getSalesPersons();
    getSalesRecords();
    getCustomers();
  }, [
    setSalesPersons,
    setSalesRecords,
    setCustomers,
  ])

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="customers">
            <Route path="new" element={<NewCustomerForm/>} />
          </Route>
          <Route path="sales" element={<SalesRecordsList salesRecords={salesRecords}/>}/>
          <Route path="sales/new" element={<SalesRecordForm salesPersons={salesPersons} getSalesPersons={getSalesPersons} />} />
          <Route path="salespersons" >
            <Route path="new" element={<SalesPersonForm salesPersons={salesPersons} getSalesPersons={getSalesPersons} />} />
            <Route path="sales" element={<SalesPersonSales salesPersons={salesPersons} getSalesPersons={getSalesPersons} salesRecords={salesRecords} getSalesRecords={getSalesRecords} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
