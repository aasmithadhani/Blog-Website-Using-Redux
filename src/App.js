import './App.css';
import Login from './Login'
import Sign from './Sign'
import Home from './Home';
import { Route,Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign-up" element={<Sign/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
   </BrowserRouter> 
 
  );
}

export default App;
