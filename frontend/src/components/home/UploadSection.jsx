import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
// import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

function UploadSection() {
  const [video, setVideo] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFile = (file) => {
    if (file && file.type.startsWith("video/")) {
      setVideo(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        mt: 8,
        px: 2,
      }}
    >
      <Box
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        sx={{
          width: "100%",
          maxWidth: "800px",
          border: "2px dashed #2563eb",
          borderRadius: "20px",
          p: 6,
          textAlign: "center",
          backgroundColor: dragOver ? "#eff6ff" : "#ffffff",
          transition: "0.3s",
        }}
      >
        {/* <CloudUploadOutlinedIcon
          sx={{ fontSize: 60, color: "#2563eb", mb: 2 }}
        /> */}

        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          Upload Your Video for Sign Language Conversion
        </Typography>

        <Typography sx={{ color: "gray", mb: 3 }}>
          Upload a video with spoken content. Our AI will convert it into a
          sign language video for better accessibility.
        </Typography>

        <Typography sx={{ color: "gray", mb: 3 }}>
          Supported formats: MP4, MOV, AVI
        </Typography>

        <Button
          variant="contained"
          component="label"
          sx={{
            px: 5,
            py: 1.5,
            borderRadius: "12px",
            backgroundColor: "#2563eb",
            fontWeight: "bold",
          }}
        >
          Upload Video
          <input
            type="file"
            accept="video/*"
            hidden
            onChange={(e) => handleFile(e.target.files[0])}
          />
        </Button>

        {video && (
          <Typography sx={{ mt: 3, color: "green", fontWeight: 500 }}>
            Video selected: {video.name}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default UploadSection;
