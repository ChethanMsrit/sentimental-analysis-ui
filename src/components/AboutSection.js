import React from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import RemoveIcon from '@mui/icons-material/Remove';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function AboutSection() {
  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: 3, 
        mb: 4, 
        borderRadius: 2, 
        bgcolor: 'background.paper',
        border: '1px solid rgba(0,0,0,0.08)'
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom fontWeight="500">
        How It Works
      </Typography>
      
      <Typography variant="body1" paragraph>
        This tool uses artificial intelligence to analyze the sentiment of movie reviews. 
        Simply enter or paste a movie review, and our AI will classify it as positive, negative, or neutral, 
        along with a confidence score and detailed analysis.
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mt: 1 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          textAlign: 'center', 
          p: 2,
          height: '100%',
          bgcolor: '#f8f9fa',
          borderRadius: 2,
          flex: 1
        }}>
          <RateReviewIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
          <Typography variant="h6" gutterBottom>
            Enter Your Review
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Copy and paste a movie review or write your own in the text area.
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          textAlign: 'center', 
          p: 2,
          height: '100%',
          bgcolor: '#f8f9fa',
          borderRadius: 2,
          flex: 1
        }}>
          <AutoAwesomeIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
          <Typography variant="h6" gutterBottom>
            AI Analysis
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Our AI model analyzes the text to determine the sentiment and confidence level.
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          textAlign: 'center', 
          p: 2,
          height: '100%',
          bgcolor: '#f8f9fa',
          borderRadius: 2,
          flex: 1
        }}>
          <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
            <Chip 
              icon={<ThumbUpIcon />} 
              label="Positive" 
              size="small" 
              sx={{ bgcolor: 'success.main', color: 'white' }} 
            />
            <Chip 
              icon={<ThumbDownIcon />} 
              label="Negative" 
              size="small" 
              sx={{ bgcolor: 'secondary.main', color: 'white' }} 
            />
            <Chip 
              icon={<RemoveIcon />} 
              label="Neutral" 
              size="small" 
              sx={{ bgcolor: 'warning.main', color: 'white' }} 
            />
          </Box>
          <Typography variant="h6" gutterBottom>
            View Results
          </Typography>
          <Typography variant="body2" color="text.secondary">
            See the sentiment classification, confidence score, and detailed reasoning.
          </Typography>
        </Box>
      </Box>
      
      <Typography variant="body2" color="text.secondary" sx={{ mt: 3, fontStyle: 'italic' }}>
        This application uses Cohere's large language model API to perform sentiment analysis.
      </Typography>
    </Paper>
  );
}

export default AboutSection;