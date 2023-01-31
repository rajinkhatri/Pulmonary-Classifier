import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
      <a href='/' className='site-title'>
        <img src={require("../images/navbaricon.gif")} alt="navbar-icon"/>
        LungVision
      </a>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/Diseases'>Diseases</a>
        </li>
        <li>
          <a href='/Images'>Images</a>
        </li>
        <li>
          <a href='/Aboutus'>About Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;