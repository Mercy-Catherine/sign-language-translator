import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed" // ✅ FIXED (important)
      elevation={0}
      sx={{
        height: "96px", // ✅ consistent height
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        borderRadius: "0 0 28px 28px",
        boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
        zIndex: 1201, // ✅ above sidebar
      }}
    >
      <Toolbar
        sx={{
          height: "100%", // ✅ fill AppBar height
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Left Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            color: "black",
            letterSpacing: "0.5px",
          }}
        >
          SignLang AI
        </Typography>

        {/* Right Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="text"
            onClick={() => navigate("/")}
            sx={{
              color: "#1e293b",
              fontWeight: 600,
              px: 2,
              "&:hover": {
                backgroundColor: "#f1f5f9",
              },
            }}
          >
            Home
          </Button>

          <Avatar
          onClick={() => navigate("/dashboard/profile")}
            sx={{
              width: 40,
              height: 40,
              backgroundColor: "#2563eb",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            U
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;

