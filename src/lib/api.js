/**
 * Makes a request to the sentiment analysis API endpoint
 * @param {string} reviewText - The review text to analyze
 * @returns {Promise<Object>} - The sentiment analysis result
 */
export async function analyzeSentiment(reviewText) {
    try {
      const response = await fetch(
        'https://chethanmsrit-movie-sentiment-analysis.hf.space/sentiment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reviewText }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to analyze sentiment');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
      throw error;
    }
  }
