# CarTel

#### Team:
* Jason Dai - Service
* Esther Kim - Sales

## Design
CarCar is an application designed to manage an automobile dealership’s inventory, sales, services, customers, and employees. The dealership is split into 3 microservices: inventory, sales, and services. These microservices are designed to provide a solid foundation for building a scalable and maintainable web application. Django and Python were used to build the back-end of this application and ReactJS was used for the front-end to create a smooth and responsive single-page application.

The inventory microservice is responsible for managing the inventory of vehicles in the system. It provides RESTful API endpoints for the Manufacturer, VehicleModel, and Automobile models to allow users to create, read, update, and delete any of those models.

The services microservice follows RESTful API standards to allows users to create new technicians, schedule service appointments for their vehicles, view upcoming appointments, view service appointment history, cancel appointments, and see which users receive VIP treatment for servicing the automobile they purchased from our company. This microservice periodically polls data from the Inventory API so that the data in Inventory is not manipulated or altered.

The sales microservice follows RESTful API standards to allows users to create new sales persons, view a list of sales records, create a new sales record for available automobiles in the inventory, and view specific sales history of a sales person. This microservice also periodically polls data from the Inventory API so that the data in Inventory is not manipulated or altered.

## How to Run this Application
1. Clone the repository to your local machine
2. Install and run Docker by clicking [here](https://docs.docker.com/get-docker/){:target="_blank"}
3. Cd into the project directory and run the following commands in VS Code or your terminal. Note: if you are on macOS, you will see a warning about an environment variable named OS being missing. You can safely ignore this warning.
     ```
     docker-volume create beta-data
     docker-compose build
     docker-compose up
     ```
4. Open Docker desktop and wait for Docker to build the images and containers. This could take up to 5 minutes or more. Once Docker is fully up and running, it should look like the following:
(insert image here)
5. The web application can be accessed at localhost:3000
6. Once finished using the application, simply stop the running containers by clicking the stop button next to project-beta on Docker desktop or by typing `control + C` in the terminal

## Application Diagram
(insert image here)

## API Overviews



## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
