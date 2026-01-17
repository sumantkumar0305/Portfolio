import React from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Chip, 
  Stack,
  Divider 
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import SpeedIcon from "@mui/icons-material/Speed";

export default function About() {
  // Styles shared with Skills page for consistency
  const cardStyle = {
    p: 4,
    height: "100%",
    borderRadius: 4,
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    transition: "all 0.3s ease",
    boxShadow: "none",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
    },
  };

  const chipStyle = {
    fontWeight: 500,
    borderRadius: "10px",
    backgroundColor: "#f1f5f9",
    color: "#0f172a",
    "&:hover": {
      backgroundColor: "#e0f2fe",
    },
  };

  // Styles specific to the profile image
  const imageStyle = {
    width: { xs: '100%', sm: '160px', md: '180px' },
    maxWidth: '100%',
    height: 'auto',
    aspectRatio: '1 / 1', // Ensures it stays square
    borderRadius: 3, // Matches card border radius vibe
    objectFit: 'cover',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)', // Subtle shadow for depth
  };

  const highlightItems = [
    { text: "Strong problem-solving with DSA in C++", icon: <CodeIcon color="primary" /> },
    { text: "Scalable MERN Stack Architecture", icon: <StorageIcon color="secondary" /> },
    { text: "Data Analysis & Visualization (Python)", icon: <SpeedIcon color="success" /> },
    { text: "Optimized & Clean Code Practices", icon: <CheckCircleIcon color="info" /> },
  ];

  const techStack = ["React", "Node.js", "Express", "MongoDB", "C++", "Python", "Pandas", "MUI"];

  // REPLACE THIS WITH YOUR ACTUAL IMAGE PATH (e.g., "/images/profile.jpg")
  const profileImageSrc = "/Image.png";

  return (
    <Box 
      sx={{ 
        px: { xs: 2, md: 6 }, 
        py: { xs: 4, md: 8 }, 
        backgroundColor: "#f8fafc" // Matching Skills background
      }}
    >
      {/* Title */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={1}>
        About Me
      </Typography>

      <Typography textAlign="center" color="text.secondary" mb={6}>
        My journey, experience, and what drives me
      </Typography>

      <Grid container spacing={5}>
        
        {/* Left Section - Description Card */}
        <Grid item xs={12} md={7}>
          <Paper sx={cardStyle}>
            <Typography 
                variant="h6" 
                fontWeight="bold" 
                mb={2} 
                sx={{ color: "#1e293b" }}
            >
                Who I Am
            </Typography>
            <Divider sx={{ mb: 3 }} />

            {/* Image and Intro Text Stack */}
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              alignItems={{ xs: 'center', sm: 'flex-start' }}
              mb={2}
            >
                 {/* PROFILE IMAGE */}
                 <Box 
                   component="img"
                   src={profileImageSrc}
                   alt="Profile Picture"
                   sx={imageStyle}
                 />
                 
                 {/* First Paragraph moved next to image */}
                 <Box>
                    <Typography color="text.secondary" paragraph sx={{ lineHeight: 1.8, mt: {xs: 2, sm: 0} }}>
                        I am a passionate <strong>MERN Stack Developer</strong> with a deep-rooted foundation
                        in <strong>Data Structures & Algorithms (C++)</strong> and <strong>Data Science</strong>. 
                        My journey involves bridging the gap between complex backend logic and interactive frontend 
                        experiences. 
                    </Typography>
                 </Box>
            </Stack>

            {/* Continuing text below the image/intro stack */}
             <Typography color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
                 I don't just write code; I build scalable, user-centric web applications 
                 that solve real-world problems.
             </Typography>

            <Typography color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
                My technical expertise revolves around the <strong>JavaScript ecosystem</strong>. I specialize 
                in crafting high-performance applications using <strong>React, Node.js, Express, and MongoDB</strong>. 
                Whether it's designing RESTful APIs or managing secure authentication flows, I ensure that 
                the architecture is robust and maintainable.
            </Typography>

            <Typography color="text.secondary" paragraph sx={{ lineHeight: 1.8, mb: 0 }}>
                Beyond web development, I leverage the power of <strong>Python</strong> libraries like 
                <strong> NumPy and Pandas</strong> to clean, analyze, and visualize complex datasets,
                creating data-driven applications that provide actionable insights.
            </Typography>
          </Paper>
        </Grid>

        {/* Right Section - Highlights Card */}
        <Grid item xs={12} md={5}>
          <Paper sx={cardStyle}>
            <Typography 
                variant="h6" 
                fontWeight="bold" 
                mb={2} 
                sx={{ color: "#1e293b" }}
            >
              Key Highlights
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <List>
              {highlightItems.map((item, index) => (
                <ListItem key={index} disableGutters sx={{ py: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: '40px' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text} 
                    primaryTypographyProps={{ 
                        fontWeight: 500, 
                        color: 'text.primary',
                        fontSize: '0.95rem' 
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Box mt={4}>
                <Typography variant="body2" color="text.secondary" mb={2} fontWeight="bold">
                    Quick Tech Stack:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {techStack.map((skill) => (
                        <Chip 
                            key={skill} 
                            label={skill} 
                            sx={chipStyle}
                        />
                    ))}
                </Stack>
            </Box>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}