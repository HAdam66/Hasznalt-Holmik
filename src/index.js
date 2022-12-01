import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import UpLoad from './Components/UpLoad/UpLoad';
import Basket from './Components/Basket/Basket';
import Marketplace from './Components/Marketplace/Marketplace';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/' element={<Home />}></Route>
                <Route path='/Marketplace' element={<Marketplace />}></Route>
                <Route path='/Upload' element={<UpLoad />}></Route>
                <Route path='/Shopping-Basket' element={<Basket />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
);
