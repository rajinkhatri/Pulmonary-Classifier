import './App.css';
import HomePage from './Pages/HomePage';
// import {BrowserRouter as Router, Route} from 'react-router-dom'; 
// import Navbar from './components/Navbar';

import { Routes, Route } from 'react-router-dom';
import OutputPage from './components/Output';

function App() {
  return (
    // <div>
    // <Navbar/>
    <div>
      {/* <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Diseases' element={<Diseases/>} />
        <Route path='/Images' element={<Images/>} />
        <Route path='/Aboutus' element={<Aboutus/>} />
    </Routes> */}
    {/* <Routes> */}
      {/* <Switch> */}
      {/* <Route path='/' component={App} /> */}
    {/* <Route path='/Output' component={Output} /> */}
    {/* </Switch> */}
    {/* </Routes> */}

    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/output' element={<OutputPage/>} />
    </Routes>
    </div>
    // </div>
  );
}

export default App;



// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Diseases from './components/Diseases';
// import Images from './components/Images';
// import Aboutus from './components/Aboutus';
// import { Route } from 'react-router-dom';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Route exact path='/' component={Home} />
//       <Route path='/Diseases' component={Diseases} />
//       <Route path='/Images' component={Images} />
//       <Route path='/Aboutus' component={Aboutus} />
//     </div>
//   );
// }

// export default App;

