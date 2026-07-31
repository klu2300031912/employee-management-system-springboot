import React, { useEffect, useState } from 'react';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from './api';
import './App.css';

const emptyForm = { name: '', email: '', department: '' };

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => { fetchEmployees(); }, []);

  const fetchEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateEmployee(editId, form);
      setMessage('Employee updated!');
    } else {
      await createEmployee(form);
      setMessage('Employee added!');
    }
    setForm(emptyForm);
    setEditId(null);
    fetchEmployees();
    setTimeout(() => setMessage(''), 3000);
  };

  const handleEdit = (emp) => {
    setForm({ name: emp.name, email: emp.email, department: emp.department });
    setEditId(emp.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this employee?')) {
      await deleteEmployee(id);
      setMessage('Employee deleted!');
      fetchEmployees();
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      {message && <div className="alert">{message}</div>}

      <div className="form-card">
        <h2>{editId ? 'Edit Employee' : 'Add Employee'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            placeholder="Department"
            value={form.department}
            onChange={(e) => setForm({ ...form, department: e.target.value })}
            required
          />
          <div className="form-actions">
            <button type="submit" className="btn-primary">
              {editId ? 'Update' : 'Add Employee'}
            </button>
            {editId && (
              <button type="button" className="btn-secondary" onClick={() => { setForm(emptyForm); setEditId(null); }}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="table-card">
        <h2>Employees ({employees.length})</h2>
        {employees.length === 0 ? (
          <p className="empty">No employees found. Add one above!</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td><span className="badge">{emp.department}</span></td>
                  <td>
                    <button className="btn-edit" onClick={() => handleEdit(emp)}>Edit</button>
                    <button className="btn-delete" onClick={() => handleDelete(emp.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
