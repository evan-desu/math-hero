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
import AdditionByTen from './Quizzes/AdditionByTen';
import AdditionTwenty from './Quizzes/AdditionTwenty';
import SubtractionTen from './Quizzes/SubtractionTen';
import SubtractTenFrom from './Quizzes/SubtractTenFrom';
import SubtractionTwenty from './Quizzes/SubtractionTwenty';
import CountingSingle from './Quizzes/CountingSingle';
import CountingMixed from './Quizzes/CountingMixed';
import CompareNumbers100 from './Quizzes/CompareNumbersLow';
import CompareNumbers300 from './Quizzes/CompareNumbersHigh';
import AdditionOfThree from './Quizzes/AdditionOfThree';

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
          <Route path='/add-by-10' element={ <AdditionByTen /> }/>
          <Route path='/add-to-20' element={ <AdditionTwenty /> }/>
          <Route path='/add-three' element={ <AdditionOfThree /> }/>
          <Route path='/subtract-under-10' element={ <SubtractionTen /> }/>
          <Route path='/subtract-10' element={ <SubtractTenFrom /> }/>
          <Route path='/subtract-under-20' element={ <SubtractionTwenty /> }/>
          <Route path='/count-single' element={ <CountingSingle /> }/>
          <Route path='/count-mixed' element={ <CountingMixed /> }/>
          <Route path='/compare-numbers-100' element={ <CompareNumbers100 /> }/>
          <Route path='/compare-numbers-300' element={ <CompareNumbers300 /> }/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
