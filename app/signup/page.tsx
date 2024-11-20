'use client';  // This marks the file as a Client Component

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
  const router = useRouter();

    // This useEffect will only run on the client side, once the component is mounted
    useEffect(() => {
        setIsSubmitted(true); // After the component is mounted, mark it as client-side
      }, []);
    
      const handleSignup = () => {
        // Simulate the signup process (API call or logic here)
        router.push('/login');  // Redirect to login page after signup
      };
    
      if (!isSubmitted) {
        return null; // Prevent rendering of the form during SSR
      }
  return (
    // <div>
    //   <h2>Sign Up</h2>
    //   <input
    //     type="email"
    //     placeholder="Enter your email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="Enter your password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button onClick={handleSignup}>Sign Up</button>
    // </div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>

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
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        onClick={handleSignup}
        className="w-full py-3 text-3xl bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Sign Up
      </button>
    </div>
  </div>
  );
}
