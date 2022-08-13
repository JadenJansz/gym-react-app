import React from 'react'
import { Route, Routes } from 'react-router';
import { Box } from '@mui/material';

import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div>
      <Box width="400px" sx={{width: { xl: '1488px'}}} m="auto">
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/exercise/:id' element = {<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  )
}

export default App