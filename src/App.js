import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './features/Authentication/Login/Login';
import PrivateRoute from './features/Authentication/PrivateRoute/PrivateRoute';
import Registration from './features/Authentication/Registration/Registration';
import BecomeDonar from './features/BecomeDonar/BecomeDonar';
import FindDonar from './features/FindDonar/FindDonar';
import Home from './features/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='find-donar' element={<FindDonar />} />
          <Route path='become-donar' element={<PrivateRoute><BecomeDonar /></PrivateRoute>} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
