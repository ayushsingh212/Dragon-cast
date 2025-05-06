import React, { useState, useEffect } from 'react';
import { useUser } from '../Context/UseContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setName, setLogi, Login } = useUser();
  const [input, setInput] = useState('');
  const nav = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored?.name) {
      setName(stored.name);
      setLogi(true);
    }
  }, [setName]);

  const btnfunc = () => {
    const userData = {
      name: input,
      id: crypto.randomUUID(),
      login: true
    };

    localStorage.setItem("user", JSON.stringify(userData));
    setName(input);
    setLogi(true);
  };

  const deletebtn = () => {
    localStorage.removeItem('user');
    setName('User');
    setInput('');
    setLogi(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center dark:from-black dark:to-gray-800  bg-[url('./src/assets/loginwlcm.png')]  bg-contain bg-center  relative">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {!Login ? (
        <div className="bg-white dark:bg-gray-800 dark:text-white shadow-2xl rounded-xl p-8 w-full max-w-md space-y-6 transform transition-all duration-500 ease-in-out hover:scale-105">
          <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-300 to-blue-400 mb-6 animate-fade-in">
            Welcome Back
          </h2>
          <div className="flex flex-col space-y-4">
            <label htmlFor="name" className="font-semibold text-gray-800 dark:text-white">Enter your Name</label>
            <input
              type="text"
              id="name"
              className="px-4 py-2 border border-gray-300 rounded-xl text-lg outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter your name"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
          </div>
          <button
            onClick={btnfunc}
            className="w-full py-2 bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:from-teal-500 hover:to-cyan-600"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="text-2xl font-semibold text-center space-y-6 dark:text-white">
          <p>Welcome, {input}!</p>
          <p className="text-lg text-gray-300">Thanks for logging in.</p>
          <button
            onClick={deletebtn}
            className="px-6 py-2 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-xl shadow-md transform hover:scale-105 transition-all duration-300"
          >
            Remove Login Info
          </button>
          <div>
            <button
              className="mt-4 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl shadow-md transform hover:scale-105 transition-all duration-300"
              onClick={() => { nav('/chapters'); }}
            >
              Continue Journey
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
