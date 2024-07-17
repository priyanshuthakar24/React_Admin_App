import React from 'react'
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, RootLayout } from './pages';
const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [
                { path: '/', element: <Ecommerce /> },
                { path: 'ecommerce', element: <Ecommerce /> },
                { path: 'orders', element: <Orders /> },
                { path: 'employees', element: <Employees /> },
                { path: 'customers', element: <Customers /> },
                { path: 'kanban', element: <Kanban /> },
                { path: 'editor', element: <Editor /> },
                { path: 'calendar', element: <Calendar /> },
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
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default App 