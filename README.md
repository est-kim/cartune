### 🚘 CarTune

#### Team:
* Jason Dai - Service
* Esther Kim - Sales
----

## Table of Contents
[TOC]

----

## Design
CarCar is an application designed to manage an automobile dealership’s inventory, sales, services, customers, and employees. The dealership is split into 3 microservices: inventory, sales, and services. These microservices are designed to provide a solid foundation for building a scalable and maintainable web application. While utilizing PostgreSQL for relational database management, Django and Python were used to build the back-end of this application and ReactJS was used for the front-end to create a smooth and responsive single-page application.

The inventory microservice is responsible for managing the inventory of vehicles in the system. It provides RESTful API endpoints for the Manufacturer, VehicleModel, and Automobile models to allow users to create, read, update, and delete any of those models.

The services microservice follows RESTful API standards to allows users to create new technicians, see the list of technicians, schedule service appointments for their vehicles, view upcoming appointments, view a history of service appointments, cancel appointments, mark appointments as completed, and see which users receive VIP treatment for servicing if the automobile was purchased from the company.This microservice periodically polls data from the Inventory API so that the data in Inventory is not manipulated or altered.

The sales microservice follows RESTful API standards to allows users to create a new customer, create a new sales person, view a list of all sales persons, view a list of sales records, create a new sales record from the available automobiles in the inventory, and view specific sales history of a sales person. This microservice also periodically polls data from the Inventory API so that the data in Inventory is not manipulated or altered.

## How to Run this Application
1. Clone the repository to your local machine
2. Install and run Docker by clicking [here](https://docs.docker.com/get-docker/)
3. Cd into the project directory and run the following commands in VS Code or your terminal. Note: if you are on macOS, you will see a warning about an environment variable named OS being missing. You can safely ignore this warning.
     ```
     docker-volume create beta-data
     docker-compose build
     docker-compose up
     ```
4. Open Docker desktop and wait for Docker to build the images and containers. This could take up to 5 minutes or more.
<details>
  <summary markdown="span">Once Docker is fully up and running, it should look like the following:</summary>
    ![Running Docker Containers](https://imgur.com/3tXKxct.jpg)
</details>

5. The web application can be accessed at **localhost:3000**
6. Once finished using the application, simply stop the running containers by clicking the stop button next to project-beta on Docker desktop or by typing `control + C` in the terminal

## Application Diagram
![Diagram](https://imgur.com/TWmkPFH.jpg)

## API Overviews
#### Inventory API
The inventory API uses RESTful methods to allow users to add new manufacturers, view all manufacturers, add new vehicles models, view all vehicle models, add new automobiles, and view all automobiles.

- **View all manufacturers**: http://localhost:3000/manufacturers
    - View all existing car manufacturers in the database
    - Delete a single car manufacturer from the database
- **New manufacturer**: http://localhost:3000/manufacturers/new
    - Create a new car manufacturer by adding the manufacturer name to add to the database
- **View all vehicle models**: http://localhost:3000/models
    - View all existing vehicle models in the database
    - Delete a single vehicle model from the database
- **New vehicle model**: http://localhost:3000/models/new
    - Create a new vehicle model by adding the vehicle model name, a picture URL, and selecting an existing manufacturer from the dropdown to add to the database
- **View all automobiles**: http://localhost:3000/automobiles
    - View all existing automobiles in the database
    - Delete a single automobile from the database
- **New automobile**: http://localhost:3000/automobiles/new
    - Create a new automobile by adding the color, year, VIN, and selecting an existing vehicle model from the dropdown to add to the database

#### Sales API
The sales API uses RESTful methods to allow users to create a new customer, create a new sales person, view a list of sales persons, view a list of sales records, create a new sales record from the available automobiles in the inventory, and view specific sales history of a sales person.

- **New customer**: http://localhost:3000/customers/new
    - Create a new customer by adding the name, address, and unique phone number to successfully add to the database
- **New sales person**: http://localhost:3000/salespersons/new
    - Create a new sales person employee by adding the name and unique employee number to add to the database
- **New sale**: http://localhost:3000/sales/new
    - Create a new sale by choosing an automobile from the list of unsold automobiles in the dropdown, choosing an existing sales employee, choosing an existing customer, and adding the sale price
- **View all sales persons**: http://localhost:3000/salespersons
    - View all existing sales persons in the database
    - Delete a single sales person from the database
- **View all sales records**: http://localhost:3000/sales
    - View the history of all existing sales records
- **View sales person’s history**: http://localhost:3000/salespersons/sales
    - View a specific sales person’s sales history by choosing a sales person from the dropdown who has made sales

#### Services API
The services API uses RESTful methods to create new technicians, view a list of technicians, schedule service appointments for their vehicles, view upcoming appointments, view service appointment history, cancel appointments, complete appointments, and see which users receive VIP treatment for servicing if the automobile was purchased from the company.
- **New technician**: http://localhost:3000/technicians/new
    - Create a new technician by adding the name and unique employee number to successfuly add to the database
- **View all technicians**: http://localhost:3000/technicians
    - View all existing technicians in the database
    - Delete a single technician from the database
- **New service appointment**: http://localhost:3000/appointments/new
    - Create a new service appointment by adding a VIN number, customer name, date and time, choosing an existing technician, and reason for service
- **View all appointments**: http://localhost:3000/appointments
    - View all existing appointments in the database
    - Delete an existing appointment by clicking the cancel button
    - Complete an existing appointment by clicking the completed button
    - If the automobile being serviced is an automobile that was sold from our inventory, the customer is marked to receive VIP treatment from the concierge
- **View service appointment history**: http://localhost:3000/appointments/history
    - View all existing service appointments with a clickable status that indicates whether it is complete or in progress
    - If the automobile being serviced is an automobile that was sold from our inventory, the customer is marked to receive VIP treatment from the concierge
    - View an appointment or multiple appointments by typing in the VIN in the search bar

## CRUD Routes / API Documentation

## API Endpoints

<details>
  <summary markdown="span">Inventory API</summary>

#### Inventory API
|      Action     |    Method    |       URL       |
|:---------------:|:------------:|:---------------:|
| List manufacturers | GET  | http://<span></span>localhost:8100/api/manufacturers/    |
| Create a manufacturer | POST  | http://<span></span>localhost:8100/api/manufacturers/    |
| Get a specific manufacturer | GET  | http://<span></span>localhost:8100/api/manufacturers/:id/   |
| Update a specific manufacturer | PUT  | http://<span></span>localhost:8100/api/manufacturers/:id/   |
| Delete a specific manufacturer | DELETE  | http://<span></span>localhost:8100/api/manufacturers/:id/   |

<details>
  <summary markdown="span">POST request to api/manufacturers/</summary>

Request body:
```
{
    "name": "Ferrari",
}
```
Returns:
```
{
    "href": "api/manufacturers/1/",
    "id": 1,
    "name": "Ferrari
}
```
</details>
<details>
  <summary markdown="span">GET request to api/manufacturers/</summary>

```
{
    "manufacturers": [
        {
            "href": "/api/manufacturers/1/",
            "id": 1,
            "name": "Ferrari"
        }
    ]
}
```
</details>

|      Action     |    Method    |       URL       |
|:---------------:|:------------:|:---------------:|
| List automobiles | GET  | http://<span></span>localhost:8100/api/models/    |
| Create an automobile | POST  | http://<span></span>localhost:8100/api/models/    |
| Get a specific automobile | GET  | http://<span></span>localhost:8100/api/models/:id/   |
| Update a specific automobile | PUT  | http://<span></span>localhost:8100/api/models/:id/   |
| Delete a specific automobile | DELETE  | http://<span></span>localhost:8100/api/models/:id/   |

<details>
  <summary markdown="span">POST request to api/models/</summary>

Request body:
```
{
	"name": "California",
	"picture_url": "https://www.pngplay.com/wp-content/uploads/13/Ferrari-California-T-Background-PNG-Image.png",
	"manufacturer_id": 1
}
```
Returns:
```
{
	"href": "/api/models/1/",
	"id": 1,
	"name": "California",
	"picture_url": "https://www.pngplay.com/wp-content/uploads/13/Ferrari-California-T-Background-PNG-Image.png",
	"manufacturer": {
		"href": "/api/manufacturers/1/",
		"id": 1,
		"name": "Ferrari"
	}
}
```
</details>
<details>
  <summary markdown="span">GET request to api/models/</summary>

```
{
	"models": [
		{
			"href": "/api/models/1/",
			"id": 1,
			"name": "California",
			"picture_url": "https://www.motortrend.com/uploads/sites/10/2017/11/2015-ferrari-california-t-convertible-angular-front.png",
			"manufacturer": {
				"href": "/api/manufacturers/1/",
				"id": 1,
				"name": "Ferrari"
			}
		}
    ]
}
```
</details>

|      Action     |    Method    |       URL       |
|:---------------:|:------------:|:---------------:|
| List vehicle models | GET  | http://<span></span>localhost:8100/api/automobiles/    |
| Create a vehicle model | POST  | http://<span></span>localhost:8100/api/automobiles/  |
| Get a specific vehicle model | GET  | http://<span></span>localhost:8100/api/automobiles/:vin/   |
| Update a specific vehicle model | PUT  | http://<span></span>localhost:8100/api/automobiles/:vin/    |
| Delete a specific vehicle model | DELETE  | http://<span></span>localhost:8100/api/automobiles/:vin/    |

<details>
  <summary markdown="span">POST request to api/automobiles/</summary>

Request body:
```
{
  "color": "Red",
  "year": 2022,
  "vin": "1C3CC5FB2AN120174",
  "model_id": 1
}

```
Returns:
```
{
	"href": "/api/automobiles/1C3CC5FB2AN120174/",
	"id": 1,
	"color": "Red",
	"year": 2022,
	"vin": "1C3CC5FB2AN120174",
	"model": {
		"href": "/api/models/1/",
		"id": 1,
		"name": "California",
		"picture_url": "https://www.motortrend.com/uploads/sites/10/2017/11/2015-ferrari-california-t-convertible-angular-front.png",
		"manufacturer": {
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Ferrari"
		}
	}
}
```
</details>
<details>
  <summary markdown="span">GET request to api/automobiles/</summary>

```
{
	"automobiles": [
		{
			"href": "/api/automobiles/1C3CC5FB2AN120174/",
			"id": 1,
			"color": "Red",
			"year": 2022,
			"vin": "ZFF65LHA6C0821264",
			"model": {
				"href": "/api/models/1/",
				"id": 1,
				"name": "California",
				"picture_url": "https://www.motortrend.com/uploads/sites/10/2017/11/2015-ferrari-california-t-convertible-angular-front.png",
				"manufacturer": {
					"href": "/api/manufacturers/1/",
					"id": 1,
					"name": "Ferrari"
				}
			}
		}
    ]
}
```
</details>
</details>

<details>
  <summary markdown="span">Service API</summary>

#### Service API
|      Action     |    Method    |       URL       |
|:---------------:|:------------:|:---------------:|
| List technicians | GET  | http://<span></span>localhost:8080/api/technicians/ |
| Create a technician | POST  | http://<span></span>localhost:8080/api/technicians/   |
| Get a specific technician | GET  | http://<span></span>localhost:8080/api/technicians/:id/  |
| Update a specific technician | PUT  | http://<span></span>localhost:8080/api/technicians/:id/   |
| Delete a specific technician | DELETE  | http://<span></span>localhost:8080/api/technicians/:id/   |

<details>
  <summary markdown="span">POST request to api/technicians/</summary>

Request body:
```
{
    "name": "Bill Horst",
    "employee_number": "1337"
}
```
Returns:
```
{
	"href": "/api/technicians/1/",
	"id": 1,
	"name": "Bill Horst",
	"employee_number": "1337"
}
```
</details>
<details>
  <summary markdown="span">GET request to api/technicians/</summary>

```
{
	"technicians": [
		{
			"href": "/api/technicians/1/",
			"id": 1,
			"name": "Bill Horst",
			"employee_number": 1337
		}
    ]
}
```
</details>

|      Action     |    Method    |       URL       |
|:---------------:|:------------:|:---------------:|
| List appointments | GET  | http://<span></span>localhost:8080/api/appointments/ |
| Create an appointment | POST  | http://<span></span>localhost:8080/api/appointments/   |
| Get a specific appointment | GET  | http://<span></span>localhost:8080/api/appointments/:id/  |
| Update a specific appointment | PUT  | http://<span></span>localhost:8080/api/appointments/:id/   |
| Delete a specific appointment | DELETE  | http://<span></span>localhost:8080/api/appointments/:id/   |

<details>
  <summary markdown="span">POST request to api/appointments/</summary>

Request body:
```
{
	"vin": "1C3CC5FB2AN120174",
	"customer_name": "Paul Nnaoji",
	"date_time": "2023-01-24 01:49:00+00:00",
	"technician": "Bill Horst",
	"reason": "Oil Change"
}
```
Returns:
```
{
	"href": "/api/appointments/1/",
	"id": 1,
	"vin": "1C3CC5FB2AN120174",
	"customer_name": "Paul Nnaoji",
	"date_time": "2023-01-24 01:49:00+00:00",
	"technician": {
		"href": "/api/technicians/1/",
		"id": 1,
		"name": "Bill Horst",
		"employee_number": 1337
	},
	"reason": "Oil Change",
	"vip": true,
	"completed": false
}
```
</details>
<details>
  <summary markdown="span">GET request to api/appointments/</summary>

```
{
	"appointments": [
		{
			"href": "/api/appointments/1/",
			"id": 1,
			"vin": "1C3CC5FB2AN120174",
			"customer_name": "Paul Nnaoji",
			"date_time": "2023-01-24T01:49:00+00:00",
			"technician": {
				"href": "/api/technicians/1/",
				"id": 1,
				"name": "Bill Horst",
				"employee_number": 1337
			},
			"reason": "Oil Change",
			"vip": true,
			"completed": false
		}
    ]
}
```
</details>

|      Action     |    Method    |       URL       |
|:---------------:|:------------:|:---------------:|
| List appointments by VIN | GET  | http://<span></span>localhost:8080/api/appointments/:vin |

<details>
  <summary markdown="span">GET request to api/appointments/:vin</summary>

```
[
	{
		"href": "/api/appointments/1/",
		"id": 1,
		"vin": "1C3CC5FB2AN120174",
		"customer_name": "Paul Nnaoji",
		"date_time": "2023-01-24T01:49:00+00:00",
		"technician": {
			"href": "/api/technicians/1/",
			"id": 1,
			"name": "Bill Horst",
			"employee_number": 1337
		},
		"reason": "Oil Change",
		"vip": true,
		"completed": false
	}
]
```
</details>
</details>

<details>
  <summary markdown="span">Sales API</summary>

#### Sales API
|      Action     |    Method    |       URL       |
|:---------------:|:------------:|:---------------:|
| List salespersons | GET  | http://<span></span>localhost:8080/api/salespersons/ |
| Create a salesperson | POST  | http://<span></span>localhost:8080/api/salespersons/   |
| Get a specific salesperson | GET  | http://<span></span>localhost:8080/api/salespersons/:id/  |
| Update a specific salesperson | PUT  | http://<span></span>localhost:8080/api/salespersons/:id/   |
| Delete a specific salesperson | DELETE  | http://<span></span>localhost:8080/api/salespersons/:id/   |

<details>
  <summary markdown="span">POST request to api/salespersons/</summary>

Request body:
```
{
    "name": "Josh Elder",
    "employee_number": 1
}
```
Returns:
```
{
    "name": "Josh Elder",
    "employee_number": 1,
    "id": 1
}
```
</details>
<details>
  <summary markdown="span">GET request to api/salespersons/</summary>

```
Add return here
```
</details>

|      Action     |    Method    |       URL       |
|:---------------:|:------------:|:---------------:|
| List sales | GET  | http://<span></span>localhost:8080/api/sales/ |
| Create a sales | POST  | http://<span></span>localhost:8080/api/sales/  |
| Get a specific sales | GET  | http://<span></span>localhost:8080/api/sales/:id/  |
| Update a specific sales | PUT  | http://<span></span>localhost:8080/api/sales/:id/  |
| Delete a specific sales | DELETE  | http://<span></span>localhost:8080/api/sales/:id/   |

<details>
  <summary markdown="span">POST request to api/sales/</summary>

Request body:
```
{
    "sales_price": 100000.99,
    "sales_person": "Filamer Doronio",
    "customer": "Ching Cheng",
    "automobile": "/api/automobiles/1/"
}
```
Returns:
```
{
	"id": 1,
	"sales_price": 100000.99,
	"sales_person": {
		"name": "Filamer Doronio",
		"employee_number": 1,
		"id": 1
	},
	"customer": {
		"href": "/api/customers/1/",
		"name": "Ching Cheng",
		"address": "123 Guava Lane, San Jose, CA",
		"phone_number": "123-123-1234",
		"id": 1
	},
	"automobile": {
		"id": 2,
		"vin": "1YVGF22D825285555",
		"sold": true,
		"import_href": "/api/automobiles/1/"
	}
}
```
</details>
<details>
  <summary markdown="span">GET request to api/customers/</summary>

```
{
	"sales_persons": [
		{
			"name": "Esther Kim",
			"employee_number": 5,
			"id": 5
		},
		{
			"name": "Jason Dai",
			"employee_number": 6,
			"id": 6
		}
    ]
}
```
</details>

|      Action     |    Method    |       URL       |
|:---------------:|:------------:|:---------------:|
| List customer | GET  | http://<span></span>localhost:8080/api/customers/ |
| Create a customer | POST  | http://<span></span>localhost:8080/api/customers/ |
| Get a specific customer | GET  | http://<span></span>localhost:8080/api/customers/:id/ |
| Update a specific customer | PUT  | http://<span></span>localhost:8080/api/customers/:id/  |
| Delete a specific customer | DELETE  | http://<span></span>localhost:8080/api/customers/:id/   |

<details>
  <summary markdown="span">POST request to api/customers/</summary>

Request body:
```
{
    "name": "Filamer Doronio",
    "address": "123 Coding Lane, San Francisco, CA",
    "phone_number": "123-456-7890",
    "id": 1
}
```
Returns:
```
{
    "name": "Filamer Doronio",
    "address": "123 Coding Lane, San Francisco, CA",
    "phone_number": "123-456-7890",
    "id": 1
}
```
</details>
<details>
  <summary markdown="span">GET request to api/customers/</summary>

```
{
	"customers": [
		{
			"href": "/api/customers/1/",
			"name": "Filamer Doronio",
			"address": "123 Coding Lane, San Francisco, CA",
			"phone_number": "123-456-7890",
			"id": 1
		},
        {
			"href": "/api/customers/2/",
			"name": "Don Julio",
			"address": "2 Tequila Lane, Newport, CA 90201",
			"phone_number": "111-111-1111",
			"id": 2
		}
    ]
}
```
</details>

|      Action     |    Method    |       URL       |
|:---------------:|:------------:|:---------------:|
| List all automobiles | GET  | http://<span></span>localhost:8080/api/automobiles/ |

<details>
  <summary markdown="span">GET request to api/automobiles/</summary>

```
{
	"automobiles": [
		{
			"id": 13,
			"vin": "1",
			"sold": true,
			"import_href": "/api/automobiles/1/"
		},
		{
			"id": 14,
			"vin": "2",
			"sold": true,
			"import_href": "/api/automobiles/2/"
		}
    ]
}
```
</details>
</details>

## Service microservice
The service microservice was designed to have 3 models:
- `Technician`: contains `name` and `employee_number` properties to store technician employee information in the database.
- `Appointment`: contains `vin`, `customer_name`, `date_time`, `technician`, `reason`, `completed`, and `vip` properties to store appointment information in the database. The `vin` field is used to store the VIN number of the vehicle associated with the appointment. This is not a foreign key because it is not related to any other model in the database as customers who did not purchase cars from the dealership would be allowed to schedule appointments. The `technician` property is a foreign key to the `Technician` model as there can be many appointments for one technician. The `completed` and `vip` properties are used to keep track of the status of the appointment and whether the customer is a VIP or not. The VIP status of a customer will be determined by cross-referencing the VIN number of the vehicle with the inventory records of purchased vehicles.
- `AutomobileVO`: contains the `vin` and `import_href`. This model serves as a value object to periodically poll automobile data from the `inventory-api` and integrate it into the `service-api` database without modifying the `inventory-api` database. This enables the data to be used as needed within the `service-api` microservice.



## Sales microservice
The sales microservice was designed to have 4 models:
- `Customer`: contains `name`, `address`, and `phone_number` properties to store customer information in the database.
- `SalesPerson`: contains `name` and `employee_number` properties to store sales person employee information in the database.
- `SalesRecord`: contains a `sales_person` property as a foreign key to the `SalesPerson` model as there can be many sales records for one sales person. This model also contains a `customer` property as a foreign key to the `Customer` model because of the one to many relationship indicating that one customer can have many sales records. The `automobile` property is also a foreign key to the `AutomobileVO` model as one automobile can have many sales_records if sold more than once. Lastly, there is a `sales_price` property to keep track of the price the automobile was sold for.
- `AutomobileVO`: contains the `vin`, `import_href`, and `sold` properties. This model serves as a value object to periodically poll automobile data from the `inventory-api` and integrate it into the `sales-api` database without modifying the `inventory-api` database. This enables the data to be used as needed within the `sales-api` microservice.
