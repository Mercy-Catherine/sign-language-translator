import React from "react";
import { Box, Typography } from "@mui/material";

function InfoSection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f8fafc",
        py: 10,
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 2 }}
        >
          Making Video Content Accessible with AI
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            maxWidth: "700px",
            mx: "auto",
            mb: 6,
            color: "text.secondary",
            fontSize: "1.05rem",
          }}
        >
          We help bridge the communication gap by converting spoken videos into
          meaningful sign language content for the deaf and mute community.
        </Typography>

        {/* Feature Row */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#ffffff",
              p: 4,
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <Typography sx={{ fontWeight: 600, mb: 1 }}>
              Inclusive Communication
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: "0.95rem" }}>
              Enables individuals with hearing and speech impairments to
              understand video content through sign language.
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#ffffff",
              p: 4,
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <Typography sx={{ fontWeight: 600, mb: 1 }}>
              AI-Driven Processing
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: "0.95rem" }}>
              Advanced AI models analyze spoken content and generate accurate
              sign language representations.
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#ffffff",
              p: 4,
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <Typography sx={{ fontWeight: 600, mb: 1 }}>
              Simple & User Friendly
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: "0.95rem" }}>
              Upload a video, let the system process it, and receive a sign
              language version with ease.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default InfoSection;

