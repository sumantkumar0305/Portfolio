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
  Container
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom"; 

const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // 1. Get the current route location
  const location = useLocation(); 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mobile Drawer Content
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", height: "100%" }}>
      <Box sx={{ py: 2 }}>
         <Typography variant="h6" fontWeight="bold">
            Sumant.dev
         </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => {
          // Check if this item is active
          const isActive = location.pathname === item.path;
          
          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton 
                component={Link} 
                to={item.path} 
                // 2. Apply "selected" styling logic for Mobile
                selected={isActive}
                sx={{ 
                    textAlign: "center", 
                    py: 2,
                    // Custom style when selected (active)
                    "&.Mui-selected": {
                        backgroundColor: "rgba(37, 99, 235, 0.1)", // Light blue bg
                        color: "#2563eb", // Blue text
                        borderRight: "4px solid #2563eb", // Blue indicator bar
                        "&:hover": {
                             backgroundColor: "rgba(37, 99, 235, 0.2)",
                        }
                    }
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
        <AppBar 
            component="nav" 
            position="sticky"
            elevation={0}
            sx={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(0,0,0,0.05)",
                color: "#1e293b"
            }}
        >
        <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                
                {/* Logo */}
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{
                        fontWeight: 800,
                        textDecoration: "none",
                        background: "linear-gradient(45deg, #1e293b 30%, #3b82f6 90%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: "1.5rem",
                        cursor: "pointer"
                    }}
                >
                    Sumant.dev
                </Typography>

                {/* Desktop Menu */}
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <Stack direction="row" spacing={1}>
                        {navItems.map((item) => {
                            // 3. Check if active for Desktop
                            const isActive = location.pathname === item.path;

                            return (
                                <Button
                                    key={item.label}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        color: isActive ? "#2563eb" : "#334155", // Blue if active, Dark Grey if not
                                        fontWeight: 600,
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        px: 2,
                                        borderRadius: "8px",
                                        backgroundColor: isActive ? "rgba(37, 99, 235, 0.08)" : "transparent", // Light blue bg if active
                                        transition: "all 0.2s",
                                        "&:hover": {
                                            backgroundColor: isActive ? "rgba(37, 99, 235, 0.15)" : "#f1f5f9",
                                            color: "#2563eb",
                                            transform: "translateY(-2px)" // Tiny lift effect
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            );
                        })}
                    </Stack>
                </Box>

                {/* Mobile Menu Icon */}
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: "none" } }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </Container>
        </AppBar>

        {/* Mobile Drawer */}
        <Box component="nav">
            <Drawer
                anchor="right"
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    </>
  );
}