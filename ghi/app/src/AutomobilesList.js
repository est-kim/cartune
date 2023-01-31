import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

function AutomobilesList({automobiles, getAutomobiles}) {
    const deleteAutomobile = async (automobile) => {
        const url = `http://localhost:8100/api/automobiles/${automobile.vin}/`
        const fetchConfig = {
          method: 'delete'
        }

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
          getAutomobiles()
        }
    }

    return (
        <>
        <div className="container">
            <div className='p-5 text-center'>
                <h1 className='mb-3'>List of Automobiles</h1>
            </div>
            <div className="add-automobiles-container d-flex justify-content-end">
                <Link to="/automobiles/new">
                    <button className="btn btn-success">Add New Automobile</button>
                </Link>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    {automobiles.map(automobile => {
                        return (
                            <tr key={automobile.id}>
                                <td>{ automobile.vin }</td>
                                <td>{ automobile.color }</td>
                                <td>{ automobile.year }</td>
                                <td>{ automobile.model.name }</td>
                                <td>{ automobile.model.manufacturer.name }</td>
                                <td>
                                    <button id={ automobile.vin } onClick={() => deleteAutomobile(automobile)}
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

export default AutomobilesList;
