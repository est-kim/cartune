import React from 'react';
import "./index.css";

function VehiclesList({vehicles, getVehicles}) {
    if (vehicles === undefined) {
        return null;
    }

    const deleteVehicle = async (model) => {
        const url = `http://localhost:8100/api/models/${model.id}/`
        const fetchConfig = {
            method: 'delete'
        }
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
        getVehicles()
    }
    }

    return (
        <>
        <div className='p-5 text-center'>
            <h1 className='mb-3'>List of Vehicles</h1>
        </div>
        <table className="table table-striped">
        <thead>
            <tr>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Picture</th>
            </tr>
        </thead>
        <tbody>
            {vehicles.map(vehicle => {
                return (
                    <tr key={vehicle.id}>
                        <td>{ vehicle.name }</td>
                        <td>{ vehicle.manufacturer.name }</td>
                        <td>
                            <img
                                src={vehicle.picture_url}
                                alt=""
                                width="130px"
                                height="80px"
                            />
                        </td>
                        <td>
                            <button id={ vehicle.id } onClick={() => deleteVehicle(vehicle)}
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
export default VehiclesList;
