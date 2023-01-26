import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

function TechniciansList({technicians, getTechnicians}) {

  const deleteTechnician = async (technician) => {
    const url = `http://localhost:8080/api/technicians/${technician.id}/`
    const fetchConfig = {
      method: 'delete'
    }
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      getTechnicians()
    }
  }

  return (
    <>
      <div className='p-5 text-center'>
          <h1 className='mb-3'>List of Technicians</h1>
      </div>
      <div className="add-technicians-container d-flex justify-content-end">
        <Link to="/technicians/new">
          <button className="btn btn-success">Add New Technician</button>
        </Link>
      </div>
      <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Employee Number</th>
        </tr>
      </thead>
      <tbody>
        {technicians.map(technician => {
          return (
          <tr key={technician.id} >
            <td>{ technician.name }</td>
            <td>{ technician.employee_number }</td>
            <td>
              <button id={ technician.id } onClick={() => deleteTechnician(technician)}
                type="button" className="btn btn-danger">Delete</button>
            </td>
          </tr>
          );
        })}
        </tbody>
      </table>
    </>
  );
}

export default TechniciansList;
