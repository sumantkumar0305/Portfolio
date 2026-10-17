
import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  Stack,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";

export default function ProjectCard({ project }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 4,
          borderColor: "primary.main",
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Stack direction="row" spacing={2} alignItems="flex-start">
          <Box
            sx={{
              p: 1,
              borderRadius: 2,
              bgcolor: "action.hover",
            }}
          >
            <CodeIcon color="primary" />
          </Box>

          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {project.title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </Box>
        </Stack>

        <Box mt={3}>
          <Typography
            variant="caption"
            fontWeight="bold"
            color="text.secondary"
          >
            TECHNOLOGIES
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
            {project.tech.map((technology) => (
              <Chip
                key={technology}
                label={technology}
                size="small"
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>
        </Box>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0, justifyContent: "space-between" }}>
        <Button
          component="a"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHubIcon />}
          sx={{ textTransform: "none" }}
        >
          Source Code
        </Button>

        {project.demo && (
          <Button
            component="a"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<LaunchIcon />}
            variant="contained"
            sx={{ textTransform: "none", boxShadow: "none" }}
          >
            Live Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
