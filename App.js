import React, { useState } from 'react';
import Product from './Application';
import './App.css';
import Product2 from './Product2';
import Product4 from './Product4';
import Product3 from './Product3';
const App = () => {
  const [submittedData, setSubmittedData] = useState([]);
  const handleFormSubmit = (data) => {
    setSubmittedData([...submittedData, data]);
  };
  const [submittedData1, setSubmittedData1] = useState([]);
  const handleFormSubmit1 = (data) => {
    setSubmittedData1([...submittedData1, data]);
  };
  const [submittedData2, setSubmittedData2] = useState([]);
  const handleFormSubmit2 = (data) => {
    setSubmittedData2([...submittedData2, data]);
  };
  const [submittedData3, setSubmittedData3] = useState([]);
  const handleFormSubmit3 = (data) => {
    setSubmittedData3([...submittedData3, data]);
  };
  return (
    <div className="App">
     <h1 className='a'> Department Details</h1>
     <div className='a2'>
      <Product onSubmit={handleFormSubmit} />
      <Product2 onSubmit={handleFormSubmit1} />
      <Product3 onSubmit={handleFormSubmit2} />
      <Product4 onSubmit={handleFormSubmit3} />
     </div>
     <div className='a3'>
      <div className='b1'>
      <h2>Data for Exicuters</h2>
      {submittedData.length === 0 ? (
        <p>No data submitted yet.</p>
      ) : (
        submittedData.map((person, index) => (
          <div key={index} className="submitted-person">
            <p><strong>Name:</strong> {person.name}</p>
            <p><strong>Phone:</strong> {person.phone}</p>
            <p><strong>Email:</strong> {person.email}</p>
            <p><strong>Designation:</strong> {person.designation}</p>
            <p><strong>Location:</strong> {person.location}</p>
          </div>
        ))
      )}
      </div>
      <div className='b2'>
<h2>Data for Product Manager</h2>
{submittedData1.length === 0 ? (
        <p>No data submitted yet.</p>
      ) : (
        submittedData1.map((person, index) => (
          <div key={index} className="submitted-person">
            <p><strong>Name:</strong> {person.name}</p>
            <p><strong>Phone:</strong> {person.phone}</p>
            <p><strong>Email:</strong> {person.email}</p>
            <p><strong>Designation:</strong> {person.designation}</p>
            <p><strong>Location:</strong> {person.location}</p>
          </div>
        ))
      )}
      </div>
<div className='b3'>
<h2>Data for Development</h2>
{submittedData2.length === 0 ? (
        <p>No data submitted yet.</p>
      ) : (
        submittedData2.map((person, index) => (
          <div key={index} className="submitted-person">
            <p><strong>Name:</strong> {person.name}</p>
            <p><strong>Phone:</strong> {person.phone}</p>
            <p><strong>Email:</strong> {person.email}</p>
            <p><strong>Designation:</strong> {person.designation}</p>
            <p><strong>Location:</strong> {person.location}</p>
          </div>
        ))
      )}
</div>
<div className='b4'>
<h2>Data for Business Development</h2>
{submittedData3.length === 0 ? (
        <p>No data submitted yet.</p>
      ) : (
        submittedData3.map((person, index) => (
          <div key={index} className="submitted-person">
            <p><strong>Name:</strong> {person.name}</p>
            <p><strong>Phone:</strong> {person.phone}</p>
            <p><strong>Email:</strong> {person.email}</p>
            <p><strong>Designation:</strong> {person.designation}</p>
            <p><strong>Location:</strong> {person.location}</p>
          </div>
        ))
      )}
      </div>
      </div>
    </div>
   
  );
};
export default App;
