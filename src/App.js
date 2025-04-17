import React from 'react';
import { Route, Switch } from 'wouter';
import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';
import NotFound from './pages/not-found';
import Header from './components/Header';
import Footer from './components/Footer';

// Create a global theme with movie-themed colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#2C3E50', // Navy blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#E74C3C', // Review red
      contrastText: '#ffffff',
    },
    success: {
      main: '#2ECC71', // Positive green
      contrastText: '#ffffff',
    },
    warning: {
      main: '#F1C40F', // Neutral yellow
      contrastText: '#ffffff',
    },
    background: {
      default: '#F8F9FA',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      marginBottom: '0.75rem',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh'
      }}>
        <Header />
        <Box sx={{ flex: 1 }}>
          <Router />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;