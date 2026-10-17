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
  GlobalStyles,
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
  SiScikitlearn,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiAmazonwebservices,
  SiGooglecolab,
} from "react-icons/si";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import CloudIcon from "@mui/icons-material/Cloud";

export default function About() {
  const cardStyle = {
    p: { xs: 3, sm: 4 },
    height: "100%",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    border: "1px solid #E2E8F0",
    transition: "all 0.25s ease-in-out",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 12px 30px -10px rgba(0,0,0,0.08)",
      borderColor: "#CBD5E1",
    },
  };

  const chipStyle = {
    fontWeight: 500,
    fontSize: "0.85rem",
    borderRadius: "8px",
    backgroundColor: "#F8FAFC",
    color: "#0F172A",
    border: "1px solid #E2E8F0",
    px: 0.5,
    py: 2,
    transition: "all 0.2s ease-in-out",
    "& .MuiChip-icon": {
      fontSize: "18px",
      ml: 1,
    },
    "&:hover": {
      backgroundColor: "#ffffff",
      borderColor: "#0F172A",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    },
  };

  const imageStyle = {
    width: { xs: "140px", sm: "160px" },
    height: { xs: "140px", sm: "160px" },
    aspectRatio: "1 / 1",
    borderRadius: "14px",
    objectFit: "cover",
    border: "3px solid #ffffff",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  };

  const highlightItems = [
    {
      text: "Full-Stack Development using React, Node.js, Express, and MongoDB",
      icon: <CodeIcon fontSize="small" sx={{ color: "#2563EB" }} />,
      bg: "#EFF6FF",
    },
    {
      text: "Machine Learning applications using Python, Scikit-learn, and Flask",
      icon: <ModelTrainingIcon fontSize="small" sx={{ color: "#059669" }} />,
      bg: "#ECFDF5",
    },
    {
      text: "Data Analysis, Data Cleaning, EDA, and Feature Engineering",
      icon: <PsychologyIcon fontSize="small" sx={{ color: "#D97706" }} />,
      bg: "#FFFBEB",
    },
    {
      text: "Database Management using MongoDB, MySQL, and REST APIs",
      icon: <StorageIcon fontSize="small" sx={{ color: "#0284C7" }} />,
      bg: "#F0F9FF",
    },
    {
      text: "Problem-solving and Data Structures & Algorithms using C++",
      icon: <CheckCircleIcon fontSize="small" sx={{ color: "#16A34A" }} />,
      bg: "#F0FDF4",
    },
    {
      text: "Project deployment and cloud services using Render, AWS, and Cloudinary",
      icon: <CloudIcon fontSize="small" sx={{ color: "#7C3AED" }} />,
      bg: "#F5F3FF",
    },
  ];

  const techStack = [
    { name: "React.js", icon: <SiReact color="#61DAFB" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "MySQL", icon: <SiMysql color="#00758F" /> },
    { name: "Material UI", icon: <SiMui color="#007FFF" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "Python", icon: <SiPython color="#3776AB" /> },
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "NumPy", icon: <SiNumpy color="#013243" /> },
    { name: "Pandas", icon: <SiPandas color="#150458" /> },
    { name: "Scikit-learn", icon: <SiScikitlearn color="#F7931E" /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "Git", icon: <SiGit color="#F05032" /> },
    { name: "AWS", icon: <SiAmazonwebservices color="#FF9900" /> },
    { name: "Google Colab", icon: <SiGooglecolab color="#F9AB00" /> },
  ];

  const profileImageSrc = "/Image.png";

  return (
    <Box
      sx={{
        px: { xs: 2.5, md: 8 },
        py: { xs: 6, md: 10 },
        backgroundColor: "#F8FAFC",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      <GlobalStyles
        styles={`
          @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        `}
      />

      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        {/* Title Section */}
        <Box textAlign="center" mb={{ xs: 5, md: 7 }}>

          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              color: "#0F172A",
              letterSpacing: "-0.02em",
              fontSize: { xs: "2.2rem", md: "3rem" },
            }}
          >
            About Me
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              fontSize: "1.05rem",
              mt: 1,
              maxWidth: 540,
              mx: "auto",
            }}
          >
            My journey, technical expertise, and passion for building end-to-end software solutions.
          </Typography>
        </Box>

        <Grid container spacing={3.5} alignItems="stretch">
          {/* Left Section */}
          <Grid item xs={12} md={7}>
            <Paper sx={cardStyle}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  color: "#0F172A",
                  fontSize: "1.35rem",
                }}
              >
                Who I Am
              </Typography>

              <Divider sx={{ my: 2, borderColor: "#F1F5F9" }} />

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                alignItems={{ xs: "center", sm: "flex-start" }}
                mb={3}
              >
                <Box sx={{ flexShrink: 0, textAlign: "center" }}>
                  <Box
                    component="img"
                    src={profileImageSrc}
                    alt="Sumant Kumar"
                    sx={imageStyle}
                  />
                  <Typography
                    sx={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "#475569",
                      mt: 1.2,
                      backgroundColor: "#F1F5F9",
                      px: 1,
                      py: 0.3,
                      borderRadius: "6px",
                      display: "inline-block",
                    }}
                  >
                    CSE @ JNU
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    paragraph
                    sx={{
                      color: "#475569",
                      lineHeight: 1.75,
                      fontSize: "0.98rem",
                      mb: 1.5,
                      "& strong": { color: "#0F172A", fontWeight: 600 },
                    }}
                  >
                    My name is <strong>Sumant Kumar</strong>, and I am a
                    Computer Science and Engineering student at
                    <strong> Jawaharlal Nehru University (JNU)</strong>. I am
                    passionate about software development, problem-solving, and
                    building applications that address real-world challenges.
                  </Typography>

                  <Typography
                    sx={{
                      color: "#475569",
                      lineHeight: 1.75,
                      fontSize: "0.98rem",
                      "& strong": { color: "#0F172A", fontWeight: 600 },
                    }}
                  >
                    I have hands-on project experience in
                    <strong> Full-Stack Development</strong> using the MERN stack,
                    along with Python-based data analysis and machine learning.
                    I also practice Data Structures and Algorithms using C++.
                  </Typography>
                </Box>
              </Stack>

              <Typography
                paragraph
                sx={{
                  color: "#475569",
                  lineHeight: 1.75,
                  fontSize: "0.98rem",
                  mb: 2,
                  "& strong": { color: "#0F172A", fontWeight: 600 },
                }}
              >
                In web development, I work with
                <strong> React.js, Material UI, Node.js, Express.js,
                MongoDB, and MySQL</strong> to build responsive interfaces,
                backend APIs, authentication workflows, and database-driven
                applications. My projects include VisitSmart, HireReady AI,
                Alumnexus, and an interactive Wall Calendar.
              </Typography>

              <Typography
                paragraph
                sx={{
                  color: "#475569",
                  lineHeight: 1.75,
                  fontSize: "0.98rem",
                  mb: 2,
                  "& strong": { color: "#0F172A", fontWeight: 600 },
                }}
              >
                My machine learning work includes an
                <strong> OLX Phone Price Prediction</strong> application. I have
                worked with Python libraries such as
                <strong> Pandas, NumPy, and Scikit-learn</strong> for data
                preprocessing, exploratory data analysis, feature engineering, and
                model training. I have also integrated a trained model with a
                Flask API and React frontend.
              </Typography>

              <Typography
                paragraph
                sx={{
                  color: "#475569",
                  lineHeight: 1.75,
                  fontSize: "0.98rem",
                  mb: 2,
                  "& strong": { color: "#0F172A", fontWeight: 600 },
                }}
              >
                I am also interested in autonomous systems and intelligent
                applications. My autonomous vehicle project explores adaptive
                path planning and collision avoidance for unstructured Indian
                roads.
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  lineHeight: 1.75,
                  fontSize: "0.98rem",
                  "& strong": { color: "#0F172A", fontWeight: 600 },
                }}
              >
                My long-term goal is to grow as a
                <strong> Full-Stack Engineer, Data Scientist, and AI Engineer</strong>.
                I continuously improve my technical skills by developing
                projects, learning new technologies, and strengthening my computer
                science fundamentals.
              </Typography>
            </Paper>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3.5} sx={{ height: "100%" }}>
              <Paper sx={cardStyle}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    color: "#0F172A",
                    fontSize: "1.35rem",
                  }}
                >
                  Key Highlights
                </Typography>

                <Divider sx={{ my: 2, borderColor: "#F1F5F9" }} />

                <List disablePadding>
                  {highlightItems.map((item, index) => (
                    <ListItem
                      key={index}
                      disableGutters
                      alignItems="flex-start"
                      sx={{ py: 1 }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 36,
                          height: 36,
                          width: 36,
                          borderRadius: "8px",
                          backgroundColor: item.bg,
                          display: "grid",
                          placeItems: "center",
                          mr: 1.5,
                          mt: 0.2,
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>

                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          color: "#475569",
                          fontSize: "0.92rem",
                          lineHeight: 1.6,
                          fontWeight: 500,
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>

              <Paper sx={cardStyle}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    color: "#0F172A",
                    fontSize: "1.35rem",
                  }}
                >
                  Technologies I Work With
                </Typography>

                <Divider sx={{ my: 2, borderColor: "#F1F5F9" }} />

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: "0.9rem",
                    mb: 2.5,
                    lineHeight: 1.5,
                  }}
                >
                  Core tools and frameworks across web development, machine learning, and computer science.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  {techStack.map((tech) => (
                    <Chip
                      key={tech.name}
                      icon={tech.icon}
                      label={tech.name}
                      sx={chipStyle}
                    />
                  ))}
                </Box>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}