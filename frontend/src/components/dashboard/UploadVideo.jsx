import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

function UploadVideo() {
  return (
    <Box>
      {/* Page Title */}
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        Upload Video
      </Typography>

      <Typography sx={{ color: "text.secondary", mb: 4 }}>
        Upload a video to generate its sign language version.
      </Typography>

      {/* SAME CARD UI AS MY VIDEOS */}
      <Paper
        sx={{
          p: 6,
          textAlign: "center",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        <Typography sx={{ fontWeight: 600, mb: 1 }}>
          Ready to upload your video?
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 3 }}>
          Choose a video file containing spoken content. Our system will process
          it and convert it into sign language.
        </Typography>

        <Button
          variant="contained"
          component="label"
          sx={{
            px: 4,
            py: 1.3,
            borderRadius: "12px",
            backgroundColor: "#2563eb",
            fontWeight: 600,
          }}
        >
          Upload Video
          <input type="file" accept="video/*" hidden />
        </Button>
      </Paper>
    </Box>
  );
}

export default UploadVideo;



