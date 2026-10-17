
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Divider,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const isActive = (path) => location.pathname === path;

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
          py: 2.5,
        }}
      >
        <Typography
          component={Link}
          to="/"
          onClick={() => setMobileOpen(false)}
          sx={{
            fontSize: "1.5rem",
            fontWeight: 800,
            textDecoration: "none",
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Sumant.dev
        </Typography>

        <IconButton onClick={handleDrawerToggle} aria-label="Close menu">
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      <List sx={{ px: 2, py: 3 }}>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={isActive(item.path)}
              onClick={() => setMobileOpen(false)}
              sx={{
                borderRadius: 2.5,
                py: 1.5,
                px: 2,
                color: isActive(item.path) ? "#2563eb" : "#475569",
                "&.Mui-selected": {
                  backgroundColor: "#eff6ff",
                  color: "#2563eb",
                  "&:hover": {
                    backgroundColor: "#dbeafe",
                  },
                },
                "&:hover": {
                  backgroundColor: "#f8fafc",
                  color: "#2563eb",
                },
                transition: "all 0.2s ease",
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: isActive(item.path) ? 700 : 500,
                  fontSize: "1rem",
                }}
              />
              {isActive(item.path) && (
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "#2563eb",
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: "auto", p: 3 }}>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          Building ideas into reality.
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(148, 163, 184, 0.2)",
          color: "#0f172a",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 70, md: 82 },
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            {/* Logo */}
            <Typography
              component={Link}
              to="/"
              sx={{
                fontSize: { xs: "1.4rem", md: "1.65rem" },
                fontWeight: 900,
                letterSpacing: "-1px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                background: "linear-gradient(135deg, #2563eb 10%, #7c3aed 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              Sumant.dev
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  width: 7,
                  height: 7,
                  ml: 0.5,
                  mb: 0.2,
                  borderRadius: "50%",
                  backgroundColor: "#2563eb",
                }}
              />
            </Typography>

            {/* Desktop Navigation */}
            <Stack
              direction="row"
              spacing={0.5}
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  disableRipple
                  sx={{
                    position: "relative",
                    px: 1.8,
                    py: 1.1,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "0.96rem",
                    fontWeight: isActive(item.path) ? 700 : 600,
                    color: isActive(item.path) ? "#2563eb" : "#475569",
                    backgroundColor: isActive(item.path)
                      ? "#eff6ff"
                      : "transparent",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "#2563eb",
                      backgroundColor: "#eff6ff",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 4,
                      left: "50%",
                      width: isActive(item.path) ? "22px" : "0px",
                      height: "2px",
                      borderRadius: 2,
                      backgroundColor: "#2563eb",
                      transform: "translateX(-50%)",
                      transition: "width 0.2s ease",
                    },
                    "&:hover::after": {
                      width: "22px",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="Open navigation menu"
              sx={{
                display: { xs: "flex", md: "none" },
                width: 44,
                height: 44,
                borderRadius: 2.5,
                border: "1px solid #e2e8f0",
                color: "#1e293b",
                backgroundColor: "#ffffff",
                "&:hover": {
                  color: "#2563eb",
                  backgroundColor: "#eff6ff",
                  borderColor: "#bfdbfe",
                },
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            border: "none",
            boxShadow: "-12px 0 40px rgba(15, 23, 42, 0.10)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
