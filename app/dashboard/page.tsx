'use client';  // This marks the file as a Client Component

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function Dashboard() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    // <div>
    //   <h1>Dashboard</h1>
    //   {user ? (
    //     <p>Welcome, {user.email}</p>
    //   ) : (
    //     <p>You need to log in to view this page.</p>
    //   )}
    // </div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Dashboard</h1>
      {user ? (
        <>
        <p className="text-xl text-gray-600">Welcome, <span className="font-semibold text-indigo-600">{user.email}</span></p>
        <p className="text-xl text-gray-600">Your password is: <span className="font-semibold text-indigo-600">{user.password}</span></p>
        </>
      ) : (
        <p className="text-lg text-red-500">You need to log in to view this page.</p>
      )}
    </div>
  </div>
  );
}
