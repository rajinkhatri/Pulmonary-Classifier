import './App.css';
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Diseases from './components/Diseases';
import Images from './components/Images';
import Aboutus from './components/Aboutus';
import Output from './components/Output';

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Diseases/>
    <Images/>
    <Aboutus/>
    <Output/>
    </div>
  );
}

export default App;
