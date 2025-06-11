import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addition from './Components/Addition';
import Subtraction from './Components/Subtraction';
import Multiplication from './Components/Multiplication';
import Division from './Components/Division';
import VotingEligibility from './Components/VotingEligibility';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addition/>}/>
      <Route path='/sub' element={<Subtraction/>}/>
      <Route path='/mult' element={<Multiplication/>}/>
      <Route path='/divi' element={<Division/>}/>
      <Route path='/vote' element={<VotingEligibility/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
