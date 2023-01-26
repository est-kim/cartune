import React, {useState} from 'react';

function TechnicianForm ({getTechnicians}) {
  const [name, setName] = useState('');
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [existing, setExisting] = useState(false);

  const handleNameChange = (event) => {
      const value = event.target.value;
      setName(value);
  }

  const handleEmployeeNumberChange = (event) => {
      const value = event.target.value;
      setEmployeeNumber(value);
  }

  const handleSubmit = async (event) => {
      event.preventDefault();

      const data = {};

      data.name = name;
      data.employee_number = employeeNumber;

      const url = 'http://localhost:8080/api/technicians/';
      const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(url, fetchConfig);
      if (response.ok) {
          setName('');
          setEmployeeNumber('');
          getTechnicians();
          setSubmitted(true);
          setExisting(false);

      } else {
          setSubmitted(false);
          setExisting(true);
      }
    }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a New Technician</h1>
          <form onSubmit={handleSubmit} id="create-technician-form">
            <div className="form-floating mb-3">
              <input onChange={handleNameChange} placeholder="Technician Name"
              required type="text" value={name} name="name" id="name"
              className="form-control"/>
              <label htmlFor="name">Technician Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleEmployeeNumberChange} placeholder="Employee Number"
              required type="number" value={employeeNumber} name="employeeNumber" id="employeeNumber"
              className="form-control"/>
              <label htmlFor="employeeNumber">Employee Number</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
          <p></p>
          {submitted && (
              <div className="alert alert-success mb-0" id="success-message">
                  Success! The technician has been created.
              </div>
          )}
          {existing && (
              <div className="alert alert-danger mb-0" id="error-message">
                  Oops! The employee number is already in use.
              </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TechnicianForm;
