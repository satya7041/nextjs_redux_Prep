// app/page.tsx (Home Page)

'use client';  // Mark this as a Client Component

import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/authSlice';
import { useRouter } from 'next/navigation';  // Client-side navigation
import { RootState } from './redux/store';  // Import RootState for typing
import { useEffect } from 'react';

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const router = useRouter();

   // Redirect to the dashboard if authenticated, but do it after the initial render
   useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);  // Only rerun when `isAuthenticated` changes

  return (
    // <div>
    //   <h1 className='bg-red-300'>Welcome to Our App!</h1>
    //   {!isAuthenticated ? (
    //     <div>
    //       <p>Please <a href="/login">Login</a> or <a href="/signup">Sign up</a> to continue.</p>
    //     </div>
    //   ) : (
    //     <div>
    //       <h2>Hello, {user?.email}</h2>
    //       <button onClick={() => dispatch(logout())}>Logout</button>
    //     </div>
    //   )}
    // </div>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
      {/* Welcome Header */}
      <h1 className="text-4xl font-semibold text-center text-gray-800 bg-red-300 p-4 rounded-lg mb-6">
        Welcome to Our App!
      </h1>

      {/* Conditional Rendering based on Authentication */}
      {!isAuthenticated ? (
        <div className="text-center">
          <p className="text-lg text-gray-700">
            Please{' '}
            <a href="/login" className="text-indigo-600 hover:text-indigo-800 font-semibold">
              Login
            </a>{' '}
            or{' '}
            <a href="/signup" className="text-indigo-600 hover:text-indigo-800 font-semibold">
              Sign up
            </a>{' '}
            to continue.
          </p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Hello, <span className="font-medium text-indigo-600">{user?.email}</span>
          </h2>
          <button
            onClick={() => dispatch(logout())}
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  </div>
  );
}
