import React from "react";
import { Box, Typography, Chip, GlobalStyles, Paper } from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import MemoryIcon from "@mui/icons-material/Memory";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StorageIcon from "@mui/icons-material/Storage";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import CloudIcon from "@mui/icons-material/Cloud";
import BuildIcon from "@mui/icons-material/Build";

const groups = [
  {
    name: "Build",
    note: "Languages and the full-stack web layer",
    color: "#2457C5",
    tint: "#E8EEFB",
    categories: [
      {
        title: "Programming Languages",
        icon: <CodeIcon />,
        skills: ["C++", "Python", "JavaScript", "SQL"],
      },
      {
        title: "Frontend",
        icon: <LanguageIcon />,
        skills: [
          "HTML5",
          "CSS3",
          "React.js",
          "React Router",
          "Material UI",
          "Tailwind CSS",
          "Responsive Design",
          "Vite",
        ],
      },
      {
        title: "Backend",
        icon: <MemoryIcon />,
        skills: [
          "Node.js",
          "Express.js",
          "Flask",
          "REST APIs",
          "JWT Authentication",
          "Role-Based Access Control",
          "Multer",
          "CORS",
        ],
      },
      {
        title: "Databases",
        icon: <StorageIcon />,
        skills: [
          "MongoDB",
          "MongoDB Atlas",
          "MySQL",
          "Sequelize ORM",
          "Mongoose",
          "localStorage",
          "Database Design",
        ],
      },
    ],
  },
  {
    name: "Data & ML",
    note: "From raw data to trained models",
    color: "#13795B",
    tint: "#E3F3EC",
    categories: [
      {
        title: "Machine Learning & AI",
        icon: <ModelTrainingIcon />,
        skills: [
          "Scikit-learn",
          "Model Training",
          "Model Evaluation",
          "Feature Engineering",
          "Data Preprocessing",
          "Feature Encoding",
          "Price Prediction",
          "Google Gemini API",
        ],
      },
      {
        title: "Data Analysis",
        icon: <AssessmentIcon />,
        skills: [
          "NumPy",
          "Pandas",
          "Matplotlib",
          "Seaborn",
          "Exploratory Data Analysis",
          "Data Cleaning",
          "Data Visualization",
          "Statistical Analysis",
        ],
      },
    ],
  },
  {
    name: "Foundations & Delivery",
    note: "CS fundamentals, tooling and deployment",
    color: "#A85F00",
    tint: "#FBEFDC",
    categories: [
      {
        title: "CS Fundamentals",
        icon: <PsychologyIcon />,
        skills: [
          "Data Structures & Algorithms",
          "Object-Oriented Programming",
          "STL",
          "DBMS",
          "Operating Systems",
          "Computer Networks",
          "Problem Solving",
        ],
      },
      {
        title: "Tools",
        icon: <BuildIcon />,
        skills: [
          "Git",
          "GitHub",
          "VS Code",
          "Postman",
          "Jupyter Notebook",
          "Google Colab",
          "NPM",
          "Joblib",
        ],
      },
      {
        title: "Cloud & Deployment",
        icon: <CloudIcon />,
        skills: [
          "Render",
          "AWS",
          "Cloudinary",
          "Environment Variables",
          "Application Deployment",
        ],
      },
    ],
  },
];

const ink = "#10201B";
const muted = "#5B6B65";
const line = "#E2E8E4";

export default function Skills() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#F8FAF8",
        color: ink,
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        px: { xs: 2.5, md: 8 },
        py: { xs: 8, md: 12 },
      }}
    >
      <GlobalStyles
        styles={`
          @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=IBM+Plex+Sans:wght@400;500;600&display=swap');
        `}
      />

      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        {/* Section Badge */}
        <Box
          sx={{
            display: "inline-block",
            px: 1.5,
            py: 0.5,
            mb: 2,
            borderRadius: "20px",
            backgroundColor: "#EAF2EE",
            color: "#13795B",
            fontWeight: 600,
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Expertise & Capabilities
        </Box>

        {/* Heading */}
        <Typography
          component="h2"
          sx={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700,
            fontSize: { xs: "2.2rem", md: "3.4rem" },
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: 720,
          }}
        >
          Full-stack apps and machine learning, built end to end.
        </Typography>

        <Typography
          sx={{
            mt: 2.5,
            mb: { xs: 6, md: 10 },
            maxWidth: 580,
            color: muted,
            fontSize: "1.05rem",
            lineHeight: 1.65,
          }}
        >
          The tools I use to design interfaces, build APIs, train models and
          ship them to production.
        </Typography>

        {/* Groups */}
        {groups.map((group) => (
          <Box
            key={group.name}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "240px 1fr" },
              columnGap: 6,
              rowGap: 3,
              pb: { xs: 6, md: 8 },
              mb: { xs: 6, md: 8 },
              borderBottom: `1px solid ${line}`,
              "&:last-of-type": { borderBottom: "none", mb: 0, pb: 0 },
            }}
          >
            {/* Group label */}
            <Box sx={{ borderLeft: `4px solid ${group.color}`, pl: 2.5, alignSelf: "start" }}>
              <Typography
                component="h3"
                sx={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: group.color,
                  lineHeight: 1.2,
                }}
              >
                {group.name}
              </Typography>
              <Typography sx={{ mt: 1, color: muted, fontSize: "0.92rem", lineHeight: 1.5 }}>
                {group.note}
              </Typography>
            </Box>

            {/* Categories */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {group.categories.map((cat) => (
                <Paper
                  key={cat.title}
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: "12px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid",
                    borderColor: line,
                    transition: "box-shadow 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 2,
                      color: ink,
                      "& svg": { fontSize: 22, color: group.color },
                    }}
                  >
                    {cat.icon}
                    <Typography sx={{ fontWeight: 600, fontSize: "1rem" }}>
                      {cat.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {cat.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          height: 32,
                          px: 0.75,
                          borderRadius: "8px",
                          fontFamily: "inherit",
                          fontWeight: 500,
                          fontSize: "0.85rem",
                          color: group.color,
                          backgroundColor: group.tint,
                          transition: "all .2s ease",
                          "&:hover": {
                            backgroundColor: group.color,
                            color: "#fff",
                            transform: "translateY(-2px)",
                            boxShadow: `0 4px 10px ${group.color}33`,
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}