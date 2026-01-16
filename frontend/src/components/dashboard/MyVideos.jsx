
import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Chip,
  Stack,
} from "@mui/material";

const videos = [
  {
    id: 1,
    title: "Lecture on AI Basics",
    date: "12 Sep 2025",
    status: "Processed",
  },
  {
    id: 2,
    title: "Interview Practice Video",
    date: "14 Sep 2025",
    status: "Pending",
  },
];

function MyVideos() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        My Videos
      </Typography>

      <Typography sx={{ color: "text.secondary", mb: 4 }}>
        View and manage your converted sign language videos.
      </Typography>

      <Stack spacing={3}>
        {videos.map((video) => (
          <Paper
            key={video.id}
            sx={{
              p: 3,
              borderRadius: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
            }}
          >
            {/* Left Info */}
            <Box>
              <Typography sx={{ fontWeight: 600 }}>
                {video.title}
              </Typography>

              <Typography
                sx={{ fontSize: "0.85rem", color: "text.secondary", mb: 1 }}
              >
                Uploaded on {video.date}
              </Typography>

              <Chip
                label={video.status}
                color={video.status === "Processed" ? "success" : "warning"}
                size="small"
              />
            </Box>

            {/* Actions */}
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <Button
                variant="outlined"
                disabled={video.status !== "Processed"}
              >
                View
              </Button>

              <Button
                variant="contained"
                disabled={video.status !== "Processed"}
                sx={{
                  backgroundColor: "#2563eb",
                }}
              >
                Download
              </Button>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

export default MyVideos;
