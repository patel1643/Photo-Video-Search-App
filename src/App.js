import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './Containers/MainLayout/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
    <MainLayout />
    </BrowserRouter>
  );
}

export default App;
