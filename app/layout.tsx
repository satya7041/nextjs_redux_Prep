"use client"
import '@/app/globals.css'; // Ensure this path matches your project's structure

import { Provider } from 'react-redux';  // Import Redux Provider
import { store } from './redux/store';  // Import the store

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* You can add custom meta tags or links here */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My App</title>
      </head>
      <body>
        <Provider store={store}>  {/* Wrap the app with Redux Provider */}
          {children}
        </Provider>
      </body>
    </html>
  );
}
