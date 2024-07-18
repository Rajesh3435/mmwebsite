import React, { useState, useEffect, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Import animateScroll from react-scroll
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './NavBar.css';

const NavBar = ({ isDarkMode, toggleTheme }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar >
          <Toolbar sx={{ justifyContent: isMobile ? 'space-between' : 'center' }}>
            <ScrollLink to="home" smooth={true} duration={500}>
              <Button className="navbar-button" color="inherit">Home</Button>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500}>
              <Button className="navbar-button" color="inherit">About</Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <Button className="navbar-button" color="inherit">Contact</Button>
            </ScrollLink>
            <Switch
              checked={isDarkMode}
              onChange={toggleTheme}
              color="default"
              inputProps={{ 'aria-label': 'toggle dark mode' }}
              sx={{ ml: 2 }}
            />
          </Toolbar>
        </AppBar>
      </Box>

      {/* Additional navigation icons */}
      <div className={`nav-icons-container ${isScrollingDown ? 'visible' : ''}`}>
        <Button className="nav-icon-button" onClick={() => scroll.scrollTo('home', { smooth: true, duration: 500 })}>Home</Button>
        <Button className="nav-icon-button" onClick={() => scroll.scrollTo('about', { smooth: true, duration: 500 })}>About</Button>
        <Button className="nav-icon-button" onClick={() => scroll.scrollTo('contact', { smooth: true, duration: 500 })}>Contact</Button>
      </div>
    </div>
  );
};

export default NavBar;

