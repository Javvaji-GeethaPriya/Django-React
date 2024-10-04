import React from 'react';

const DepartmentList = ({ departments, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Departments</h2>
      <ul>
        {departments.map((department) => (
          <li key={department.id}>
            {department.name}
            <button onClick={() => onEdit(department)}>Edit</button>
            <button onClick={() => onDelete(department.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentList;
