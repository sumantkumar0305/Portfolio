
import React from "react";
import { Grid, Box, Typography } from "@mui/material";

import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectsData";

export default function Projects() {
  return (
    <Box p={4}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={2}
      >
        Projects
      </Typography>

      <Typography
        textAlign="center"
        color="text.secondary"
        mb={5}
      >
        Explore my projects and the technologies I use.
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.title}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
