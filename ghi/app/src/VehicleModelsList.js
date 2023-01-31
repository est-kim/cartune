import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

function VehicleModelsList({vehicleModels, getVehicleModels}) {

    const [deleted, setDeleted] = useState(false);

    const deleteVehicleModel = async (model) => {
        const url = `http://localhost:8100/api/models/${model.id}/`
        const fetchConfig = {
            method: 'delete'
        }
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            getVehicleModels()
            setDeleted(true)
        }
    }

    return (
        <>
        <div className="container">
            <div className='p-5 text-center'>
                <h1 className='mb-3'>List of Vehicles</h1>
            </div>
            {deleted && (
                <div className='alert alert-success mb-0' id="success-message">
                    Success! The vehicle model has been deleted.
                </div>
            )}
            <div className="add-models-container d-flex justify-content-end">
                <Link to="/models/new">
                    <button className="btn btn-success">Add New Vehicle</button>
                </Link>
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
                    {vehicleModels.map(vehicleModel => {
                        return (
                            <tr key={vehicleModel.id}>
                                <td>{ vehicleModel.name }</td>
                                <td>{ vehicleModel.manufacturer.name }</td>
                                <td>
                                    <img
                                        src={vehicleModel.picture_url}
                                        className="img-fluid"
                                        alt=""
                                        width="130px"
                                        height="auto"
                                    />
                                </td>
                                <td>
                                    <button id={ vehicleModel.id } onClick={() => deleteVehicleModel(vehicleModel)}
                                    type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default VehicleModelsList;
