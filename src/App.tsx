import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import GradeOne from './GradeOne/GradeOne';
import GradeTwo from './GradeTwo/GradeTwo';
import GradeThree from './GradeThree/GradeThree';
import GradeFour from './GradeFour/GradeFour';
import GradeFive from './GradeFive/GradeFive';
import GradeSix from './GradeSix/GradeSix';
import AdditionTen from './Quizzes/AdditionTen';
import AdditionTwenty from './Quizzes/AdditionTwenty';
import SubtractionTen from './Quizzes/SubtractionTen';
import SubtractionTwenty from './Quizzes/SubtractionTwenty';
import CountingSingle from './Quizzes/CountingSingle';
import CountingMixed from './Quizzes/CountingMixed';

function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/grade1' element={ <GradeOne /> } />
          <Route path='/grade2' element={ <GradeTwo /> } />
          <Route path='/grade3' element={ <GradeThree /> } />
          <Route path='/grade4' element={ <GradeFour /> } />
          <Route path='/grade5' element={ <GradeFive /> } />
          <Route path='/grade6' element={ <GradeSix /> } />
          <Route path='/add-to-10' element={ <AdditionTen /> }/>
          <Route path='/add-to-20' element={ <AdditionTwenty /> }/>
          <Route path='/subtract-under-10' element={ <SubtractionTen /> }/>
          <Route path='/subtract-under-20' element={ <SubtractionTwenty /> }/>
          <Route path='/count-single' element={ <CountingSingle /> }/>
          <Route path='/count-mixed' element={ <CountingMixed /> }/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
