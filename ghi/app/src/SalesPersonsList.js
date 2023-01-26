import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

function SalesPersonsList({salesPersons, getSalesPersons}) {
    if (salesPersons === undefined) {
        return null;
      }

    const deleteSalesPerson = async (salesPerson) => {
      const url = `http://localhost:8090/api/salespersons/${salesPerson.id}/`
      const fetchConfig = {
        method: 'delete'
      }
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      getSalesPersons()
    }
    }

    return (
        <>
        <div className='p-5 text-center'>
            <h1 className='mb-3'>List of Sales Persons</h1>
        </div>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee Number</th>
          </tr>
        </thead>
        <tbody>
          {salesPersons.map(salesPerson => {
            return (
            <tr key={salesPerson.id} >
              <td>{ salesPerson.name }</td>
              <td>{ salesPerson.employee_number }</td>
              <td>
                <button id={ salesPerson.id } onClick={() => deleteSalesPerson(salesPerson)}
                  type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
            );
          })}
          </tbody>
      </table>
      <div>
        <Link to="/salespersons/new">
          <button className="btn btn-success">Add a New Sales Person</button>
        </Link>
      </div>
      </>
    );
}

export default SalesPersonsList;
