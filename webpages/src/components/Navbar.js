import './Navbar.css'
// import { LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <nav className='nav'>
      <LinkS onClick={toggleHome}>
        <img src={require("../images/navbaricon.gif")} alt="navbar-icon"/>
        <p>LungVision</p>
      </LinkS>
      <ul>
        <li>
        <LinkS onClick={toggleHome}>Home</LinkS>
          {/* <Link to='/'>Home</Link> */}
        </li>
        <li>
          <LinkS to="second_section" smooth={true} duration={1000} spy={true} >Diseases</LinkS>
          {/* <Link to='#Diseases' smooth={true}>Diseases</Link> */}
        </li>
        <li>
          <LinkS to='third_section' smooth={true} duration={1000} spy={true}>Images</LinkS>
          {/* <Link to='#Images' smooth={true}>Images</Link> */}
        </li>
        <li>
          <LinkS to='fourth_section' smooth={true} duration={1000} spy={true}>About Us</LinkS>
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
