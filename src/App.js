import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addition from './Components/Addition';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addition/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
