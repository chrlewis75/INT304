import EmployeeForm from './components/EmployeeForm';
import Cards from './components/Cards';
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  // Define the property for the employee, the function, and the default state.
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(savedEmployees);
  },[]);

  const handleFormSubmit = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);
  };

  const saveData = (employeeList) => {
    localStorage.setItem('employees', JSON.stringify(employeeList));
  };

  return (
    // Add the div because JSX requires a singular parent and adding a button
    <div className="App-header">
        <h1>Employee Form</h1>
        <EmployeeForm onSubmit={handleFormSubmit} />
        <h2>Employee List</h2>
        <Cards employees={employees} />
    </div>
  );

} 

export default App;
