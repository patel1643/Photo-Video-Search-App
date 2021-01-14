import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './Containers/MainLayout/MainLayout';

function App() {
  return (
    <BrowserRouter>
    <MainLayout />
    </BrowserRouter>
  );
}

export default App;
