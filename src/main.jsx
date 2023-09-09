import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './routes/About.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Register from './routes/Register.jsx'
import HowItWorks from './routes/HowItWorks.jsx'
import Plans from './routes/Plans.jsx'
import FAQ from './routes/FAQ.jsx'
import BikeRegistration from './routes/BikeRegistration.jsx'
import BikeSurvey from './routes/BikeSurvey.jsx'
import NotFound from './routes/NotFound.jsx'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/nexio',
                element: <About />,
            },
            {
                path: '/como-funciona',
                element: <HowItWorks />,
            },
            {
                path: '/planos',
                element: <Plans />,
            },
            {
                path: '/FAQ',
                element: <FAQ />,
            },
            {
                path: '/cadastro/bike',
                element: <BikeRegistration />,
            },
            {
                path: '/vistoria',
                element: <BikeSurvey />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)
