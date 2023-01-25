import { useState, useEffect } from 'react';
import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonsList from './SalesPersonsList';
import SalesPersonForm from './SalesPersonForm';

function App() {
  const [salesPersons, setSalesPersons] = useState([])

  const getSalesPersons = async () => {
    const url = 'http://localhost:8090/api/salespersons/'
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const salesPersons = data.sales_persons
      setSalesPersons(salesPersons)
    }
  }

  useEffect( () => {
    getSalesPersons();
  }, [
    setSalesPersons,
  ])

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<MainPage />} />
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
