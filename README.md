# Employee Management System

A full-stack Employee Management application built with **Spring Boot** (backend) and **React** (frontend).

## Features
- Add new employees
- View all employees
- Update employee details
- Delete employees

## Technologies Used

| Layer     | Technology              |
|-----------|-------------------------|
| Backend   | Java 17, Spring Boot 3  |
| Database  | MySQL                   |
| ORM       | Spring Data JPA         |
| Frontend  | React 18, Axios         |
| Build     | Maven                   |

## API Endpoints

| Method | URL               | Description         |
|--------|-------------------|---------------------|
| POST   | /employees        | Add new employee    |
| GET    | /employees        | Get all employees   |
| GET    | /employees/{id}   | Get employee by ID  |
| PUT    | /employees/{id}   | Update employee     |
| DELETE | /employees/{id}   | Delete employee     |

## How to Run

### Backend (Spring Boot)
1. Make sure MySQL is running
2. Update `src/main/resources/application.properties` with your MySQL password
3. Run the app:
```bash
cd backend
mvn spring-boot:run
```
Backend runs on: `http://localhost:8080`

### Frontend (React)
```bash
cd frontend
npm install
npm start
```
Frontend runs on: `http://localhost:3000`

## Project Structure
```
employee-management-system/
├── backend/
│   ├── src/main/java/com/employee/management/
│   │   ├── controller/EmployeeController.java
│   │   ├── entity/Employee.java
│   │   ├── repository/EmployeeRepository.java
│   │   ├── service/EmployeeService.java
│   │   └── EmployeeManagementApplication.java
│   └── src/main/resources/application.properties
└── frontend/
    └── src/
        ├── App.js
        ├── App.css
        └── api.js
```
