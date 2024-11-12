import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '@pages/home/Home';

import Layout from '../Layout/Layout';
import ErrorPage from '@pages/ErrorPage';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/error-404' element={<ErrorPage />} />


            </Route>

        </Routes>
    );
};

export default AppRouter;