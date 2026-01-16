import React, { useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

function UploadVideo() {
  const [videoFile, setVideoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
    setResult("");
    setError("");
  };

  const handleUpload = async () => {
    if (!videoFile) {
      alert("Please select a video file");
      return;
    }

    setLoading(true);
    setResult("");
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", videoFile);

      const response = await fetch("http://127.0.0.1:8000/video", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.error || "Failed to process video");
      } else {
        setResult(data.recognized_text);
      }
    } catch (err) {
      setError("Backend not reachable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {/* Page Title */}
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        Upload Video
      </Typography>

      <Typography sx={{ color: "text.secondary", mb: 4 }}>
        Upload a video to generate its sign language version.
      </Typography>

      {/* Upload Card */}
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
          Choose a video file containing spoken content.
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
            mr: 2,
          }}
        >
          Choose Video
          <input
            type="file"
            accept="video/*"
            hidden
            onChange={handleFileChange}
          />
        </Button>

        <Button
          variant="outlined"
          onClick={handleUpload}
          disabled={loading}
          sx={{ px: 4, py: 1.3, borderRadius: "12px" }}
        >
          {loading ? "Processing..." : "Upload & Convert"}
        </Button>

        {/* Result */}
        {result && (
          <Typography sx={{ mt: 4, fontWeight: 600 }}>
            Recognized Text:
            <br />
            <span style={{ color: "#2563eb" }}>{result}</span>
          </Typography>
        )}

        {/* Error */}
        {error && (
          <Typography sx={{ mt: 4, color: "red", fontWeight: 600 }}>
            {error}
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export default UploadVideo;
