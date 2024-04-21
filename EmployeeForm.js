
// import the necessary libraries
import React, { useState } from 'react';
import './EmployeeForm';

// define the function
function EmployeeForm(props) {
  
    // define the varibales and setter functions, and set them to the default state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [department, setDepartment] = useState('');

  // define a submit function
  const handleSubmit = (e) => {
    console.log('Form submitted!', e);
    e.preventDefault();
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Title: ', title);
    console.log('Department: ', department);
  }

  // Render the HTML
  return (
    // define the form
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="department">Department: </label>
        <input
          type="department"
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
      <h2>Employee List</h2>
    </form>
  );
}

// allow the Component to be called from elsewhere
export default EmployeeForm;
