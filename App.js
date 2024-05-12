import React, { useState, useEffect } from 'react';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';
import './App.css';


function App() {
  // Define the property for the employee, the function, and the default state.
  const [employees, setEmployees] = useState([])

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee])
    saveData([...employees, newEmployee]);
  };

  const saveData = (employeeList) => {
    localStorage.setItem('employees', JSON.stringify(employeeList));
  };

  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(savedEmployees);
  },[]);

  return (
    // Add the div because JSX requires a singular parent and adding a button
    <div className="App">
      <header className="App-Header">
        <h1>Employee Form</h1>
      </header>
      <div className="content">
        <EmployeeForm onSubmit={addEmployee} className="employee-form" />
        <EmployeeList employees={employees} className="employee-list" />
      </div>
    </div>
  );

} 

export default App;