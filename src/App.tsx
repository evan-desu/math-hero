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
import AdditionTen from './Quizzes/Addition/AdditionTen';
import AdditionByOne from './Quizzes/Addition/AdditionByOne';
import AdditionByThree from './Quizzes/Addition/AdditionByThree';
import AdditionByTen from './Quizzes/Addition/AdditionByTen';
import AdditionTwenty from './Quizzes/Addition/AdditionTwenty';
import SubtractionTen from './Quizzes/Subtraction/SubtractionTen';
import SubtractTenFrom from './Quizzes/Subtraction/SubtractTenFrom';
import SubtractionTwenty from './Quizzes/Subtraction/SubtractionTwenty';
import CountingSingle from './Quizzes/Counting/CountingSingle';
import CountingMixed from './Quizzes/Counting/CountingMixed';
import CompareNumbers100 from './Quizzes/Comparisons/CompareNumbersLow';
import CompareNumbers300 from './Quizzes/Comparisons/CompareNumbersHigh';
import AdditionOfThree from './Quizzes/Addition/AdditionOfThree';
import SubtractionOfThree from './Quizzes/Subtraction/SubtractionOfThree';

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
          <Route path='/add-by-1-or-2' element={ <AdditionByOne /> }/>
          <Route path='/add-by-3' element={ <AdditionByThree /> }/>
          <Route path='/add-to-20' element={ <AdditionTwenty /> }/>
          <Route path='/add-three' element={ <AdditionOfThree /> }/>
          <Route path='/subtract-under-10' element={ <SubtractionTen /> }/>
          <Route path='/subtract-10' element={ <SubtractTenFrom /> }/>
          <Route path='/subtract-three' element={ <SubtractionOfThree /> }/>
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
