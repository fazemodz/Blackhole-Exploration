import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import '../assets/css/registerintrest.css';
interface FormData {
  name: string;
  email: string;
}

const RegisterInterest: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  const [message, setMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response = await axios.post('https://your-api-endpoint', formData);
      if (response.status === 200) {
        setMessage('Thank you for registering your interest!');
      } else {
        setMessage('An error occurred. Please try again later.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="register-interest">
      <h2>Register your interest</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterInterest;
