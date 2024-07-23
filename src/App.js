import React from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, RootLayout } from './pages';
import { Login, Map, TimeLine, Signup } from './components';
import { useAuth } from './contexts/AuthContext';

const App = () => {
    const { isAuthenticated } = useAuth();

    const router = createBrowserRouter([
        {
            path: '/',
            element: isAuthenticated ? <RootLayout /> : <Login />,
            children: [
                { path: '/', element: <Ecommerce /> },
                { path: 'ecommerce', element: <Ecommerce /> },
                { path: 'orders', element: <Orders /> },
                { path: 'employees', element: <Employees /> },
                { path: 'customers', element: <Customers /> },
                { path: 'kanban', element: <Kanban /> },
                { path: 'editor', element: <Editor /> },
                { path: 'calendar', element: <Calendar /> },
                { path: 'map', element: <Map /> },
                { path: 'timeline', element: <TimeLine /> },
                { path: 'color-picker', element: <ColorPicker /> },
                { path: 'line', element: <Line /> },
                { path: 'area', element: <Area /> },
                { path: 'bar', element: <Bar /> },
                { path: 'pie', element: <Pie /> },
                { path: 'financial', element: <Financial /> },
                { path: 'color-mapping', element: <ColorMapping /> },
                { path: 'pyramid', element: <Pyramid /> },
                { path: 'stacked', element: <Stacked /> }
            ]
        },
        {
            path: '/auth/signup',
            element: <Signup />
        },
        {
            path: '/auth/login',
            element: <Login />
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default App 