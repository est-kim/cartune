import React, {useState} from 'react';

function ManufacturerForm ({getManufacturers}) {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.name = name;

        const url = 'http://localhost:810-/api/manufacturers/';
        const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newManufacturer = await response.json();

            setName('');
            getManufacturers();

        }

      }

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a New Manufacturer</h1>
            <form onSubmit={handleSubmit} id="create-technician-form">
              <div className="form-floating mb-3">
                <input onChange={handleNameChange} placeholder="Manufacturer Name"
                required type="text" value={name} name="name" id="name"
                className="form-control"/>
                <label htmlFor="name">Manufacturer Name</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ManufacturerForm;
