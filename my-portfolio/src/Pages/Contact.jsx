import React from "react";
import {
  Box,
  Typography,
  Stack,
  Grid,
  Container,
} from "@mui/material";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contact() {
  
  // Contact Information Data
  const contactDetails = [
    {
      icon: <EmailIcon fontSize="medium" />,
      label: "Email",
      value: "sumant.kumar0305@gmail.com",
      href: "mailto:sumant.work@example.com",
    },
    {
      icon: <LinkedInIcon fontSize="medium" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sumant-kumar",
      href: "https://www.linkedin.com/in/sumant-kumar-05629b372/",
    },
    {
      icon: <GitHubIcon fontSize="medium" />,
      label: "GitHub",
      value: "github.com/sumant-kumar",
      href: "https://github.com/sumantkumar0305",
    },
    {
      icon: <LocationOnIcon fontSize="medium" />,
      label: "Location",
      value: "New Delhi, Delhi, India",
      href: null,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        // Soft gradient background for a premium feel
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)", 
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Container maxWidth="md">
        {/* Centered Grid Container */}
        <Grid 
          container 
          direction="column" 
          alignItems="center" 
          justifyContent="center"
          sx={{ textAlign: "center" }}
        >
          
          {/* Header Section */}
          <Grid item xs={12} sx={{ mb: 6 }}>
            <Typography 
                variant="overline" 
                sx={{ 
                  color: "primary.main", 
                  fontWeight: 'bold', 
                  letterSpacing: 1.5,
                  display: "block",
                  mb: 1
                }}
            >
                CONTACT ME
            </Typography>
            <Typography 
              variant="h3" 
              fontWeight="800" 
              sx={{ 
                mb: 2, 
                background: 'linear-gradient(45deg, #1e293b 30%, #3b82f6 90%)', 
                WebkitBackgroundClip: "text", 
                WebkitTextFillColor: "transparent" 
              }}
            >
              Let's Connect.
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ 
                fontSize: "1.1rem", 
                lineHeight: 1.6, 
                maxWidth: "600px", 
                mx: "auto" // Centers the text block
              }}
            >
              I am currently open to new opportunities and collaborations. 
              Have a project in mind or just want to discuss the latest tech? 
              <strong> Let's build something amazing together.</strong>
            </Typography>
          </Grid>

          {/* Contact List Section */}
          <Grid item xs={12} width="100%" maxWidth="600px">
            <Stack spacing={3}>
              {contactDetails.map((item, index) => (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={3}
                  key={index}
                  sx={{
                    p: 3,
                    backgroundColor: "rgba(255,255,255,0.8)", // Slight glass effect
                    backdropFilter: "blur(8px)",
                    borderRadius: 4,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                    transition: "all 0.3s ease",
                    cursor: item.href ? "pointer" : "default",
                    "&:hover": {
                        transform: "translateY(-5px)", // Lifts up slightly
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        backgroundColor: "white",
                    }
                  }}
                  onClick={() => item.href && window.open(item.href, '_blank')}
                >
                  {/* Icon Box */}
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#eff6ff", // Very light blue bg for icon
                      borderRadius: "50%",
                      color: "primary.main",
                      flexShrink: 0
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* Text Info */}
                  <Box sx={{ textAlign: "left" }}> 
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight="bold"
                      display="block"
                      textTransform="uppercase"
                      sx={{ mb: 0.5 }}
                    >
                      {item.label}
                    </Typography>
                    
                    <Typography
                        variant="body1"
                        sx={{
                          color: "#1e293b",
                          fontWeight: 600,
                          fontSize: '1.05rem'
                        }}
                    >
                        {item.value}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}