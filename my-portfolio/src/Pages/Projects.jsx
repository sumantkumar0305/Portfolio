import { Grid, Box, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <Box p={4}>
      {/* Page Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={5}
      >
        Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">

        {/* MERN Project */}
        <Grid item xs={12} md={6}>
          <Typography
            textAlign="center"
            color="text.secondary"
            mb={2}
          >
            Full-stack application built using modern web technologies
          </Typography>

          <ProjectCard
            title="VisitSmart-Nature Explorer & Hotel Booking Platform"
            description="A comprehensive full-stack MERN application designed to simplify travel planning by helping users discover natural tourist destinations such as forests, waterfalls, lakes, and scenic locations. The platform allows users to explore destination details and, on the same page, view and book nearby hotels without redirection. It features secure user authentication, dynamic place-based navigation, responsive UI design, and a scalable backend architecture that efficiently manages users, destinations, and hotel data."
            tech="React, Material UI, Node.js, Express.js, MongoDB Atlas, AWS, Cloudinary"
          />
        </Grid>
      </Grid>
    </Box>
  );
}