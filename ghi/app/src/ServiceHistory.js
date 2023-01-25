import React, { useState, useEffect } from 'react';

function ServiceHistory({ appointments, setAppointments}) {
    const[searchVin, setSearchVin] = useState('')

    const handleSearch = async (event) => {
        event.preventDefault();
        const filteredAppointments = appointments.filter((appointment) =>
        appointment.vin.includes(searchVin)
        );
        setAppointments(filteredAppointments);
    };
    const handleInputChange = async (event) => {
        const value = event.target.value;
        setSearchVin(value);
    };

    return (
        <>
        <form onSubmit={handleSearch} className="input-group mb-0 mt-5">
            <input onChange={handleInputChange} type="search" className="form-control rounded" placeholder="Search by VIN" aria-label="Search" aria-describedby="search-addon" />
            <button type="submit" className="btn btn-outline-secondary">Search</button>
        </form>
        <div className='p-5 text-center'>
            <h1 className='mb-3'>Service Appointment History</h1>
        </div>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
            <th>VIP</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {appointments.map(appointment => {
                return (
                    <tr key={appointment.id}>
                        <td>{ appointment.vin }</td>
                        <td>{ appointment.customer_name }</td>
                        <td>{ new Date(appointment.date_time).toLocaleDateString("en-US") }</td>
                        <td>{ new Date(appointment.date_time).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        }) }
                        </td>
                        <td>{ appointment.technician.name }</td>
                        <td>{ appointment.reason }</td>
                        <td>{ appointment.vip ? "👑" : ""}</td>
                        <td>{ appointment.completed ? "Completed" : "In Progress" }</td>
                    </tr>
                    );
            })}
            </tbody>
        </table>
      </>
    );
}

export default ServiceHistory;
