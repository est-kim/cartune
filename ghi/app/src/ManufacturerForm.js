import React, {useState} from 'react';

function ManufacturerForm ({getManufacturers}) {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [existing, setExisting] = useState(false);

  const handleNameChange = (event) => {
      const value = event.target.value;
      setName(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.name = name;

    const url = 'http://localhost:8100/api/manufacturers/';
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
        getManufacturers();
        setSubmitted(true);
        setExisting(false);
    } else {
        setSubmitted(false);
        setExisting(true);
      }
  }

  return (
    <div className="container">
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a New Manufacturer</h1>
          <form onSubmit={handleSubmit} id="create-manufacturer-form">
            <div className="form-floating mb-3">
              <input onChange={handleNameChange} placeholder="Manufacturer Name"
              required type="text" value={name} name="name" id="name"
              className="form-control"/>
              <label htmlFor="name">Manufacturer Name</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
          <p></p>
          {submitted && (
            <div className="alert alert-success mb-0" id="success-message">
              Success! The manufacturer has been created.
            </div>
          )}
          {existing && (
            <div className="alert alert-danger mb-0" id="error-message">
              Oops! The manufacturer already exists.
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default ManufacturerForm;
