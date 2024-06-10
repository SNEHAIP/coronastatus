import logo from './logo.svg';
import './App.css';
import AddBed from './components/AddBed';
import ViewAll from './components/ViewAll';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/'element={<AddBed/>}/>
    <Route path='/View'element={<ViewAll/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
