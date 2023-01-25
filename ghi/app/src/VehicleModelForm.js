import React, {useState, useEffect} from 'react';

function VehicleModelForm ({getVehicleModels}) {
    const [vehicleModel, setVehicleModel] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [manufacturers, setManufacturers] = useState([]);

    const handleVehicleModelChange = (event) => {
        const value = event.target.value;
        setVehicleModel(value);
    }

    const handlePictureUrlChange = (event) => {
        const value = event.target.value;
        setPictureUrl(value);
    }

    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.name = vehicleModel;
        data.picture_url = pictureUrl;
        data.manufacturer_id = manufacturer;

        const url = 'http://localhost:8100/api/models/';
        const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const vehiceModel = await response.json();

            setVehicleModel('');
            setPictureUrl('');
            setManufacturer('');
            getVehicleModels();

        }

      }

      const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/';

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          setManufacturers(data.manufacturers);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a New Vehicle Model</h1>
            <form onSubmit={handleSubmit} id="create-vehicle-model-form">
              <div className="form-floating mb-3">
                <input onChange={handleVehicleModelChange} placeholder="Vehicle Model"
                required type="text" value={vehicleModel} name="vehicleModel" id="vehicleModel"
                className="form-control"/>
                <label htmlFor="vehicleModel">Vehicle Model</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handlePictureUrlChange} placeholder="Picture URL"
                required type="url" value={pictureUrl} name="pictureUrl" id="pictureUrl"
                className="form-control"/>
                <label htmlFor="pictureUrl">Picture URL</label>
              </div>
              <div className="mb-3">
                <select onChange={handleManufacturerChange} value={manufacturer} required id="manufacturer" name="manufacturer" className="form-select">
                  <option>Select a Manufacturer</option>
                  {manufacturers.map(manufacturer => {
                    return (
                        <option key={manufacturer.id} value={manufacturer.id}>
                            {manufacturer.name}
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
    );
}

export default VehicleModelForm;
