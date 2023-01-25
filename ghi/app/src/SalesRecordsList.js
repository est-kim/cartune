import React from 'react'

function SalesRecordsList({salesRecords, salesPersons}) {
    if (salesRecords === undefined) {
        return null;
    }

    return (
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
                            <td>{ salesRecord.sales_person }</td>
                            <td>{ salesRecord.sales_person.employee_number }</td>
                            <td>{ salesRecord.customer }</td>
                            <td>{ salesRecord.automobile }</td>
                            <td>$ { salesRecord.sales_price }</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default SalesRecordsList;