import React from 'react';
import "./index.css";

function ManufacturersList({manufacturers, getManufacturers}) {
    if (manufacturers === undefined) {
        return null;
      }

    const deleteManufacturer = async (manufacturer) => {
      const url = `http://localhost:8100/api/manufacturers/${manufacturer.id}/`
      const fetchConfig = {
        method: 'delete'
      }
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      getManufacturers()
    }
  }
    return (
        <>
        <div className='p-5 text-center'>
            <h1 className='mb-3'>Manufacturers List</h1>
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
