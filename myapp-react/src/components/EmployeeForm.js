import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ employee, onFormSubmit, departments }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');
    const [department, setDepartment] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (employee) {
            setName(employee.name);
            setEmail(employee.email);
            setPosition(employee.position);
            setSalary(employee.salary);
            setDepartment(employee.department ? employee.department.id : ''); // Ensure correct ID is used
            setDescription(employee.description);
        } else {
            // Clear the form when no employee is selected
            setName('');
            setEmail('');
            setPosition('');
            setSalary('');
            setDepartment('');
            setDescription('');
        }
    }, [employee]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create the data object based on the current form values
        const data = { name, email, position, salary, department, description };
        onFormSubmit(data);
        // Clear the form after submission
        setName('');
        setEmail('');
        setPosition('');
        setSalary('');
        setDepartment('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Position"
            />
            <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="Salary"
                required
            />
            <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
            >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                        {dept.name}
                    </option>
                ))}
            </select>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <button type="submit">
                {employee ? 'Update Employee' : 'Add Employee'}
            </button>
        </form>
    );
};

export default EmployeeForm;
