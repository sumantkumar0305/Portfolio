import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  useTheme,
  useMediaQuery,
  Chip,
  GlobalStyles,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DescriptionIcon from "@mui/icons-material/Description";
import CodeIcon from "@mui/icons-material/Code";
import { FaLinkedin } from "react-icons/fa";
import GitHubIcon from "@mui/icons-material/GitHub";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TerminalIcon from "@mui/icons-material/Terminal";

export default function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleShowProject = () => {
    navigate("/projects");
  };

  const codingProfiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/sumantkumar0305/",
      color: "#FFA116",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sumant-kumar-dev/",
      color: "#0A66C2",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      url: "https://github.com/sumantkumar0305",
      color: "#0F172A",
      icon: <GitHubIcon />,
    },
  ];

  const focusAreas = [
    { label: "Full-Stack Development", icon: <CodeIcon fontSize="small" /> },
    { label: "Machine Learning", icon: <PsychologyIcon fontSize="small" /> },
    { label: "Data Science", icon: <TerminalIcon fontSize="small" /> },
    { label: "DSA with C++", icon: undefined },
  ];

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F8FAFC",
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      <GlobalStyles
        styles={`
          @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        `}
      />

      {/* Background Radial Glow */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: "320px", sm: "500px", md: "700px" },
          height: { xs: "320px", sm: "500px", md: "700px" },
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(248, 250, 252, 0) 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          spacing={{ xs: 3.5, md: 4.5 }}
          alignItems="center"
          textAlign="center"
        >
          {/* Profile Image Wrapper */}
          <Box
            sx={{
              position: "relative",
              p: "6px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2E8F0",
              boxShadow: "0 12px 35px rgba(37, 99, 235, 0.12)",
            }}
          >
            <Box
              component="img"
              src="/Image.png"
              alt="Sumant Kumar"
              sx={{
                width: { xs: 135, sm: 160, md: 180 },
                height: { xs: 135, sm: 160, md: 180 },
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>

          {/* Intro Headers */}
          <Box>
            <Box
              sx={{
                display: "inline-block",
                px: 2,
                py: 0.6,
                mb: 2,
                borderRadius: "20px",
                backgroundColor: "#EFF6FF",
                border: "1px solid #DBEAFE",
                color: "#2563EB",
                fontWeight: 700,
                fontSize: { xs: "0.8rem", md: "0.85rem" },
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Hi, I'm Sumant Kumar 👋
            </Box>

            <Typography
              component="h1"
              sx={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: {
                  xs: "2.4rem",
                  sm: "3.5rem",
                  md: "4.2rem",
                },
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                mb: 2,
                background: "linear-gradient(135deg, #0F172A 30%, #2563EB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Full-Stack Developer
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.1rem", md: "1.4rem" },
                color: "#475569",
                fontWeight: 500,
                mb: 2.5,
              }}
            >
              Interested in{" "}
              <Box
                component="span"
                sx={{ color: "#2563EB", fontWeight: 700 }}
              >
                Data Science
              </Box>
              {" & "}
              <Box
                component="span"
                sx={{ color: "#059669", fontWeight: 700 }}
              >
                Machine Learning
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.98rem", md: "1.08rem" },
                color: "#64748B",
                maxWidth: 620,
                mx: "auto",
                lineHeight: 1.8,
                px: { xs: 1, md: 0 },
              }}
            >
              I build full-stack web applications, develop machine learning
              solutions, and use data analysis to solve real-world problems.
              I also enjoy strengthening my problem-solving skills through
              Data Structures and Algorithms using C++.
            </Typography>
          </Box>

          {/* Focus Areas Chips */}
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
          >
            {focusAreas.map((item) => (
              <Chip
                key={item.label}
                label={item.label}
                icon={item.icon}
                sx={{
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "8px",
                  px: 0.5,
                  py: 2,
                  color: "#334155",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                  "& .MuiChip-icon": {
                    color: "#2563EB",
                  },
                }}
              />
            ))}
          </Stack>

          {/* Main Action Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              width: { xs: "100%", sm: "auto" },
              pt: 1,
            }}
          >
            <Button
              variant="contained"
              size="large"
              fullWidth={isMobile}
              endIcon={<ArrowForwardIcon />}
              onClick={handleShowProject}
              sx={{
                px: 4,
                py: 1.6,
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "1rem",
                backgroundColor: "#2563EB",
                boxShadow: "0 4px 14px rgba(37, 99, 235, 0.25)",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  backgroundColor: "#1D4ED8",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(37, 99, 235, 0.35)",
                },
              }}
            >
              View Projects
            </Button>

            <Button
              variant="outlined"
              size="large"
              fullWidth={isMobile}
              startIcon={<DescriptionIcon />}
              component="a"
              href="/WebDev_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 1.6,
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#0F172A",
                borderColor: "#CBD5E1",
                backgroundColor: "#FFFFFF",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  borderColor: "#0F172A",
                  backgroundColor: "#F8FAFC",
                  transform: "translateY(-2px)",
                },
              }}
            >
              View Resume
            </Button>
          </Stack>

          {/* Social Profiles */}
          <Box sx={{ width: "100%", pt: 2 }}>
            <Typography
              variant="caption"
              sx={{
                letterSpacing: 1.5,
                fontWeight: 700,
                color: "#94A3B8",
                display: "block",
                mb: 2,
                textTransform: "uppercase",
              }}
            >
              Coding & Social Profiles
            </Typography>

            <Stack
              direction="row"
              spacing={1.5}
              justifyContent="center"
              flexWrap="wrap"
              useFlexGap
            >
              {codingProfiles.map((platform) => (
                <Button
                  key={platform.name}
                  component="a"
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={platform.icon || <CodeIcon />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    borderRadius: "8px",
                    color: "#334155",
                    backgroundColor: "#FFFFFF",
                    borderColor: "#E2E8F0",
                    px: 2.2,
                    py: 1,
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      borderColor: platform.color,
                      color: platform.color,
                      backgroundColor: "#FFFFFF",
                      transform: "translateY(-2px)",
                      boxShadow: `0 4px 12px ${platform.color}15`,
                    },
                  }}
                >
                  {platform.name}
                </Button>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}