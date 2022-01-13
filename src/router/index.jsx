import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Authenticated from '../middleware/Authenticated';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';
import Dashboard from '../views/Dashboard';
import Home from '../views/Home';

function Router() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="mt-4"></div>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/dashboard">
                    <Authenticated>
                        <Dashboard />
                    </Authenticated>
                </Route>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/register" element={ <Register/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
