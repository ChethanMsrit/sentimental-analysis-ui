import React from 'react';
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { analyzeSentiment } from '../lib/api';

function ReviewInput({
  currentReview,
  setCurrentReview,
  isLoading,
  setIsLoading,
  setHasError,
  setErrorMessage,
  setAnalysisResult,
  addToPreviousAnalyses
}) {
  const handleReviewChange = (e) => {
    setCurrentReview(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!currentReview) {
      setHasError(true);
      setErrorMessage('Please enter a review to analyze.');
      return;
    }

    setIsLoading(true);
    setHasError(false);
    setErrorMessage('');

    try {
      const result = await analyzeSentiment(currentReview);
      setAnalysisResult(result);
      addToPreviousAnalyses({ ...result, text: currentReview });
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
      setHasError(true);
      setErrorMessage(
        error.message || 'An error occurred while analyzing the review. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Typography variant="h2" component="h2" gutterBottom>
        Enter Movie Review
      </Typography>
      
      <TextField
        fullWidth
        variant="outlined"
        multiline
        rows={6}
        placeholder="Type or paste a movie review here..."
        value={currentReview}
        onChange={handleReviewChange}
        sx={{ mb: 2 }}
        disabled={isLoading}
      />
      
      <Button
        variant="contained"
        color="primary"
        startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <RateReviewIcon />}
        type="submit"
        disabled={isLoading || !currentReview}
        sx={{ 
          px: 4, 
          py: 1.5,
          fontSize: '1rem',
          fontWeight: 'medium'
        }}
      >
        {isLoading ? 'Analyzing...' : 'Analyze Sentiment'}
      </Button>
    </Box>
  );
}

export default ReviewInput;