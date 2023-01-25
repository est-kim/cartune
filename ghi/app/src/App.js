import { useState, useEffect } from 'react';
import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonsList from './SalesPersonsList';
import SalesPersonForm from './SalesPersonForm';
import NewCustomerForm from './NewCustomerForm';
import SalesRecordForm from './SalesRecordForm';
import SalesRecordsList from './SalesRecordsList';

function App() {
  const [salesPersons, setSalesPersons] = useState([])
  const [salesRecords, setSalesRecords] = useState([])

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

  useEffect( () => {
    getSalesPersons();
    getSalesRecords();
  }, [
    setSalesPersons,
    setSalesRecords,
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
          <Route path="sales" element={<SalesRecordsList salesRecords={salesRecords} getSalesRecords={getSalesRecords} />}>
            <Route path="new" element={<SalesRecordForm/>} getSalesPersons={getSalesPersons}/>
          </Route>
          <Route path="salespersons">
            <Route path="" element={<SalesPersonsList salesPersons={salesPersons} getSalesPersons={getSalesPersons} />} />
            <Route path="new" element={<SalesPersonForm getSalesPersons={getSalesPersons} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
