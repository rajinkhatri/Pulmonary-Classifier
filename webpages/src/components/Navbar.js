import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to='/' smooth>
        <img src={require("../images/navbaricon.gif")} alt="navbar-icon"/>
        <p>LungVision</p>
      </Link>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <a href='#second_section'>Diseases</a>
          {/* <Link to='#Diseases' smooth={true}>Diseases</Link> */}
        </li>
        <li>
          <a href='#third_section'>Images</a>
          {/* <Link to='#Images' smooth={true}>Images</Link> */}
        </li>
        <li>
          <a href='#fourth_section'>About Us</a>
          {/* <Link to='#Aboutus' smooth={true}>About Us</Link> */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

// import React from 'react';
// import './Navbar.css'
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className='nav'>
//       <Link to='/'>
//         <img src={require("../images/navbaricon.gif")} alt="navbar-icon"/>
//         <p>LungVision</p>
//       </Link>
//       <ul>
//         <li>
//           <Link to='/'>Home</Link>
//         </li>
//         <li>
//           <Link to='/Diseases'>Diseases</Link>
//         </li>
//         <li>
//           <Link to='/Images'>Images</Link>
//         </li>
//         <li>
//           <Link to='/Aboutus'>About Us</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
