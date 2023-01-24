import React from 'react'


function SalesPersonsList({salesPersons, getSalesPersons}) {
    if (salesPersons === undefined) {
        return null;
    }

    const handleDelete = async (salesPerson) => {
        const salesPersonUrl = `http://localhost:8090/api/salespersons/${salesPerson.id}/`
        const fetchConfig = {
            method: 'delete'
        }
        const salesPersonResponse = await fetch(salesPersonUrl, fetchConfig)
        if (salesPersonResponse.ok) {
            getSalesPersons()
        }
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Employee Number</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {salesPersons.map(salesPerson => {
                    return (
                        <tr key={salesPerson.id}>
                            <td>{ salesPerson.name }</td>
                            <td>{ salesPerson.employee_number }</td>
                            <td>
                                <button type="button" id={salesPerson.id} onClick={() => handleDelete(salesPerson)} className="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default SalesPersonsList;
