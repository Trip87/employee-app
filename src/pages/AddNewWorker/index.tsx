import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import { Employee } from '../../Context/hooks/useAppContext';
import './AddNewWorker.scss';

const AddNewWorker: React.FC = () => {
  const { employees, setEmployees } = useContext(AppContext);
  const [employee, setEmployee] = useState<Employee>({
    id: employees.length + 1,
    firstName: '',
    lastName: '',
    phone: '',
    birthDate: '',
    address: {
      address: '',
      city: '',
    },
    email: '',
    image: '',
    maidenName: '',
    age: 0,
    gender: '',
    username: '',
    password: '',
    bloodGroup: '',
    height: '',
    weight: '',
    eyeColor: '',
    hair: {
      color: '',
      type: '',
    },
    ip: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmployees([...employees, employee]);
    navigate('/user-list');
  };

  return (
    <div className="add-worker">
      <h2 className="add-worker__title">Dodaj Pracownika</h2>
      <form className="add-worker__form" onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} placeholder="Imię" required />
        <input type="text" name="lastName" value={employee.lastName} onChange={handleChange} placeholder="Nazwisko" required />
        <input type="date" name="birthDate" value={employee.birthDate} onChange={handleChange} placeholder="Data urodzenia" required />
        <input type="text" name="address" value={employee.address.address} onChange={handleChange} placeholder="Ulica" required />
        <input type="text" name="city" value={employee.address.city} onChange={handleChange} placeholder="Miejscowość" required />
        <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder="Email" required />
        <input type="tel" name="phone" value={employee.phone} onChange={handleChange} placeholder="Numer telefonu" required />
        <input type="url" name="image" value={employee.image} onChange={handleChange} placeholder="URL do zdjęcia" required />
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};

export default AddNewWorker;