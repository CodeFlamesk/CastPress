import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '@pages/home/Home';

import Layout from '../Layout/Layout';
import ErrorPage from '@pages/ErrorPage';
import EpisodeSinglePage from '@pages/EpisodeSinglePage';
import EpisodePage from '@pages/EpisodePage';
import ContactPage from '@pages/ContactPage';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/error-404' element={<ErrorPage />} />
                <Route path='/episode/season' element={<EpisodeSinglePage />} />
                <Route path='/episode' element={<EpisodePage />} />
                <Route path='/contact' element={<ContactPage />} />


            </Route>

        </Routes>
    );
};

export default AppRouter;