import React from "react";
import { 
  Card, 
  CardContent, 
  Typography, 
  CardActions, 
  Button, 
  Box, 
  Chip, 
  Stack 
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";

export default function ProjectCard({ title, description, tech }) {
  // Gracefully handle tech as either an array or a comma-separated string
  const techArray = Array.isArray(tech) 
    ? tech 
    : (typeof tech === 'string' ? tech.split(', ') : []);

  return (
    <Card 
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
        background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'visible', // Allows hover effect to not be clipped
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px -10px rgba(0, 0, 0, 0.1)',
          borderColor: 'primary.main',
          '& .icon-box': {
            backgroundColor: 'primary.light',
            color: 'primary.dark',
          }
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Stack direction="row" alignItems="flex-start" spacing={2} mb={2}>
          {/* Decorative Icon Box */}
          <Box 
            className="icon-box"
            sx={{
              minWidth: 40,
              height: 40,
              borderRadius: 2,
              backgroundColor: 'action.hover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'text.secondary',
              transition: 'all 0.3s ease'
            }}
          >
            <CodeIcon />
          </Box>
          
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ lineHeight: 1.2 }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
              {description}
            </Typography>
          </Box>
        </Stack>

        <Box mt="auto" pt={2}>
          <Typography 
            variant="caption" 
            fontWeight="bold" 
            color="text.disabled" 
            display="block" 
            mb={1} 
            textTransform="uppercase" 
            letterSpacing={0.5}
          >
            Technologies
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={0.8}>
            {techArray.length > 0 ? (
              techArray.map((t, i) => (
                <Chip 
                  key={i} 
                  label={t} 
                  size="small" 
                  sx={{ 
                    borderRadius: 1,
                    backgroundColor: 'rgba(59, 130, 246, 0.08)',
                    color: 'primary.main',
                    fontWeight: 500,
                    border: '1px solid transparent',
                    '&:hover': {
                      borderColor: 'primary.light',
                      backgroundColor: 'rgba(59, 130, 246, 0.12)',
                    }
                  }} 
                />
              ))
            ) : (
               <Typography variant="caption" color="text.disabled">No tech listed</Typography>
            )}
          </Stack>
        </Box>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0, justifyContent: 'space-between' }}>
        <Button
          size="small"
          startIcon={<GitHubIcon />}
          component="a"
          href="https://github.com/sumantkumar0305/visitSmart"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            color: '#334155',             // Dark Slate text
            backgroundColor: '#f1f5f9',   // Light Slate background
            border: '1px solid transparent', // Keeps sizing consistent
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': { 
              backgroundColor: '#e2e8f0', // Slightly darker on hover
              color: '#0f172a'            // Darker text on hover
            }
          }}
        >
          Source Code
        </Button>

        <Button
          size="small"
          endIcon={<LaunchIcon />}
          component="a"
          href="https://visitsmart-url.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={{
            borderRadius: 2,
            boxShadow: 'none',
            textTransform: 'none',
            fontWeight: 600,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.dark',
              boxShadow: '0 4px 12px rgba(33, 150, 243, 0.2)',
            }
          }}
        >
          Live Demo
        </Button>
      </CardActions>
    </Card>
  );
}