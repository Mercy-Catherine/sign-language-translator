import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  // 🔐 TEMP AUTH STATE (replace later with real auth)
  const isLoggedIn = true; // 🔁 change to true to test logged-in UI

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        borderRadius: "0 0 28px 28px",
        boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 2.5,
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Brand */}
        <Typography
          variant="h6"
          onClick={() => navigate("/")}
          sx={{
            fontWeight: 800,
            color: "black",
            letterSpacing: "0.5px",
            cursor: "pointer",
          }}
        >
          SignLang AI
        </Typography>

        {/* Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* AFTER LOGIN */}
          {isLoggedIn && (
            <Button
              onClick={() => navigate("/dashboard")}
              sx={{
                px: 2.5,
                py: 0.8,
                borderRadius: "14px",
                border: "1.5px solid #2563eb",
                color: "#2563eb",
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#eff6ff",
                },
              }}
            >
              Dashboard
            </Button>
          )}

          {/* BEFORE LOGIN */}
          {!isLoggedIn && (
            <>
              <Button
                component={Link}
                to="/login"
                sx={{
                  color: "#1e293b",
                  fontWeight: 600,
                  px: 2,
                  "&:hover": {
                    backgroundColor: "#f1f5f9",
                  },
                }}
              >
                Login
              </Button>

              <Button
                component={Link}
                to="/signup"
                variant="contained"
                sx={{
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  fontWeight: 700,
                  borderRadius: "10px",
                  px: 3,
                  boxShadow: "0 4px 10px rgba(37,99,235,0.3)",
                  "&:hover": {
                    backgroundColor: "#1e40af",
                  },
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
