import React from 'react';

function EmployeeList({ employees }) {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <strong>Name:</strong> {employee.name}, 
            <strong>Email:</strong> {employee.email}, 
            <strong>Title:</strong> {employee.title}, 
            <strong>Department:</strong> {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
