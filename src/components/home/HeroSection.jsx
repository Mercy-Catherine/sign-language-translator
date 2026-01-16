import React from "react";
import { Box, Typography, Button } from "@mui/material";

function HeroSection() {

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Uploaded video:", file);
      // later: send this file to backend / state
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "400px",
        background: "linear-gradient(135deg, #4f46e5, #2563eb)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        borderRadius: "0 0 40px 40px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        px: 2,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        Convert Sign Language Videos Instantly
      </Typography>

      <Typography variant="h6" sx={{ maxWidth: "600px", mb: 4 }}>
        Upload your sign language video and get accurate sign conversion in seconds.
      </Typography>

      {/* Upload Button */}
      <Button
        variant="contained"
        component="label"
        sx={{
          px: 6,
          py: 2,
          borderRadius: "12px",
          backgroundColor: "#f1f5f9",
          color: "#2563eb",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#e0e7ef" },
        }}
      >
        Upload Video
        <input
          type="file"
          accept="video/*"
          hidden
          onChange={handleVideoUpload}
        />
      </Button>
    </Box>
  );
}

export default HeroSection;

