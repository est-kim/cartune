import React from 'react'
import { Link } from 'react-router-dom';

function SalesRecordsList({ salesRecords }) {

    return (
        <>
        <div className="container">
        <div className='p-5 text-center'>
                <h1 className='mb-3'>List of Sales Records</h1>
            </div>
            <div className="add-sales-container d-flex justify-content-end">
                <Link to="/sales/new">
                <button className="btn btn-success">Add New Sales Record</button>
                </Link>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Employee Number</th>
                        <th>Customer's Name</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {salesRecords.map(salesRecord => {
                        return (
                            <tr key={salesRecord.id}>
                                <td>{ salesRecord.sales_person.name }</td>
                                <td>{ salesRecord.sales_person.employee_number }</td>
                                <td>{ salesRecord.customer.name }</td>
                                <td>{ salesRecord.automobile.vin }</td>
                                <td>${ salesRecord.sales_price }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

        </>
    );
}

export default SalesRecordsList;
