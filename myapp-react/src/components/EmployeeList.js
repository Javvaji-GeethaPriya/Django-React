// src/components/EmployeeList.js
import React from 'react';
import './EmployeeList.css'; // Optional: for additional styling

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Employees</h2>
      <ul className="employee-list">
        {employees.map((employee) => (
          <li key={employee.id} className="employee-item">
            <div className="employee-details">
              <h3>{employee.name}</h3>
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Position:</strong> {employee.position}</p>
              <p><strong>Salary:</strong> ${employee.salary}</p>
              {/* Directly accessing department name */}
              <p><strong>Department:</strong> {employee.department ? employee.department.name : 'N/A'}</p>
              <p><strong>Description:</strong> {employee.description || 'No description available.'}</p>
            </div>
            <div className="employee-actions">
              <button onClick={() => onEdit(employee)}>Edit</button>
              <button onClick={() => onDelete(employee.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
