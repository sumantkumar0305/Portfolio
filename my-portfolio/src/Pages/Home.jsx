import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Stack, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DescriptionIcon from "@mui/icons-material/Description";
import CodeIcon from "@mui/icons-material/Code";

export default function Home() {
  const navigate = useNavigate();

  const handleShowProject = () => {
    navigate("/projects");
  };

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8fafc",
        position: "relative",
        overflow: "hidden",
        mb: 20
      }}
    >
      {/* Background Glow Effect */}
      <Box
        sx={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(33,150,243,0.08) 0%, rgba(255,255,255,0) 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          mt: 5,
          mb: 15
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          {/* Profile Image */}
          <Box
            component="img"
            src="/Image.png"
            alt="Sumant Kumar"
            sx={{
              width: { xs: "140px", md: "180px" },
              height: { xs: "140px", md: "180px" },
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #f8fafc",
              boxShadow: "0 8px 24px rgba(33, 150, 243, 0.15)",
            }}
          />

          {/* Greeting */}
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            Hi, I’m Sumant Kumar 👋
          </Typography>

          {/* Main Title */}
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              background:
                "linear-gradient(45deg, #1e293b 30%, #3b82f6 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            MERN Stack Developer
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Specializing in{" "}
            <Box component="span" color="primary.main">
              DSA (C++)
            </Box>{" "}
            &{" "}
            <Box component="span" color="success.main">
              Data Science (Python)
            </Box>
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth="600px"
            sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}
          >
            I build scalable full-stack applications and analyze data to extract
            meaningful insights. Passionate about writing clean code and solving
            complex algorithmic problems.
          </Typography>

          {/* Action Buttons */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} pt={2}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={handleShowProject}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "50px",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              View Projects
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<DescriptionIcon />}
              component="a"
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "50px",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              See Resume
            </Button>
          </Stack>

          {/* 🔥 Competitive Programming Links (NEW SECTION) */}
          <Box mt={3}>
            <Typography
              variant="subtitle1"
              color="text.primary" // Changed to primary for better contrast
              fontWeight={700} // Made slightly bolder
              textAlign="center" // Center aligned the title
              sx={{ letterSpacing: 1, textTransform: 'uppercase', fontSize: '0.85rem' }} // Stylized text
              mb={2}
            >
              Competitive Programming
            </Typography>

            <Stack 
              direction="row" 
              spacing={2} 
              justifyContent="center"
              useFlexGap 
              flexWrap="wrap" // Ensures buttons don't break on small screens
            >
              {/* Reusable style object for consistency */}
              {[
                { name: "LeetCode", url: "https://leetcode.com/u/Sumant857800/", color: "#ffa116" },
                { name: "CodeChef", url: "https://www.codechef.com/users/colony_colt_36", color: "#5b4638" },
              ].map((platform) => (
                <Button
                  key={platform.name}
                  component="a"
                  href={platform.url}
                  target="_blank"
                  variant="outlined" // Changed from text to outlined
                  startIcon={<CodeIcon />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: 4, // Pill shape
                    color: 'text.secondary',
                    borderColor: 'divider',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)', // Lift effect
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)', // Soft shadow
                      borderColor: platform.color, // Brand color on hover border
                      color: platform.color, // Brand color on hover text
                      backgroundColor: 'transparent'
                    }
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
