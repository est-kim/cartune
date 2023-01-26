import React, {useState, useEffect} from 'react';

function AutomobileForm ({getAutomobiles}) {
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [vin, setVin] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const [vehicleModels, setVehicleModels] = useState([]);

    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }

    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleVehicleModelChange = (event) => {
        const value = event.target.value;
        setVehicleModel(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.color = color;
        data.year = parseInt(year);
        data.vin = vin;
        data.model_id = vehicleModel;

        const url = 'http://localhost:8100/api/automobiles/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newAutomobile = await response.json();
            setColor('');
            setYear('');
            setVin('');
            setVehicleModel('');
            getAutomobiles();
        }
    }

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/models/';

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          setVehicleModels(data.models);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a new automobile to inventory</h1>
            <form onSubmit={handleSubmit} id="create-automobile-form">
                <div className="form-floating mb-3">
                    <input onChange={handleColorChange} placeholder="Color"
                    required type="text" value={color} name="color" id="color"
                    className="form-control"/>
                    <label htmlFor="color">Color</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleYearChange} placeholder="Year"
                    required type="number" value={year} name="year" id="year"
                    className="form-control"/>
                    <label htmlFor="year">Year</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleVinChange} placeholder="Vin"
                    required type="text" value={vin} name="vin" id="vin"
                    className="form-control"/>
                    <label htmlFor="vin">VIN</label>
                </div>
              <div className="mb-3">
                <select onChange={handleVehicleModelChange} value={vehicleModel} required id="vehicleModel" name="vehicleModel" className="form-select">
                  <option>Choose a model</option>
                  {vehicleModels.map(vehicleModel => {
                    return (
                        <option key={vehicleModel.id} value={vehicleModel.id}>
                            {vehicleModel.name}
                        </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default AutomobileForm;
