import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addition from './Components/Addition';
import Subtraction from './Components/Subtraction';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addition/>}/>
      <Route path='/sub' element={<Subtraction/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
