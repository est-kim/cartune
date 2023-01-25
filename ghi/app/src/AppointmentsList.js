import React from 'react';
import "./index.css";

function AppointmentsList({appointments, getAppointments}) {
    if (appointments === undefined) {
        return null;
    }

    const cancelAppointment = async (appointment) => {
        const appointmentUrl = `http://localhost:8080/api/appointments/${appointment.id}/`
        const fetchConfig = {
            method: 'delete'
        }
    const response = await fetch(appointmentUrl, fetchConfig);
    if (response.ok) {
        getAppointments()
    }
    }
    const completeAppointment = async (appointment) => {
        const appointmentUrl = `http://localhost:8080/api/appointments/${appointment.id}/`
        const fetchConfig = {
            method: 'put',
            body: JSON.stringify({ completed: true }),
            headers: {
                "Content-Type": "application/json",
            }
        }
    const response = await fetch(appointmentUrl, fetchConfig);
    if (response.ok) {
        getAppointments()
    }
}
    return (
        <>
        <div className='p-5 text-center'>
            <h1 className='mb-3'>Appointments List</h1>
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
            </tr>
        </thead>
        <tbody>
            {appointments.map(appointment => {
                if(!appointment.completed) {
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
                            <td>{ appointment.vip ?
                                <img
                                    src='https://cdn-icons-png.flaticon.com/512/5983/5983922.png'
                                    alt=""
                                    width="25px"
                                    height="25px"/> :
                                ""
                                }
                            </td>
                            <td>
                                <button id={ appointment.id } onClick={() => cancelAppointment(appointment)}
                                type="button" className="btn btn-danger">Cancel</button>
                            </td>
                            <td>
                                <button id={ appointment.id } onClick={() => completeAppointment(appointment)}
                                type="button" className="btn btn-primary">Completed</button>
                            </td>
                        </tr>
                        );
                }
            })}
            </tbody>
        </table>
    </>
    );
}
export default AppointmentsList;
