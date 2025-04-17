import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import ReviewInput from '../components/ReviewInput';
import SentimentResult from '../components/SentimentResult';
import PreviousAnalyses from '../components/PreviousAnalysis';
import AboutSection from '../components/AboutSection';

export default function Home() {
  const [currentReview, setCurrentReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [previousAnalyses, setPreviousAnalyses] = useState([]);

  const handleViewPreviousAnalysis = (analysis) => {
    setAnalysisResult(null);
    setCurrentReview(analysis);
  };

  const addToPreviousAnalyses = (analysis) => {
    // Add unique ID if it doesn't exist
    const analysisWithId = analysis.id 
      ? analysis 
      : { ...analysis, id: Date.now(), createdAt: new Date() };
    
    // Add to the beginning of the array to show newest first
    setPreviousAnalyses(prev => [analysisWithId, ...prev]);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box mb={4} textAlign="center">
        <Typography variant="h1" component="h1" gutterBottom>
          Movie Review Sentiment Analysis
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Enter a movie review to analyze its sentiment using AI
        </Typography>
      </Box>

      <AboutSection />

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
        <Box sx={{ flex: { xs: '1', md: '2' } }}>
          <Paper elevation={2} sx={{ p: 3, mb: { xs: 3, md: 0 } }}>
            {!analysisResult ? (
              <ReviewInput
                currentReview={currentReview}
                setCurrentReview={setCurrentReview}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setHasError={setHasError}
                setErrorMessage={setErrorMessage}
                setAnalysisResult={setAnalysisResult}
                addToPreviousAnalyses={addToPreviousAnalyses}
              />
            ) : (
              <SentimentResult
                result={analysisResult}
                onNewAnalysis={() => setAnalysisResult(null)}
                currentReview={currentReview}
              />
            )}
            
            {hasError && (
              <Box sx={{ mt: 2, p: 2, bgcolor: 'error.light', color: 'error.contrastText', borderRadius: 1 }}>
                <Typography variant="body1">
                  {errorMessage || 'An error occurred while analyzing the review. Please try again.'}
                </Typography>
              </Box>
            )}
          </Paper>
        </Box>
        
        <Box sx={{ flex: { xs: '1', md: '1' } }}>
          <Paper elevation={2} sx={{ p: 3, mb: { xs: 3, md: 0 } }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Previous Analyses
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <PreviousAnalyses
              analyses={previousAnalyses}
              onViewAnalysis={handleViewPreviousAnalysis}
            />
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}