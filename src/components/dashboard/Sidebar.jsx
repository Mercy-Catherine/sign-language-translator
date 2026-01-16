import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Box
  sx={{
    width: 260,
    boxSizing: "border-box",
    height: "calc(100vh - 96px)",
    backgroundColor: "#4a7be6ff",
    p: 3,
    position: "fixed",
    top: "96px",
    left: 0,
  }}
>
      <Button
        fullWidth
        sx={{ ...menuBtnStyle, ...(isActive("/dashboard") && activeStyle) }}
        onClick={() => navigate("/dashboard")}
      >
        DASHBOARD
      </Button>

      <Button
        fullWidth
        sx={{
          ...menuBtnStyle,
          ...(isActive("/dashboard/my-videos") && activeStyle),
        }}
        onClick={() => navigate("/dashboard/my-videos")}
      >
        MY VIDEOS
      </Button>

      <Button
        fullWidth
        sx={{
          ...menuBtnStyle,
          ...(isActive("/dashboard/upload") && activeStyle),
        }}
        onClick={() => navigate("/dashboard/upload")}
      >
        UPLOAD VIDEOS
      </Button>

      <Button
        fullWidth
        sx={{
          ...menuBtnStyle,
          ...(isActive("/dashboard/profile") && activeStyle),
        }}
        onClick={() => navigate("/dashboard/profile")}
      >
        PROFILE
      </Button>

      <Button fullWidth sx={{ ...menuBtnStyle, mt: "auto" }}>
        LOGOUT
      </Button>
    </Box>
  );
}

const menuBtnStyle = {
  justifyContent: "flex-start",
  color: "white",
  fontWeight: 700,
  py: 1.5,
  borderRadius: "10px",
  textTransform: "none",
};

const activeStyle = {
  backgroundColor: "#7ba2f1ff",
};

export default Sidebar;
