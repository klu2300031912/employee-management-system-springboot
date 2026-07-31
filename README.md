# 👥 Employee Management System

A full-stack Employee Management application built with **Spring Boot** (backend) and **React + Vite** (frontend).

## 🚀 Live Features
- 🔐 Login Page with role-based access (Admin / HR Manager)
- ➕ Add, Edit, Delete, View Employees
- 🔍 Search by name or email
- 🏢 Filter by department
- 📊 Department Pie Chart (Analytics)
- 📁 Export employees to CSV
- 🌙 Dark Mode toggle
- 📈 Stats Dashboard (Total, Departments, Avg Salary)
- 👤 Avatar initials & department badges
- 📱 Responsive Design

## 🛠️ Technologies Used

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Backend   | Java 17, Spring Boot 3            |
| Database  | MySQL                             |
| ORM       | Spring Data JPA / Hibernate       |
| Frontend  | React 18, Vite, Axios             |
| Charts    | Recharts                          |
| Build     | Maven                             |

## 📡 API Endpoints

| Method | URL               | Description         |
|--------|-------------------|---------------------|
| POST   | /employees        | Add new employee    |
| GET    | /employees        | Get all employees   |
| GET    | /employees/{id}   | Get employee by ID  |
| PUT    | /employees/{id}   | Update employee     |
| DELETE | /employees/{id}   | Delete employee     |

## 🔐 Demo Credentials

| Username | Password  | Role        |
|----------|-----------|-------------|
| admin    | admin123  | Admin       |
| hr       | hr123     | HR Manager  |

## ▶️ How to Run

### Backend (Spring Boot)
1. Make sure MySQL is running
2. Update `backend/src/main/resources/application.properties`:
```
spring.datasource.password=your_mysql_password
```
3. Run:
```bash
cd backend
mvn spring-boot:run
```
Backend runs on: `http://localhost:8081`

### Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on: `http://localhost:5173`

## 📁 Project Structure
```
employee-management-system/
├── backend/
│   ├── src/main/java/com/employee/management/
│   │   ├── config/CorsConfig.java
│   │   ├── controller/EmployeeController.java
│   │   ├── entity/Employee.java
│   │   ├── repository/EmployeeRepository.java
│   │   ├── service/EmployeeService.java
│   │   └── EmployeeManagementApplication.java
│   └── src/main/resources/application.properties
└── frontend/
    └── src/
        ├── App.jsx
        ├── App.css
        ├── Login.jsx
        ├── Login.css
        ├── DepartmentChart.jsx
        └── api.js
```

## 👨‍💻 Author
- GitHub: [@klu2300031912](https://github.com/klu2300031912)
