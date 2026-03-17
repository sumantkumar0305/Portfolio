import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Typography, 
  Button, 
  Stack, 
  Container, 
  useTheme, 
  useMediaQuery 
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DescriptionIcon from "@mui/icons-material/Description";
import CodeIcon from "@mui/icons-material/Code";

export default function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  
  // Checks if the screen is smaller than "sm" (600px)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleShowProject = () => {
    navigate("/projects");
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8fafc",
        position: "relative",
        overflow: "hidden",
        // Adds breathing room at the top/bottom on mobile
        py: { xs: 4, md: 0 }, 
      }}
    >
      {/* Background Glow Effect - Scaled for mobile */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: "280px", sm: "450px", md: "600px" },
          height: { xs: "280px", sm: "450px", md: "600px" },
          background:
            "radial-gradient(circle, rgba(33,150,243,0.12) 0%, rgba(255,255,255,0) 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Stack 
          spacing={{ xs: 3, md: 5 }} 
          alignItems="center" 
          textAlign="center"
        >
          {/* Profile Image - Significantly larger on mobile for visibility */}
          <Box
            component="img"
            src="/Image.png"
            alt="Sumant Kumar"
            sx={{
              width: { xs: "150px", sm: "170px", md: "190px" },
              height: { xs: "150px", sm: "170px", md: "190px" },
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #ffffff",
              boxShadow: "0 10px 25px rgba(33, 150, 243, 0.2)",
            }}
          />

          <Box>
            {/* Greeting */}
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: 1.5,
                fontSize: { xs: "0.8rem", md: "1rem" },
                display: "block",
                mb: 1
              }}
            >
              Hi, I’m Sumant Kumar 👋
            </Typography>

            {/* Main Title - Responsive sizing to prevent "tiny" text */}
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.4rem", sm: "3.5rem", md: "4.2rem" },
                lineHeight: 1.1,
                mb: 2,
                background: "linear-gradient(45deg, #0f172a 30%, #2563eb 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MERN Stack Developer
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h5"
              sx={{ 
                fontSize: { xs: "1.15rem", md: "1.5rem" },
                color: "text.secondary",
                mb: 2,
                px: { xs: 1, md: 0 }
              }}
            >
              Specializing in{" "}
              <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>DSA (C++)</Box>
              {" "} & {" "}
              <Box component="span" sx={{ color: "success.main", fontWeight: 600 }}>Data Science (Python)</Box>
            </Typography>

            {/* Bio Description */}
            <Typography
              variant="body1"
              sx={{ 
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "text.secondary",
                maxWidth: "580px",
                mx: "auto",
                lineHeight: 1.6,
                px: { xs: 2, md: 0 }
              }}
            >
              I build scalable full-stack applications and analyze data to extract
              meaningful insights. Passionate about clean code and performance.
            </Typography>
          </Box>

          {/* Action Buttons - Stacked on mobile, side-by-side on desktop */}
          <Stack 
            direction={{ xs: "column", sm: "row" }} 
            spacing={2} 
            sx={{ width: { xs: "100%", sm: "auto" }, px: { xs: 4, sm: 0 } }}
          >
            <Button
              variant="contained"
              size="large"
              fullWidth={isMobile}
              endIcon={<ArrowForwardIcon />}
              onClick={handleShowProject}
              sx={{
                px: 4,
                py: 1.8,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "1rem"
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
              href="/Resume.pdf"
              target="_blank"
              sx={{
                px: 4,
                py: 1.8,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "1rem"
              }}
            >
              See Resume
            </Button>
          </Stack>

          {/* Coding Profiles Section */}
          <Box sx={{ width: "100%", pt: 2 }}>
            <Typography
              variant="caption"
              sx={{ 
                letterSpacing: 2, 
                fontWeight: 700, 
                color: "text.disabled",
                display: "block",
                mb: 2 
              }}
            >
              CODING PROFILES
            </Typography>
            <Stack 
              direction="row" 
              spacing={2} 
              justifyContent="center"
              flexWrap="wrap"
              useFlexGap
            >
              {[
                { name: "LeetCode", url: "https://leetcode.com/u/Sumant857800/", color: "#ffa116" },
                { name: "CodeChef", url: "https://www.codechef.com/users/colony_colt_36", color: "#5b4638" },
              ].map((platform) => (
                <Button
                  key={platform.name}
                  component="a"
                  href={platform.url}
                  target="_blank"
                  variant="outlined"
                  startIcon={<CodeIcon />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: "8px",
                    color: "text.primary",
                    borderColor: "divider",
                    '&:hover': {
                      borderColor: platform.color,
                      color: platform.color,
                      backgroundColor: "transparent"
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