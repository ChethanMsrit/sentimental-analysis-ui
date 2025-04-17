import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { Link } from 'wouter';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2C3E50', boxShadow: 2, mb: 2 }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MovieIcon sx={{ mr: 1, fontSize: 28 }} />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ 
                textDecoration: 'none', 
                color: 'white', 
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Movie Review Analyzer
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;