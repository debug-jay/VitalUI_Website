import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import NoPage from '../pages/NoPage';

const RoutesPages = () => {
    return(
    <BrowserRouter>
    
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>);
}

export default RoutesPages;