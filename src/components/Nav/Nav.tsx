  
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import '../../index.css'
import { ThemeContext } from "../ThemeProvider";
import mainLogo from'../../gl.png';
import { Box } from "@material-ui/core";


const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { toggleTheme } = useContext(ThemeContext);

  return (
      <Box>
    <nav className="navbar">
      <div className="navbar-container">
      <img className='logo' src={mainLogo} alt='' ></img>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <ClearIcon/>
          ) : (
            <MenuIcon/>
          )}
        </div>
        <ul className={click ? "menu active" : "menu"}>
          <li className="nav-item">
            <Link to="/allgames" className="nav-links" onClick={closeMobileMenu}>
              all games
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/mygames"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              my logs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/friends"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              friends logs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/upcoming" className="nav-links" onClick={closeMobileMenu}>
              upcoming
            </Link>
          </li>
          <li className="nav-item">
            <div className="nav-links" onClick={toggleTheme}>
              dark/light
            </div>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
              sign in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </Box>
  );
};

export default Nav;