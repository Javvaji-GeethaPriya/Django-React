// src/App.js
import React, { useEffect, useState } from 'react';
import { getEmployees, getDepartments, updateEmployee, createEmployee, deleteEmployee, updateDepartment, createDepartment, deleteDepartment } from './api';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import DepartmentForm from './components/DepartmentForm';
import DepartmentList from './components/DepartmentList';

const App = () => {
  // State for employees
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // State for departments
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  // Fetch employees and departments on component mount
  useEffect(() => {
    fetchEmployees();
    fetchDepartments();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await getDepartments();
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  // Employee CRUD Operations
  const handleEmployeeSubmit = async (data) => {
    try {
      if (selectedEmployee) {
        await updateEmployee(selectedEmployee.id, data);
      } else {
        await createEmployee(data);
      }
      // Reset the selected employee and refresh the employee list
      setSelectedEmployee(null);
      fetchEmployees(); // Refresh employee list
    } catch (error) {
      console.error('Error submitting employee:', error);
    }
  };

  const handleEditEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await deleteEmployee(id);
      fetchEmployees(); // Refresh employee list
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  // Department CRUD Operations
  const handleDepartmentSubmit = async (data) => {
    try {
      if (selectedDepartment) {
        await updateDepartment(selectedDepartment.id, data);
      } else {
        await createDepartment(data);
      }
      setSelectedDepartment(null);
      fetchDepartments(); // Refresh department list
    } catch (error) {
      console.error('Error submitting department:', error);
    }
  };

  const handleEditDepartment = (department) => {
    setSelectedDepartment(department);
  };

  const handleDeleteDepartment = async (id) => {
    try {
      await deleteDepartment(id);
      fetchDepartments(); // Refresh department list
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  return (
    <div>
      <h1>Employee Management</h1>
      <EmployeeForm 
        employee={selectedEmployee} 
        onFormSubmit={handleEmployeeSubmit} 
        departments={departments} // Pass departments to employee form
      />
      <EmployeeList 
        employees={employees} 
        onEdit={handleEditEmployee} 
        onDelete={handleDeleteEmployee} 
      />

      <h1>Department Management</h1>
      <DepartmentForm 
        department={selectedDepartment} 
        onFormSubmit={handleDepartmentSubmit} 
      />
      <DepartmentList 
        departments={departments} 
        onEdit={handleEditDepartment} 
        onDelete={handleDeleteDepartment} 
      />
    </div>
  );
};

export default App;
