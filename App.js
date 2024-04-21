import EmployeeForm from './components/EmployeeForm';
import './App.css';
import { useState } from 'react';

function App() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [title, setTitle] = useState('');
const [department, setDepartment] = useState('');

const handleSubmit = (e) => {
  console.log('Form submitted:', e);
  e.preventDefault();
  console.log('Name: ', name);
  console.log('Email: ', email);
  console.log('Title: ', title);
  console.log('Department: ', department);
}

  return (
    <div className="App">
      <h1>Employee Form</h1>
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
    );
} 

export default App;
