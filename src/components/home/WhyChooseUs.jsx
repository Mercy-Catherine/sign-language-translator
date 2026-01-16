import React from "react";
import { Box, Typography } from "@mui/material";

function WhyChooseUsAlt() {
  const data = [
    {
      title: "AI-Powered Gesture Recognition",
      desc: "Our system intelligently analyzes sign language gestures to generate accurate, readable text for seamless understanding.",
    },
    {
      title: "Built for Accessibility",
      desc: "Designed specifically to support deaf and speech-impaired users by removing communication barriers.",
    },
    {
      title: "Simple, Fast & Reliable",
      desc: "Upload your video and receive text output instantly without any technical complexity.",
    },
  ];

  return (
    <Box sx={{ py: 8, px: 2, mt: 10, backgroundColor: "#f4f7fb" }}>
        <Box
  sx={{
    width: "80px",
    height: "4px",
    // backgroundColor: "#2563eb",
    borderRadius: "4px",
    mx: "auto",
    mb: 3,
  }}
/>

      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
          gap: 6,
          alignItems: "center",
        }}
      >
        {/* Left Section */}
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 2, color: "#0f172a" }}
          >
            Why Our Platform Makes Communication Inclusive
          </Typography>

          <Typography sx={{ color: "text.secondary", fontSize: "1.05rem" }}>
            Built with accessibility and AI at its core to empower inclusive
            communication.
          </Typography>
        </Box>

        {/* Right Section */}
        <Box sx={{ position: "relative", pl: 4 }}>
          {/* Vertical Line */}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: "4px",
              backgroundColor: "#2563eb",
              borderRadius: "4px",
            }}
          />

          {data.map((item, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  mb: 1,
                  color: "#1e293b",
                }}
              >
                {item.title}
              </Typography>

              <Typography sx={{ color: "text.secondary", fontSize: "0.95rem" }}>
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default WhyChooseUsAlt;
