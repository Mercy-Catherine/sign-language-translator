import React from "react";
import { Box, Typography } from "@mui/material";

function StepsSection() {
  const steps = [
    {
      title: "Upload Video",
      desc: "Upload a video containing spoken content.",
    },
    {
      title: "AI Processing",
      desc: "Our AI converts the spoken content into sign language.",
    },
    {
      title: "View Result",
      desc: "Watch and download the sign language video.",
    },
  ];

  const circleSize = 80;

  return (
    <Box sx={{ width: "100%", py: 8, px: 2 }}>
      <Box
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          position: "relative",
        }}
      >
        {/* Connecting line */}
        <Box
          sx={{
            position: "absolute",
            top: circleSize / 2,
            left: `calc(16.66% + ${circleSize / 2}px)`,
            right: `calc(16.66% + ${circleSize / 2}px)`,
            height: "3px",
            backgroundColor: "#d1d5db",
            display: { xs: "none", md: "block" },
          }}
        />

        {/* Steps */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
            textAlign: "center",
          }}
        >
          {steps.map((step, index) => (
            <Box key={index}>
              <Box
                sx={{
                  width: circleSize,
                  height: circleSize,
                  mx: "auto",
                  mb: 2,
                  borderRadius: "50%",
                  backgroundColor: "#2563eb",
                  border: "2px solid #1e40af",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {index + 1}
              </Box>

              <Typography sx={{ fontWeight: 600, mb: 1 }}>
                {step.title}
              </Typography>

              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "0.95rem",
                  maxWidth: "260px",
                  mx: "auto",
                }}
              >
                {step.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default StepsSection;


