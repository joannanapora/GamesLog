
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import '../../index.css'
import { ThemeContext } from "../ThemeProvider";
import mainLogo1 from '../../assets/games/logo-light.png';
import mainLogo2 from '../../assets/games/logo-dark.png';
import { Box, FormControl, InputAdornment, OutlinedInput, ThemeProvider } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import TextField from '@material-ui/core/TextField';

import SearchIcon from '@material-ui/icons/Search';

const Nav = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { toggleTheme } = React.useContext(ThemeContext);
  const [toggleChange, setToggleChange] = React.useState(false);

  const handleToggle = () => {
    toggleTheme();
    closeMobileMenu();
    setToggleChange(!toggleChange)
  }

  return (
    <Box>
      <div className='box' >
        {
          toggleChange ?
            <img className='logo' src={mainLogo1} alt=''></img>
            :
            <img className='logo' src={mainLogo2} alt=''></img>

        }
        <FormControl variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={''}
            placeholder='Search game...'
            onChange={() => console.log('saddas')}
            endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            labelWidth={0}
          />
        </FormControl>
      </div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' >
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <ClearIcon fontSize='large' />
            ) : (
              <MenuIcon fontSize='large' />
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
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </Box>
  );
};

export default Nav;

