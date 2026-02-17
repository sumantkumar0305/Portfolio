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
  Divider,
} from "@mui/material";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiNumpy,
  SiPandas,
  SiFlask,
  SiMui,
} from "react-icons/si";


import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import SpeedIcon from "@mui/icons-material/Speed";

export default function About() {

  const cardStyle = {
    p: 4,
    height: "100%",
    borderRadius: 4,
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    transition: "all 0.3s ease",
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
    px: 1,
    "& .MuiChip-icon": {
      fontSize: "20px",
    },
    "&:hover": {
      backgroundColor: "#e0f2fe",
    },
  };


  const imageStyle = {
    width: { xs: "100%", sm: "160px", md: "180px" },
    aspectRatio: "1 / 1",
    borderRadius: 3,
    objectFit: "cover",
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
  };

  const highlightItems = [
    {
      text: "Strong problem-solving with Data Structures & Algorithms (C++)",
      icon: <CodeIcon color="primary" />,
    },
    {
      text: "Full Stack MERN Development (React, Node.js, Express, MongoDB)",
      icon: <StorageIcon color="secondary" />,
    },
    {
      text: "Python Data Analysis & Visualization (NumPy, Pandas, Matplotlib, Seaborn)",
      icon: <SpeedIcon color="success" />,
    },
    {
      text: "Clean Code, Scalable Architecture & Deployment Experience",
      icon: <CheckCircleIcon color="info" />,
    },
  ];

  const techStack = [
    { name: "React", icon: <SiReact color="#61DAFB" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "MySQL", icon: <SiMysql color="#00758F" /> },
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "Python", icon: <SiPython color="#3776AB" /> },
    { name: "NumPy", icon: <SiNumpy color="#013243" /> },
    { name: "Pandas", icon: <SiPandas color="#150458" /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "MUI", icon: <SiMui color="#007FFF" /> },
  ];


  const profileImageSrc = "/Image.png";

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
        backgroundColor: "#f8fafc",
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
        {/* Left Section */}
        <Grid item xs={12} md={7}>
          <Paper sx={cardStyle}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Who I Am
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              alignItems={{ xs: "center", sm: "flex-start" }}
              mb={2}
            >
              <Box
                component="img"
                src={profileImageSrc}
                alt="Sumant Kumar"
                sx={imageStyle}
              />

              <Box>
                <Typography
                  color="text.secondary"
                  paragraph
                  sx={{ lineHeight: 1.8 }}
                >
                  My name is <strong>Sumant Kumar</strong>, and I am a passionate
                  <strong> Full Stack Developer</strong> with hands-on experience
                  in the <strong>MERN stack</strong> and a strong foundation in
                  <strong> Data Structures & Algorithms using C++</strong>. I enjoy
                  building scalable web applications that solve real-world problems
                  while maintaining clean and efficient code.
                </Typography>
              </Box>
            </Stack>

            <Typography color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
              I specialize in developing modern web applications using
              <strong> React, Node.js, Express, and MongoDB</strong>. From designing
              responsive user interfaces with Material UI to creating secure backend
              APIs and database architectures, I focus on delivering high-quality
              solutions with good performance and scalability.
            </Typography>

            <Typography color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
              In addition to web development, I have completed learning
              <strong> Python</strong> along with libraries such as
              <strong> NumPy, Pandas, Matplotlib, and Seaborn</strong> for data
              analysis and visualization. I also have experience using
              <strong> Flask</strong> for backend development and
              <strong> SQL</strong> for database management.
            </Typography>

            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
              My career goal is to become a professional Full Stack Engineer and
              expand my expertise into <strong>Artificial Intelligence and Machine Learning</strong>
              in the future. I am continuously learning new technologies and
              improving my problem-solving skills to build impactful software
              solutions.
            </Typography>
          </Paper>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={5}>
          <Paper sx={cardStyle}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Key Highlights
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <List>
              {highlightItems.map((item, index) => (
                <ListItem key={index} disableGutters sx={{ py: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>

            <Box mt={4} gap={1.5}>
              <Typography
                variant="body2"
                color="text.secondary"
                mb={2}
                fontWeight="bold"
              >
                Quick Tech Stack:
              </Typography>

              {techStack.map((tech) => (
                <Chip
                  key={tech.name}
                  icon={<Box sx={{ fontSize: 18 }}>{tech.icon}</Box>}
                  label={tech.name}
                  sx={chipStyle}
                />
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
