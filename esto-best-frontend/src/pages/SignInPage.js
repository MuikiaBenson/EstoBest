import React, { useState } from 'react';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    try {
      const response = await UserService.loginUser(credentials);
      console.log('Login successful', response);
      navigate('/homepage'); // Redirect to homepage on successful login
    } catch (error) {
      setErrorMessage('Invalid email or password'); // Set error message for failed login
      console.error('Login failed', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white py-4 px-6 flex justify-between items-center">
        <a href="/"><h1 className="text-xl font-bold">Esto-Best Property Management</h1></a>
        <a href="/" className="text-blue-500 hover:underline">Home</a>
      </header>
      <main className="flex-grow flex justify-center items-center px-6">
        <div className="max-w-md space-y-4">
          <h2 className="text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 mb-2">
                Email / Username
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>
      </main>
      <footer className="bg-gray-200 py-4 px-6 text-center text-gray-500">
        &copy; 2024 Property Management App
      </footer>
    </div>
  );
};

export default SignInPage;
