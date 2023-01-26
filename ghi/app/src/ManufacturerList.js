import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

function ManufacturersList({manufacturers, getManufacturers}) {

  const [deleted, setDeleted] = useState(false);

  const deleteManufacturer = async (manufacturer) => {
    const url = `http://localhost:8100/api/manufacturers/${manufacturer.id}/`
    const fetchConfig = {
      method: 'delete'
    }
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      getManufacturers()
      setDeleted(true)
    }
  }

  return (
    <>
      <div className='p-5 text-center'>
          <h1 className='mb-3'>List of Manufacturers</h1>
      </div>
      {deleted && (
          <div className='alert alert-success mb-0' id="success-message">
              Success! The manufacturer has been deleted.
          </div>
      )}
      <div className="add-manufacturers-container d-flex justify-content-end">
          <Link to="/manufacturers/new">
            <button className="btn btn-success">Add New Manufacturer</button>
          </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map(manufacturer => {
            return (
              <tr key={manufacturer.id}>
                <td>{ manufacturer.name }</td>
                <td>
                  <button id={ manufacturer.id } onClick={() => deleteManufacturer(manufacturer)}
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

export default ManufacturersList;
