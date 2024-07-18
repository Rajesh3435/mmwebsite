import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router} from 'react-router-dom';
import { lightTheme, darkTheme } from './theme';
import NavBar from './NavBar/NavBar';
import Home from './NavBar/Home';
import About from './NavBar/About';
import Contact from './NavBar/Contact';
// import Grid from '@mui/material/Grid';
import './App.css';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <div>
          <Home />
          <About />
          <Contact />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;