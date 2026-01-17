import React from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Chip, 
  Stack, 
  Avatar 
} from "@mui/material";

// Icons
import TerminalIcon from '@mui/icons-material/Terminal';
import LanguageIcon from '@mui/icons-material/Language';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MemoryIcon from '@mui/icons-material/Memory';
import PsychologyIcon from '@mui/icons-material/Psychology';

// Data Structure with Icons
const skillCategories = [
  {
    title: "Programming Languages",
    icon: <TerminalIcon />,
    skills: ["C++", "JavaScript", "Python"],
  },
  {
    title: "Web Technologies",
    icon: <LanguageIcon />,
    skills: [
      "HTML5",
      "CSS3",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "MySql"
    ],
  },
  {
    title: "Data Science",
    icon: <AssessmentIcon />,
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Data Cleaning",
      "EDA",
    ],
  },
  {
    title: "CS Fundamentals",
    icon: <MemoryIcon />,
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
    ],
  },
  {
    title: "Soft Skills",
    icon: <PsychologyIcon />,
    skills: [
      "English Communication",
      "Problem Solving",
      "Logical Thinking",
      "Team Collaboration",
    ],
  },
];

export default function Skills() {
  // Shared Card Style
  const cardStyle = {
    p: 3,
    height: "100%",
    borderRadius: 4,
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    transition: "all 0.3s ease",
    boxShadow: "none",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
      borderColor: "primary.main", // Subtle border highlight on hover
    },
  };

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
        backgroundColor: "#f8fafc",
      }}
    >
      {/* Title Section */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={1}>
        Technical Skills
      </Typography>

      <Typography
        textAlign="center"
        color="text.secondary"
        mb={6}
        sx={{ maxWidth: 600, mx: "auto" }}
      >
        A comprehensive list of the technologies, tools, and methodologies I use to build software.
      </Typography>

      {/* Skills Grid */}
      <Grid container spacing={4}>
        {skillCategories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{mt:6}}>
            <Paper sx={cardStyle}>
              
              {/* Card Header with Icon */}
              <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                <Avatar 
                  variant="rounded" 
                  sx={{ 
                    bgcolor: "primary.light", 
                    color: "primary.dark",
                    width: 48, 
                    height: 48 
                  }}
                >
                  {category.icon}
                </Avatar>
                <Typography variant="h6" fontWeight="bold" color="text.primary">
                  {category.title}
                </Typography>
              </Stack>

              {/* Chips */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {category.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      fontWeight: 500,
                      borderRadius: "8px",
                      backgroundColor: "#f1f5f9",
                      color: "#334155",
                      border: "1px solid transparent",
                      "&:hover": {
                        backgroundColor: "#e0f2fe",
                        color: "#0284c7",
                        borderColor: "#bae6fd",
                      },
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}