import React, {useState, useEffect} from 'react';

function AppointmentForm ({getAppointments}) {
    const [vin, setVin] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [technician, setTechnician] = useState('');
    const [technicians, setTechnicians] = useState([]);
    const [reason, setReason] = useState('');

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleCustomerNameChange = (event) => {
        const value = event.target.value;
        setCustomerName(value);
    }

    const handleDateTimeChange = (event) => {
        const value = event.target.value;
        setDateTime(value);
    }

    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value);
    }

    const handleReasonChange = (event) => {
        const value = event.target.value;
        setReason(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.vin = vin;
        data.customer_name = customerName;
        data.date_time = dateTime;
        data.technician = technician;
        data.reason = reason;

        const appointmentUrl = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
        };
        const appointmentResponse = await fetch(appointmentUrl, fetchConfig);
        if (appointmentResponse.ok) {
            const appointment = await appointmentResponse.json();

            setVin('');
            setCustomerName('');
            setDateTime('');
            setTechnician('');
            setReason('');
            getAppointments();

        }

      }

      const fetchData = async () => {
        const url = 'http://localhost:8080/api/technicians/';

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          setTechnicians(data.technicians);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a New Appointment</h1>
            <form onSubmit={handleSubmit} id="create-appointment-form">
              <div className="form-floating mb-3">
                <input onChange={handleVinChange} placeholder="VIN"
                required type="text" value={vin} name="vin" id="vin"
                className="form-control"/>
                <label htmlFor="vin">VIN Number</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleCustomerNameChange} placeholder="Customer Name"
                required type="text" value={customerName} name="customerName" id="customerName"
                className="form-control"/>
                <label htmlFor="customerName">Customer Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleDateTimeChange} placeholder="Date and Time"
                required type="datetime-local" value={dateTime} name="dateTime" id="dateTime"
                className="form-control"/>
                <label htmlFor="dateTime">Date and Time</label>
              </div>
              <div className="mb-3">
                <select onChange={handleTechnicianChange} value={technician} required id="technician" name="technician" className="form-select">
                  <option>Select a Technician</option>
                  {technicians.map(technician => {
                    return (
                        <option key={technician.id} value={technician.name}>
                            {technician.name}
                        </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleReasonChange} placeholder="Reason for service"
                required type="text" value={reason} name="reason" id="reason"
                className="form-control"/>
                <label htmlFor="reason">Reason for service</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default AppointmentForm;
