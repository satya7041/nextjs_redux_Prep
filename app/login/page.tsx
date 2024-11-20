'use client';  // This marks the file as a Client Component

import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const dispatch = useDispatch();
  const router = useRouter();

  // This effect ensures that the redirect happens after the login is successful
  useEffect(() => {
    if (isLoggedIn) {
      router.push('/'); // Redirect to home page after login
    }
  }, [isLoggedIn, router]);

  const handleLogin = () => {
    // Call your login API here to authenticate the user
    dispatch(login({ email, password }));  // Dispatch the login action
    setIsLoggedIn(true);  // Mark as logged in and trigger redirect
  };

  return (
    // <div>
    //   <h2 className=''>Login</h2>
    //   <input
    //     type="email"
    //     placeholder="Enter your email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <button onClick={handleLogin}>Login</button>
    // </div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </div>
    </div>
  );
}
    