import React, { useState, useEffect } from 'react'

function SalesRecordForm({getSalesRecords}) {
    const [automobile, setAutomobile] = useState('')
    const [automobiles, setAutomobiles] = useState([])
    const [salesPerson, setSalesPerson] = useState('')
    const [salesPersons, setSalesPersons] = useState([])
    const [customer, setCustomer] = useState('')
    const [customers, setCustomers] = useState([])
    const [salesPrice, setPrice] = useState('')

    const handleAutomobileChange = (event) => {
        const value = event.target.value;
        setAutomobile(value);
    }

    const handleSalesPersonChange = (event) => {
        const value = event.target.value;
        setSalesPerson(value);
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPrice(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {}
        data.automobile = automobile
        data.sales_person = salesPerson
        data.customer = customer
        data.sales_price = parseFloat(salesPrice)

        const salesUrl = "http://localhost:8090/api/sales/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(salesUrl, fetchConfig)

        if (response.ok) {
            setPrice('');
            setAutomobile('');
            setSalesPerson('');
            setCustomer('');
            getSalesRecords()
            fetchAutomobiles()
        }
    }

    const fetchAutomobiles = async () => {
        const url = 'http://localhost:8090/api/automobiles/';
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        setAutomobiles(data.automobiles)
        }
    }

    const fetchSalesPersons = async () => {
        const url = 'http://localhost:8090/api/salespersons/';
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        setSalesPersons(data.sales_persons)
        }
    }

    const fetchCustomers = async () => {
        const url = 'http://localhost:8090/api/customers/';
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        setCustomers(data.customers)
        }
    }

    useEffect(() => {
        fetchAutomobiles()
        fetchSalesPersons()
        fetchCustomers()
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Record a new sale</h1>
                <form onSubmit={handleSubmit} id="create-sale-form">
                    <div className="mb-3">
                        <select value={automobile} onChange={handleAutomobileChange} required id="automobile" name="automobile" className="form-select">
                            <option value=''>Choose an automobile</option>
                            {automobiles.map(automobile => {
                                if (automobile.sold === false) {
                                    return (
                                        <option key={automobile.id} value={automobile.import_href}>
                                            {automobile.vin}
                                        </option>
                                    )
                                }
                            })}
                        </select>
                    </div>
                    <div className="mb-3">
                        <select value={salesPerson} onChange={handleSalesPersonChange} required id="sales_person" name="sales_person" className="form-select">
                            <option value=''>Choose a salesperson</option>
                            {salesPersons.map(salesperson => {
                                return (
                                    <option key={salesperson.id} value={salesperson.name}>
                                        {salesperson.name}
                                    </option>
                            );
                            })}
                        </select>
                    </div>
                    <div className="mb-3">
                        <select value={customer} onChange={handleCustomerChange} required id="customer" name="customer" className="form-select">
                            <option value=''>Choose a customer</option>
                            {customers.map(customer => {
                                return (
                                    <option key={customer.id} value={customer.name}>
                                        {customer.name}
                                    </option>
                            );
                            })}
                        </select>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={salesPrice} onChange={handlePriceChange} placeholder="Price" required type="number" name="price" id="price" className="form-control" />
                        <label htmlFor="price">Price</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SalesRecordForm;
