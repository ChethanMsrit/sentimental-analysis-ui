import React from 'react';
import { Box, Typography, Button, Paper, Chip, CircularProgress } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SentimentResult({ result, onNewAnalysis, currentReview }) {
  const sentimentColor = 
    result.sentiment === 'positive' ? 'success.main' :
    result.sentiment === 'negative' ? 'secondary.main' : 
    'warning.main';

  const SentimentIcon = 
    result.sentiment === 'positive' ? ThumbUpIcon :
    result.sentiment === 'negative' ? ThumbDownIcon : 
    RemoveIcon;

  return (
    <Box>
      <Typography variant="h2" component="h2" gutterBottom>
        Sentiment Analysis Result
      </Typography>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' }, 
        alignItems: 'center', 
        gap: 2, 
        mb: 3 
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
          <Typography variant="h3" component="span">
            Sentiment:
          </Typography>
          <Chip
            icon={<SentimentIcon />}
            label={result.sentiment.charAt(0).toUpperCase() + result.sentiment.slice(1)}
            sx={{ 
              bgcolor: sentimentColor, 
              color: 'white', 
              fontWeight: 'bold',
              fontSize: '1rem',
              px: 1,
              py: 2.5
            }}
          />
        </Box>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
          <Typography variant="h3" component="span">
            Confidence:
          </Typography>
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress 
              variant="determinate" 
              value={result.confidence} 
              size={60}
              thickness={5}
              sx={{ color: sentimentColor }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body1" component="div" fontWeight="bold">
                {`${Math.round(result.confidence)}%`}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {result.reasoning && (
        <Paper variant="outlined" sx={{ p: 2, mb: 3, bgcolor: 'background.default' }}>
          <Typography variant="h6" gutterBottom>
            Analysis Details:
          </Typography>
          <Typography variant="body1">
            {result.reasoning}
          </Typography>
        </Paper>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Paper variant="outlined" sx={{ p: 2, flex: 1, mr: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Original Review Text:
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            {currentReview}
          </Typography>
        </Paper>

        <Button
          variant="outlined"
          color="primary"
          startIcon={<ArrowBackIcon />}
          onClick={onNewAnalysis}
        >
          New Analysis
        </Button>
      </Box>
    </Box>
  );
}

export default SentimentResult;