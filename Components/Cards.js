import React from 'react'

function Cards({ employees }) {
  if (!employees || employees.length === 0) {
    return <div>No employees to display</div>;
  }
  
  return (
    <div>
      {employees.map((employee, index) => (
        <div key={index}>
          <p>Name: {employee.name}</p>
          <p>Email: {employee.email}</p>
          <p>Title: {employee.title}</p>
          <p>Department: {employee.department}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;