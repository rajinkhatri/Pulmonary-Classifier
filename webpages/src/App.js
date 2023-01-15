import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'; 
import output from './Output_page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Home Page</p>        
      </header>
      <div>
        <a href={output}>Output page</a>
      </div>
    </div>
  );
}

export default App;
