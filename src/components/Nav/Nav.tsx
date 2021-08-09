  
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import '../../index.css'
import { ThemeContext } from "../ThemeProvider";
import mainLogo from'../../gl.png';
import { Box } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import TextField from '@material-ui/core/TextField';



const Nav = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { toggleTheme } = React.useContext(ThemeContext);

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',    
      },
      '& .MuiInputLabel-formControl': {
        color: 'white',
        fontFamily: 'Monda',
      },
      '& .MuiInputBase-input' : {
        opacity: 0.5,
        color: 'white'
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',    
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'transparent',   
          height: '10px',
          color: 'white'
        },
        '&:hover fieldset': {
          borderColor: 'transparent'   
        },
        '&.Mui-focused fieldset': {
          borderColor: 'transparent'   
        },
      },
    },
  })(TextField);

const handleToggle = () => {
  toggleTheme();
  closeMobileMenu();
}

  return (
      <Box>
    <nav className="navbar">
      <div className="navbar-container">
      <Link to='/' >
      <img className='logo' src={mainLogo} alt='' ></img>
      </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <ClearIcon fontSize='large' />
          ) : (
            <MenuIcon fontSize='large'/>
          )}
        </div>
        <ul className={click ? "menu active" : "menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
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
            <div className="nav-links" onClick={handleToggle}>
              dark/light
            </div>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
              sign in
            </Link>
          </li>
          <li className="nav-item">
            <div className="nav-links">     
<CssTextField
label="Search game..."
variant="outlined"
id="custom-css-outlined-input"
/>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    </Box>
  );
};

export default Nav;

