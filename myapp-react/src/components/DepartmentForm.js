// src/components/DepartmentForm.js
import React, { useState, useEffect } from 'react';

const DepartmentForm = ({ department, onFormSubmit }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (department) {
      setName(department.name);
    } else {
      setName('');
    }
  }, [department]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Department Name"
        required
      />
      <button type="submit">
        {department ? 'Update Department' : 'Add Department'}
      </button>
    </form>
  );
};

export default DepartmentForm;
