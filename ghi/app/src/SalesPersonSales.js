import React, {useEffect, useState} from 'react'

function SalesPersonSales({salesRecords, salesPersons}) {
    const [name, setName] = useState('')

    const handleNameChange = (event) => {
      const value = event.target.value
      setName(value)
    }

    return (
    <>
        <h1>Sales Person History</h1>
        <div className="mb-3">
            <select value={name} onChange={handleNameChange} required id="name" name="name" className="form-select">
            <option value="">Choose a Sales Person</option>
            {salesPersons.map(salesPerson => {
                    return (
                        <option key={salesPerson.id} value={salesPerson.name}>
                            {salesPerson.name}
                        </option>
                    );
                })}
            </select>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Sales Person</th>
                    <th>Purchaser</th>
                    <th>VIN</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {salesRecords.filter(salesRecord => salesRecord.sales_person.name === name).map(salesRecord => {
                    console.log(salesRecords)
                    return (
                        <tr key={salesRecord.id}>
                            <td>{salesRecord.sales_person.name}</td>
                            <td>{salesRecord.customer.name}</td>
                            <td>{salesRecord.automobile.vin}</td>
                            <td>${salesRecord.sales_price}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>
  )
}

export default SalesPersonSales;
