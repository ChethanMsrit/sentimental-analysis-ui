import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  ListItemIcon,
  Chip,
  Divider
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import RemoveIcon from '@mui/icons-material/Remove';
import HistoryIcon from '@mui/icons-material/History';

function PreviousAnalyses({ analyses, onViewAnalysis }) {
  if (!analyses.length) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <HistoryIcon sx={{ fontSize: 40, color: 'text.secondary', mb: 2 }} />
        <Typography variant="body1" color="textSecondary">
          Previous analyses will appear here
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Analyze your first review to get started
        </Typography>
      </Box>
    );
  }

  return (
    <List sx={{ width: '100%', maxHeight: '400px', overflow: 'auto' }}>
      {analyses.map((analysis, index) => {
        const getSentimentIcon = (sentiment) => {
          switch (sentiment) {
            case 'positive': return <ThumbUpIcon sx={{ color: 'success.main' }} />;
            case 'negative': return <ThumbDownIcon sx={{ color: 'secondary.main' }} />;
            default: return <RemoveIcon sx={{ color: 'warning.main' }} />;
          }
        };

        const truncateText = (text, maxLength = 50) => {
          return text.length > maxLength 
            ? `${text.substring(0, maxLength)}...` 
            : text;
        };
        console.log(analysis)

        return (
          <React.Fragment key={analysis.id || index}>
            <ListItem disablePadding sx={{ mb: 1 }}>
              <ListItemButton 
                sx={{ 
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  "&:hover": {
                    bgcolor: 'action.hover',
                  }
                }}
              >
                <ListItemIcon>
                  {getSentimentIcon(analysis.sentiment)}
                </ListItemIcon>
                <ListItemText 
                  primary={truncateText(analysis.text)}
                  secondary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                      <Chip 
                        label={`${analysis.sentiment}`}
                        size="small"
                        sx={{ 
                          bgcolor: analysis.sentiment === 'positive' ? 'success.light' :
                                  analysis.sentiment === 'negative' ? 'secondary.light' :
                                  'warning.light',
                          color: '#fff',
                          fontWeight: 'medium',
                          fontSize: '0.7rem'
                        }}
                      />
                      <Typography variant="caption">
                        {analysis.createdAt ? new Date(analysis.createdAt).toLocaleTimeString() : 'Just now'}
                      </Typography>
                    </Box>
                  }
                />
              </ListItemButton>
            </ListItem>
            {index < analyses.length - 1 && <Divider variant="fullWidth" component="li" />}
          </React.Fragment>
        );
      })}
    </List>
  );
}

export default PreviousAnalyses;