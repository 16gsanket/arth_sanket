import React from 'react';
import {
  ReactLocation,
  Router,
  Outlet,
  Link,
} from '@tanstack/react-location';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SuccessPage from './pages/SuccessPage';
const location = new ReactLocation();

const App = () => {
  return (
    <Router
      location={location}
      routes={[
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'signup',
          element: <SignUpPage />,
        },
        {
          path: 'success',
          element: <SuccessPage />,
        },
        // Add more routes as needed
      ]}
    >
      
      <Outlet /> {/* This is where the matched route's element will render */}
    </Router>
  );
};

export default App;
