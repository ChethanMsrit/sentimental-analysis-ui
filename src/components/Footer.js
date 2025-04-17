import React from 'react';
import { Box, Typography, Container, Link, Divider } from '@mui/material';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        mt: 4, 
        bgcolor: '#f5f5f5'
      }}
    >
      <Divider />
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: { xs: 'center', md: 'left' },
          mt: 2
        }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Movie Review Sentiment Analysis
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            mt: { xs: 2, md: 0 }
          }}>
            <Link 
              href="https://cohere.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              color="inherit"
              underline="hover"
            >
              Powered by Cohere AI
            </Link>
            <Link 
              href="#" 
              color="inherit"
              underline="hover"
            >
              About
            </Link>
            <Link 
              href="#" 
              color="inherit"
              underline="hover"
            >
              Terms
            </Link>
            <Link 
              href="#" 
              color="inherit"
              underline="hover"
            >
              Privacy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;