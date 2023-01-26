import React, { useState } from 'react';

function SalesPersonForm({getSalesPersons}) {
    const [name, setName] = useState('')
    const [employeeNumber, setEmployeeNumber] = useState('')

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

        const data = {}
        data.name = name;
        data.employee_number = employeeNumber;

        const url = 'http://localhost:8090/api/salespersons/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            setName('');
            setEmployeeNumber('');
            getSalesPersons();
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a New Sales Employee</h1>
                <form onSubmit={handleSubmit} id="create-sales-person-form">
                <div className="form-floating mb-3">
                    <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleEmployeeNumberChange} value={employeeNumber} placeholder="Employee Number" required type="number" name="employee_number" id="employee_number" className="form-control"/>
                    <label htmlFor="employee_number">Employee Number</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
    )

}

export default SalesPersonForm;
